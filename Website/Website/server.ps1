$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "Server đang chạy tại http://localhost:$port/" -ForegroundColor Green
} catch {
    Write-Host "Không thể mở port $port, thử port 8081..." -ForegroundColor Yellow
    $port = 8081
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    Write-Host "Server đang chạy tại http://localhost:$port/" -ForegroundColor Green
}

$root = $PSScriptRoot

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath

        # API Route for Multi-Device Cross-Device Real-time Synchronization
        if ($path -eq "/api/state" -or $path -eq "/api/state/") {
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS")
            $response.AddHeader("Access-Control-Allow-Headers", "Content-Type")

            if ($request.HttpMethod -eq "OPTIONS") {
                $response.StatusCode = 200
                $response.Close()
                continue
            }

            $dataDir = Join-Path $root "data"
            if (-not (Test-Path $dataDir)) {
                New-Item -ItemType Directory -Force -Path $dataDir | Out-Null
            }
            $stateFilePath = Join-Path $dataDir "state.json"

            if ($request.HttpMethod -eq "GET") {
                if (Test-Path $stateFilePath) {
                    $bytes = [System.IO.File]::ReadAllBytes($stateFilePath)
                    $response.ContentType = "application/json; charset=utf-8"
                    $response.ContentLength64 = $bytes.Length
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                } else {
                    $response.ContentType = "application/json; charset=utf-8"
                    $emptyObj = [System.Text.Encoding]::UTF8.GetBytes("{}")
                    $response.ContentLength64 = $emptyObj.Length
                    $response.OutputStream.Write($emptyObj, 0, $emptyObj.Length)
                }
                $response.Close()
                continue
            }
            elseif ($request.HttpMethod -eq "POST" -or $request.HttpMethod -eq "PUT") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $body = $reader.ReadToEnd()
                $reader.Close()

                if ($body) {
                    [System.IO.File]::WriteAllText($stateFilePath, $body, [System.Text.Encoding]::UTF8)
                    $resBytes = [System.Text.Encoding]::UTF8.GetBytes('{"status":"ok","message":"Synced successfully"}')
                    $response.ContentType = "application/json; charset=utf-8"
                    $response.ContentLength64 = $resBytes.Length
                    $response.OutputStream.Write($resBytes, 0, $resBytes.Length)
                } else {
                    $response.StatusCode = 400
                }
                $response.Close()
                continue
            }
        }

        # Static File Serving Logic
        if ($path -eq "/" -or $path -eq "") { $path = "/index.html" }
        if ($path -eq "/admin" -or $path -eq "/admin/") { $path = "/index.html" }
        $filePath = Join-Path $root $path

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()

            switch ($ext) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".svg"  { $response.ContentType = "image/svg+xml" }
                ".json" { $response.ContentType = "application/json; charset=utf-8" }
                default { $response.ContentType = "application/octet-stream" }
            }

            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.Close()
    } catch {
        # ignore errors on listener close
    }
}
