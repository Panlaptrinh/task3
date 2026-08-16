/**
 * PN TASK — CLASSIC VINTAGE EXECUTIVE ENGINE (PURE VIETNAMESE & NO ICONS)
 * Admin Credentials: username: pn | password: 123465
 */

// Default State Store (Default loggedOut until authenticated)
const defaultPnTaskState = {
  activeWorkspaceCode: 'PNTASK-2026',
  isLoggedIn: false,
  currentUser: null,
  userSettings: {
    theme: 'dark',
    accentColor: '#C5A059'
  },
  users: [
    { id: 'u-pn', username: 'pn', pass: '123465', name: 'PN', role: 'Quản trị viên (Giám đốc)', avatar: 'PN', status: 'APPROVED', permissions: { canDeleteTask: true, canCreateProject: true, canExportData: true, canAccessSettings: true, canManageUsers: true } },
    { id: 'u-1', username: 'hau', pass: '123456', name: 'Hậu', role: 'Quản lý Dự án', avatar: 'H', status: 'APPROVED', permissions: { canDeleteTask: true, canCreateProject: true, canExportData: true, canAccessSettings: false, canManageUsers: false } },
    { id: 'u-2', username: 'hanh', pass: '123456', name: 'Hạnh', role: 'Thành viên (Thiết kế)', avatar: 'H', status: 'APPROVED', permissions: { canDeleteTask: false, canCreateProject: false, canExportData: false, canAccessSettings: false, canManageUsers: false } },
    { id: 'u-3', username: 'tram', pass: '123456', name: 'Trâm', role: 'Thành viên (Lập trình)', avatar: 'T', status: 'APPROVED', permissions: { canDeleteTask: false, canCreateProject: false, canExportData: false, canAccessSettings: false, canManageUsers: false } },
    { id: 'u-4', username: 'tran', pass: '123456', name: 'Trân', role: 'Khách hàng (Người xem)', avatar: 'T', status: 'APPROVED', permissions: { canDeleteTask: false, canCreateProject: false, canExportData: false, canAccessSettings: false, canManageUsers: false } },
    { id: 'u-5', username: 'user', pass: '123456', name: 'Người Dùng Cá Nhân', role: 'Người dùng (Thành viên cá nhân)', avatar: 'N', status: 'APPROVED', permissions: { canDeleteTask: false, canCreateProject: false, canExportData: false, canAccessSettings: false, canManageUsers: false } }
  ],
  pendingRegistrations: [
    { id: 'req-101', name: 'Nguyễn Văn Bạn', username: 'bannguyen', pass: '654321', email: 'ban@gmail.com', requestDate: 'Vừa xong', status: 'PENDING_APPROVAL' }
  ],
  tasks: [
    {
      id: 'task-1',
      title: 'Chiến dịch Tiếp thị Kỹ thuật số Q3 - PN Task',
      desc: 'Nghiên cứu thị trường và lên chiến lược tối ưu từ khóa thương mại điện tử.',
      status: 'IN_PROGRESS',
      priority: 'HIGH',
      project: 'Marketing Kỹ thuật số',
      assignee: 'Hậu',
      creator: 'PN',
      due: '14/08/2026',
      doToday: true,
      subtasks: [
        { id: 101, text: 'Phân tích đối thủ cạnh tranh', done: true },
        { id: 102, text: 'Xây dựng chân dung khách hàng', done: true }
      ],
      attachments: [
        { id: 'att-1', name: 'Ke_Hoach_Marketing_PN.pdf', size: '2.4 MB', dataUrl: '' }
      ],
      comments: ['PN: Đã phê duyệt kế hoạch triển khai cho Hậu.']
    },
    {
      id: 'task-2',
      title: 'Thiết kế Slide thuyết trình Dự án PN Task',
      desc: 'Tạo bộ mẫu giao diện thiết kế và tài liệu giới thiệu.',
      status: 'TODO',
      priority: 'MEDIUM',
      project: 'Hệ thống PN Task',
      assignee: 'Hạnh',
      creator: 'PN',
      due: '15/08/2026',
      doToday: false,
      subtasks: [],
      attachments: [],
      comments: []
    },
    {
      id: 'task-3',
      title: 'Nghiên cứu tài liệu Phân tích Dữ liệu & SQL Nâng cao',
      desc: 'Xem lại các câu hỏi thực hành SQL và tối ưu truy vấn dữ liệu.',
      status: 'IN_REVIEW',
      priority: 'URGENT',
      project: 'Tài liệu Học tập',
      assignee: 'Trâm',
      creator: 'Trâm',
      due: '18/08/2026',
      doToday: true,
      subtasks: [],
      attachments: [],
      comments: []
    },
    {
      id: 'task-4',
      title: 'Cập nhật tài liệu Giao diện Lập trình API v3',
      desc: 'Xuất tệp tài liệu tiêu chuẩn kỹ thuật phần mềm.',
      status: 'DONE',
      priority: 'LOW',
      project: 'Hệ thống PN Task',
      assignee: 'Tất cả',
      creator: 'PN',
      due: '12/08/2026',
      doToday: false,
      subtasks: [],
      attachments: [],
      comments: []
    }
  ],
  projects: [
    { id: 'proj-1', name: 'Marketing Kỹ thuật số', desc: 'Chiến dịch tiếp thị số quý 3', tasksCount: 8, progress: 78, due: '30/08/2026', owner: 'PN' },
    { id: 'proj-2', name: 'Phân tích Dữ liệu', desc: 'Phân tích dữ liệu doanh nghiệp', tasksCount: 5, progress: 60, due: '25/08/2026', owner: 'Trâm' },
    { id: 'proj-3', name: 'Hệ thống PN Task', desc: 'Hệ thống Quản lý công việc Doanh nghiệp', tasksCount: 12, progress: 90, due: '15/09/2026', owner: 'Hậu' }
  ],
  studyDocs: [
    {
      id: 'doc-1',
      title: 'Tài liệu Khóa học Phát triển Web Modern & SaaS OS',
      category: 'Khóa học & Bài giảng',
      topic: 'Công nghệ Thông tin',
      status: 'IN_PROGRESS',
      progress: 80,
      author: 'Đội ngũ PN Task',
      link: 'https://developer.mozilla.org',
      note: 'Bộ tài liệu hướng dẫn xây dựng giao diện ứng dụng quản trị công việc thời gian thực.',
      date: '14/08/2026',
      file: { id: 'sf-1', name: 'Tai_Lieu_Phat_Trien_Web.pdf', size: '2.4 MB', dataUrl: '' },
      attachments: [{ id: 'sf-1', name: 'Tai_Lieu_Phat_Trien_Web.pdf', size: '2.4 MB', dataUrl: '' }]
    },
    {
      id: 'doc-2',
      title: 'Sách Quản trị Dự án Agile & Scrum Enterprise',
      category: 'Ebook & PDF',
      topic: 'Quản trị Doanh nghiệp',
      status: 'COMPLETED',
      progress: 100,
      author: 'Tổ chức Agile Alliance',
      link: 'https://scrumguides.org',
      note: 'Quy trình vận hành chu kỳ 2 tuần và phân công công việc nhóm hiệu quả.',
      date: '10/08/2026',
      file: { id: 'sf-2', name: 'Agile_Scrum_Doanh_Nghiep.pdf', size: '5.1 MB', dataUrl: '' },
      attachments: [{ id: 'sf-2', name: 'Agile_Scrum_Doanh_Nghiep.pdf', size: '5.1 MB', dataUrl: '' }]
    },
    {
      id: 'doc-3',
      title: 'Ghi chú Chuyên sâu SQL & Tối ưu Truy vấn',
      category: 'Ghi chú Tự học',
      topic: 'Khoa học Dữ liệu',
      status: 'REVIEW',
      progress: 60,
      author: 'Cá nhân tự soạn',
      link: '',
      note: 'Tóm tắt câu lệnh Indexing, CTE và các hàm xử lý dữ liệu nâng cao.',
      date: '12/08/2026',
      file: null,
      attachments: []
    }
  ],
  focusSessions: { mode: '25/5', plannedMinutes: 25, secondsRemaining: 1500, active: false, completedToday: 4, totalMinutesToday: 100 },
  habits: [
    { id: 'h-1', name: 'Đọc tài liệu 30 phút mỗi ngày', streak: 14, weekCheck: [true, true, true, true, true, false, true] },
    { id: 'h-2', name: 'Uống 2 lít nước mỗi ngày', streak: 8, weekCheck: [true, true, true, true, true, true, true] }
  ],
  notes: [
    { id: 'n-1', title: 'Tài liệu Quản trị Admin PN', content: 'Cấp quyền tài khoản, theo dõi tiến độ công việc thành viên và đồng bộ thời gian thực.', date: '14/08/2026' },
    { id: 'n-2', title: 'Ý tưởng phát triển PN Task v2', content: 'Thêm tính năng chat nhóm realtime kèm đính kèm file thật, bộ đếm thời gian tập trung và quản lý lịch trình.', date: '14/08/2026' }
  ],
  activeNoteId: 'n-1',
  files: [
    { id: 'f-1', name: 'PN_Task_Bao_Cao_Tong_Quan.pdf', size: '3.4 MB', category: 'Dự án', date: '08/08/2026', owner: 'PN', dataUrl: '' },
    { id: 'f-2', name: 'Bo_Thiet_Ke_Slide_Thuyết_Trình.fig', size: '12.8 MB', category: 'Thiết kế', date: '12/08/2026', owner: 'Hạnh', dataUrl: '' }
  ],
  chatMessages: [
    { id: 'm-1', sender: 'PN', avatar: 'PN', role: 'Quản trị viên (Giám đốc)', text: 'Chào mọi người, tôi đã khởi tạo xong hệ thống PN Task với đầy đủ tính năng phân công việc và chat nhóm thời gian thực.', file: null, time: '09:00 AM' },
    { id: 'm-2', sender: 'Hậu', avatar: 'H', role: 'Quản lý Dự án', text: 'Cảm ơn Admin PN. Đội dự án đang bắt đầu triển khai các công việc cá nhân và công việc nhóm.', file: null, time: '09:05 AM' }
  ],
  auditLogs: [
    { id: 1, user: 'PN', action: 'Nâng cấp Giao diện Cổ điển & Chuẩn hóa Tiếng Việt', time: 'Vừa xong' }
  ]
};

// Global State Engine
let hfState = getInitialState();
let syncChannel = null;
let pomodoroTimerInterval = null;
let activeDrawerTaskId = null;
let currentTaskFilter = 'all';

function getStorageKey(code) { return `pntask_ws_${code || 'PNTASK-2026'}`; }

function formatStatusVN(s) {
  if (s === 'TODO') return 'Cần làm';
  if (s === 'IN_PROGRESS') return 'Đang thực hiện';
  if (s === 'IN_REVIEW') return 'Đang kiểm duyệt';
  if (s === 'DONE') return 'Đã hoàn thành';
  return s || 'Cần làm';
}

function formatPriorityVN(p) {
  if (p === 'LOW') return 'Thấp';
  if (p === 'MEDIUM') return 'Trung bình';
  if (p === 'HIGH') return 'Cao';
  if (p === 'URGENT') return 'Khẩn cấp';
  return p || 'Trung bình';
}

function getInitialState() {
  const code = localStorage.getItem('pntask_active_ws_code') || 'PNTASK-2026';
  const saved = localStorage.getItem(getStorageKey(code));
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (!parsed.studyDocs) {
        parsed.studyDocs = defaultPnTaskState.studyDocs;
      }
      return parsed;
    } catch (e) {}
  }
  const initState = JSON.parse(JSON.stringify(defaultPnTaskState));
  initState.isLoggedIn = false;
  initState.currentUser = null;
  return initState;
}

/* ==========================================================================
   REALTIME CLOUD & CROSS-DEVICE SERVER SYNCHRONIZATION ENGINE
   ========================================================================== */
let firebaseApp = null;
let firebaseDb = null;
let isCloudConnected = false;
let isServerConnected = false;
let isSyncingToCloud = false;
let isSyncingToServer = false;
let serverSyncInterval = null;

const defaultFirebaseConfig = {
  databaseURL: "https://task-293-default-rtdb.asia-southeast1.firebasedatabase.app"
};

function getFirebaseConfig() {
  const customUrl = localStorage.getItem('pntask_firebase_db_url');
  if (customUrl && customUrl.trim()) {
    return { databaseURL: customUrl.trim() };
  }
  return defaultFirebaseConfig;
}

function saveCustomFirebaseUrl() {
  const input = document.getElementById('customFirebaseUrlInput');
  const url = input ? input.value.trim() : '';
  if (url) {
    localStorage.setItem('pntask_firebase_db_url', url);
    showToast('Đã lưu URL Firebase Cloud! Đang khởi động lại đồng bộ...');
  } else {
    localStorage.removeItem('pntask_firebase_db_url');
    showToast('Đã khôi phục về URL mặc định.');
  }
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

function initRealtimeCloudSync() {
  try {
    if (typeof firebase !== 'undefined') {
      const config = getFirebaseConfig();
      if (!firebase.apps.length) {
        firebaseApp = firebase.initializeApp(config);
      } else {
        firebaseApp = firebase.app();
      }

      firebaseDb = firebase.database();
      
      const connectedRef = firebaseDb.ref(".info/connected");
      connectedRef.on("value", (snap) => {
        if (snap.val() === true) {
          isCloudConnected = true;
          updateCloudSyncStatusBadge();
        } else {
          isCloudConnected = false;
          updateCloudSyncStatusBadge();
        }
      });

      const cloudStateRef = firebaseDb.ref("pnTaskWorkspaceState");
      cloudStateRef.on("value", (snapshot) => {
        const remoteData = snapshot.val();
        if (remoteData && typeof remoteData === 'object') {
          const remoteState = remoteData.state || remoteData;
          const remoteUpdated = remoteData.updatedAt || remoteState._lastUpdated || 0;
          const localUpdated = hfState._lastUpdated || 0;

          if (!isSyncingToCloud && remoteUpdated > localUpdated + 100) {
            const localUser = hfState ? hfState.currentUser : null;
            hfState = remoteState;
            hfState._lastUpdated = remoteUpdated;
            if (localUser) {
              const matchingUser = (hfState.users || []).find(u => u.id === localUser.id);
              if (matchingUser) hfState.currentUser = matchingUser;
            }
            saveHfStateLocallyOnly();
            renderAllViews();
            showToast('🟢 Đã đồng bộ thời gian thực từ Đám mây!');
          }
        }
      }, (err) => {
        console.warn("Cloud Sync Notice:", err);
      });
    } else {
      updateCloudSyncStatusBadge();
    }
  } catch (err) {
    console.warn("Cloud Sync Init Exception:", err);
    updateCloudSyncStatusBadge();
  }
}

function initServerSync() {
  fetchServerState(true);
  if (serverSyncInterval) clearInterval(serverSyncInterval);
  serverSyncInterval = setInterval(() => {
    fetchServerState(false);
  }, 2000);
}

function fetchServerState(isInitial = false) {
  fetch('/api/state')
    .then(res => {
      if (!res.ok) throw new Error('Server API unavailable');
      return res.json();
    })
    .then(data => {
      isServerConnected = true;
      updateCloudSyncStatusBadge();

      if (data && data.state && data.updatedAt) {
        const localUpdated = hfState._lastUpdated || 0;
        if (data.updatedAt > localUpdated + 100) {
          const localUser = hfState ? hfState.currentUser : null;
          hfState = data.state;
          hfState._lastUpdated = data.updatedAt;

          if (localUser) {
            const matchingUser = (hfState.users || []).find(u => u.id === localUser.id);
            if (matchingUser) hfState.currentUser = matchingUser;
          }

          saveHfStateLocallyOnly();
          renderAllViews();

          if (!isInitial) {
            showToast('🟢 Đã đồng bộ dữ liệu mới nhất từ thiết bị khác!');
          }
        }
      }
    })
    .catch(() => {
      isServerConnected = false;
      updateCloudSyncStatusBadge();
    });
}

function pushStateToServer() {
  if (isSyncingToServer) return;
  isSyncingToServer = true;

  const payload = JSON.stringify({
    code: hfState.activeWorkspaceCode || 'PNTASK-2026',
    updatedAt: hfState._lastUpdated || Date.now(),
    state: hfState
  });

  fetch('/api/state', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload
  })
  .then(res => res.json())
  .then(() => {
    isSyncingToServer = false;
    isServerConnected = true;
    updateCloudSyncStatusBadge();
  })
  .catch(() => {
    isSyncingToServer = false;
    isServerConnected = false;
    updateCloudSyncStatusBadge();
  });
}

function pushStateToCloud() {
  if (firebaseDb && isCloudConnected) {
    try {
      isSyncingToCloud = true;
      const cloudPayload = {
        updatedAt: hfState._lastUpdated || Date.now(),
        state: hfState
      };
      firebaseDb.ref("pnTaskWorkspaceState").set(cloudPayload, (err) => {
        isSyncingToCloud = false;
        if (!err) {
          updateCloudSyncStatusBadge();
        }
      });
    } catch (e) {
      isSyncingToCloud = false;
    }
  }
}

function updateCloudSyncStatusBadge() {
  const badgeElem = document.getElementById('cloudSyncStatusBadge');
  const textElem = document.getElementById('settingsCloudSyncStatusText');

  const isConnected = isServerConnected || isCloudConnected;
  let statusMsg = '🟢 Đã đồng bộ Đa thiết bị';
  if (isServerConnected && isCloudConnected) {
    statusMsg = '🟢 Máy chủ & Đám mây';
  } else if (isServerConnected) {
    statusMsg = '🟢 Máy chủ Nội bộ (LAN)';
  } else if (isCloudConnected) {
    statusMsg = '🟢 Đám mây Google';
  } else {
    statusMsg = '🟡 Đang lưu Cục bộ';
  }

  if (badgeElem) {
    if (isConnected) {
      badgeElem.style.background = 'rgba(46, 204, 113, 0.15)';
      badgeElem.style.color = '#2ecc71';
      badgeElem.style.border = '1px solid rgba(46, 204, 113, 0.4)';
      badgeElem.innerHTML = statusMsg;
    } else {
      badgeElem.style.background = 'rgba(241, 196, 15, 0.15)';
      badgeElem.style.color = '#f1c40f';
      badgeElem.style.border = '1px solid rgba(241, 196, 15, 0.4)';
      badgeElem.innerHTML = statusMsg;
    }
  }

  if (textElem) {
    textElem.innerHTML = isConnected ? `🟢 Đã kết nối Đồng bộ (${statusMsg})` : '🟡 Đang ở chế độ Cục bộ (Trình duyệt)';
    textElem.style.color = isConnected ? '#2ecc71' : '#f1c40f';
  }
}

function forceManualCloudSync() {
  hfState._lastUpdated = Date.now();
  saveHfState(true);
  fetchServerState(false);
  showToast('⚡ Đã kích hoạt đồng bộ dữ liệu ngay lập tức tới tất cả thiết bị!');
}

function saveHfStateLocallyOnly() {
  recomputeAllMetrics();
  const code = hfState.activeWorkspaceCode || 'PNTASK-2026';
  localStorage.setItem('pntask_active_ws_code', code);
  localStorage.setItem(getStorageKey(code), JSON.stringify(hfState));
}

function saveHfState(broadcast = true) {
  hfState._lastUpdated = Date.now();
  saveHfStateLocallyOnly();

  const code = hfState.activeWorkspaceCode || 'PNTASK-2026';

  if (broadcast && syncChannel) {
    try {
      syncChannel.postMessage({ type: 'SYNC_STATE', code: code, state: hfState, updatedAt: hfState._lastUpdated });
    } catch (e) {}
  }

  if (broadcast) {
    pushStateToServer();
    pushStateToCloud();
  }
}

function formatBytes(bytes) {
  if (bytes === 0 || !bytes) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function downloadRealFile(dataUrl, fileName) {
  if (!dataUrl) {
    showToast(`Đang tải tệp [${fileName}]...`);
    return;
  }
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`Đã tải tệp [${fileName}] về máy thành công.`);
}

/* ==========================================================================
   ISOLATED TASK ACCESS CONTROL & PERMISSION ENGINE
   ========================================================================== */
function checkIsAdmin(user) {
  if (!user) return false;
  if (user.username === 'pn' || user.id === 'u-pn' || user.name === 'PN') return true;
  if (user.permissions && user.permissions.canManageUsers === true) return true;
  const role = (user.role || '').toLowerCase();
  if (
    role.includes('quản trị') ||
    role.includes('admin') ||
    role.includes('qtv') ||
    role.includes('giám đốc')
  ) {
    return true;
  }
  return false;
}

function hasPermission(permissionName) {
  const user = hfState.currentUser;
  if (!user) return false;
  if (checkIsAdmin(user)) return true;

  return user.permissions && user.permissions[permissionName] === true;
}

function getVisibleTasks() {
  const user = hfState.currentUser;
  if (!user) return [];

  if (checkIsAdmin(user)) {
    return hfState.tasks || [];
  }

  return (hfState.tasks || []).filter(t => {
    const assignee = (t.assignee || '').trim().toLowerCase();
    const isGroupTask = assignee === 'tất cả' || assignee === 'cả nhóm' || assignee === 'all' || assignee === 'nhóm' || assignee === 'group';

    const isMyAssignedTask = (t.assignee === user.name || t.assignee === user.username);
    const isMyCreatedTask = (t.creator === user.name || t.creator === user.username);

    return isGroupTask || isMyAssignedTask || isMyCreatedTask;
  });
}

/* ==========================================================================
   DYNAMIC FAST-SWITCH USER MODAL
   ========================================================================== */
function renderFastSwitchModal() {
  const container = document.getElementById('fastSwitchUserListContainer');
  if (!container) return;

  const currentUser = hfState.currentUser;

  const avElem = document.getElementById('dropdownCurrentAvatar');
  const nameElem = document.getElementById('dropdownCurrentName');
  const roleElem = document.getElementById('dropdownCurrentRole');

  if (currentUser) {
    if (avElem) avElem.textContent = currentUser.avatar || (currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U');
    if (nameElem) nameElem.textContent = currentUser.name || 'Người dùng';
    if (roleElem) roleElem.textContent = currentUser.role || 'Thành viên';
  } else {
    if (avElem) avElem.textContent = '?';
    if (nameElem) nameElem.textContent = 'Chưa đăng nhập';
    if (roleElem) roleElem.textContent = 'Khách';
  }

  container.innerHTML = '';

  // Render security isolation notice and direct logout button
  const securityNotice = document.createElement('div');
  securityNotice.style.cssText = 'font-size: 0.82rem; color: var(--text-secondary); background: var(--bg-secondary); padding: 12px; border-radius: 8px; text-align: center; margin-bottom: 12px; line-height: 1.4; border: 1px solid var(--border);';
  securityNotice.innerHTML = '🔒 <strong>Bảo mật Cá nhân Đã Bật</strong><br>Mỗi người dùng chỉ được phép truy cập tài khoản của chính mình. Tính năng chuyển đổi tài khoản trực tiếp đã bị khóa.';
  container.appendChild(securityNotice);

  const logoutBtn = document.createElement('button');
  logoutBtn.className = 'hf-btn hf-btn-secondary';
  logoutBtn.style.width = '100%';
  logoutBtn.style.padding = '10px';
  logoutBtn.style.fontSize = '0.85rem';
  logoutBtn.style.color = '#e74c3c';
  logoutBtn.style.borderColor = 'rgba(231, 76, 60, 0.4)';
  logoutBtn.innerHTML = 'Đăng xuất khỏi Hệ thống';
  logoutBtn.onclick = (e) => {
    e.stopPropagation();
    const modal = document.getElementById('userProfileDropdownModal');
    if (modal) modal.classList.remove('active');
    logoutPnTaskUser();
  };
  container.appendChild(logoutBtn);
}

function openMyProfileModal() {
  const currentUser = hfState.currentUser;
  if (!currentUser) {
    alert('Vui lòng đăng nhập để chỉnh sửa hồ sơ.');
    return;
  }

  const avElem = document.getElementById('myProfileAvatarDisplay');
  const roleElem = document.getElementById('myProfileRoleDisplay');
  const nameInput = document.getElementById('myProfileFullNameInput');
  const userInput = document.getElementById('myProfileUsernameInput');
  const passInput = document.getElementById('myProfilePasswordInput');
  const mailInput = document.getElementById('myProfileEmailInput');

  if (avElem) avElem.textContent = currentUser.avatar || currentUser.name.charAt(0).toUpperCase();
  if (roleElem) roleElem.textContent = currentUser.role || 'Thành viên';
  if (nameInput) nameInput.value = currentUser.name || '';
  if (userInput) userInput.value = currentUser.username || '';
  if (passInput) passInput.value = currentUser.pass || '';
  if (mailInput) mailInput.value = currentUser.email || '';

  const modal = document.getElementById('myProfileModalOverlay');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function closeMyProfileModal() {
  const modal = document.getElementById('myProfileModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function submitSaveMyProfile() {
  const currentUser = hfState.currentUser;
  if (!currentUser) return;

  const newName = document.getElementById('myProfileFullNameInput')?.value.trim();
  const newUsername = document.getElementById('myProfileUsernameInput')?.value.trim().toLowerCase();
  const newPassword = document.getElementById('myProfilePasswordInput')?.value.trim();
  const newEmail = document.getElementById('myProfileEmailInput')?.value.trim();

  if (!newName || !newUsername || !newPassword) {
    alert('Vui lòng điền đầy đủ Họ tên, Tên đăng nhập và Mật khẩu.');
    return;
  }

  const dup = (hfState.users || []).find(u => u.id !== currentUser.id && u.username.toLowerCase() === newUsername);
  if (dup) {
    alert('Tên đăng nhập này đã được dùng bởi tài khoản khác.');
    return;
  }

  currentUser.name = newName;
  currentUser.username = newUsername;
  currentUser.pass = newPassword;
  currentUser.email = newEmail || 'Không có';
  currentUser.avatar = newName.charAt(0).toUpperCase();

  const uObj = (hfState.users || []).find(u => u.id === currentUser.id);
  if (uObj) {
    uObj.name = newName;
    uObj.username = newUsername;
    uObj.pass = newPassword;
    uObj.email = newEmail || 'Không có';
    uObj.avatar = newName.charAt(0).toUpperCase();
  }

  addAuditLog(`Đã tự cập nhật hồ sơ cá nhân [${newName}]`);
  saveHfState(true);
  closeMyProfileModal();
  renderAllViews();
  showToast(`Đã cập nhật thành công hồ sơ cá nhân của bạn.`);
}

function renderSettings() {
  const currentUser = hfState.currentUser;
  if (!currentUser) return;

  const avElem = document.getElementById('settingsUserAvatarDisplay');
  const nameElem = document.getElementById('settingsUserNameDisplay');
  const roleElem = document.getElementById('settingsUserRoleDisplay');
  const nameInput = document.getElementById('settingsFullNameInput');
  const userInput = document.getElementById('settingsUsernameInput');
  const passInput = document.getElementById('settingsPasswordInput');
  const mailInput = document.getElementById('settingsEmailInput');

  if (avElem) avElem.textContent = currentUser.avatar || currentUser.name.charAt(0).toUpperCase();
  if (nameElem) nameElem.textContent = currentUser.name;
  if (roleElem) roleElem.textContent = currentUser.role;
  if (nameInput) nameInput.value = currentUser.name || '';
  if (userInput) userInput.value = currentUser.username || '';
  if (passInput) passInput.value = currentUser.pass || '';
  if (mailInput) mailInput.value = currentUser.email || '';

  const customUrlInput = document.getElementById('customFirebaseUrlInput');
  if (customUrlInput) {
    customUrlInput.value = localStorage.getItem('pntask_firebase_db_url') || '';
  }
}

function submitSaveSettingsProfile() {
  const currentUser = hfState.currentUser;
  if (!currentUser) return;

  const newName = document.getElementById('settingsFullNameInput')?.value.trim();
  const newUsername = document.getElementById('settingsUsernameInput')?.value.trim().toLowerCase();
  const newPassword = document.getElementById('settingsPasswordInput')?.value.trim();
  const newEmail = document.getElementById('settingsEmailInput')?.value.trim();

  if (!newName || !newUsername || !newPassword) {
    alert('Vui lòng điền đầy đủ Họ tên, Tên đăng nhập và Mật khẩu.');
    return;
  }

  const dup = (hfState.users || []).find(u => u.id !== currentUser.id && u.username.toLowerCase() === newUsername);
  if (dup) {
    alert('Tên đăng nhập này đã được dùng bởi tài khoản khác.');
    return;
  }

  currentUser.name = newName;
  currentUser.username = newUsername;
  currentUser.pass = newPassword;
  currentUser.email = newEmail || 'Không có';
  currentUser.avatar = newName.charAt(0).toUpperCase();

  const uObj = (hfState.users || []).find(u => u.id === currentUser.id);
  if (uObj) {
    uObj.name = newName;
    uObj.username = newUsername;
    uObj.pass = newPassword;
    uObj.email = newEmail || 'Không có';
    uObj.avatar = newName.charAt(0).toUpperCase();
  }

  addAuditLog(`Đã tự cập nhật hồ sơ cá nhân [${newName}] từ Cài đặt`);
  saveHfState(true);
  renderAllViews();
  showToast(`Đã lưu thay đổi hồ sơ cá nhân thành công.`);
}

/* ==========================================================================
   DEDICATED PORTALS & AUTHENTICATION
   ========================================================================== */
let currentLoginPortalMode = 'client';

function setLoginPortalMode(mode) {
  currentLoginPortalMode = mode;

  const btnClient = document.getElementById('btnPortalClient');
  const btnAdmin = document.getElementById('btnPortalAdmin');
  const clientForm = document.getElementById('clientLoginFormContainer');
  const adminForm = document.getElementById('adminLoginFormContainer');
  const registerForm = document.getElementById('registerFormContainer');
  const tabReg = document.getElementById('tabBtnRegister');
  const tabLogin = document.getElementById('tabBtnLogin');
  const title = document.getElementById('loginGatewayTitle');
  const portalSwitcherBox = document.getElementById('loginPortalSwitcherBox');
  const portalLinkBox = document.getElementById('loginPortalLinkBox');

  if (mode === 'admin') {
    if (btnClient) { btnClient.className = 'hf-btn hf-btn-secondary'; }
    if (btnAdmin) { btnAdmin.className = 'hf-btn hf-btn-primary'; }
    if (clientForm) clientForm.style.display = 'none';
    if (adminForm) adminForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
    if (tabReg) tabReg.style.display = 'none';
    if (tabLogin) { tabLogin.classList.add('active'); tabLogin.textContent = 'Đăng nhập Quản trị'; }
    if (title) title.textContent = 'Cổng Đăng Nhập Quản Trị Viên';
    if (portalSwitcherBox) portalSwitcherBox.style.display = 'flex';
    if (portalLinkBox) portalLinkBox.style.display = 'block';
  } else {
    // KHÁCH HÀNG / NGƯỜI DÙNG: KHÔNG HIỂN THỊ NÚT CHUYỂN CỔNG ADMIN
    if (btnClient) { btnClient.className = 'hf-btn hf-btn-primary'; }
    if (btnAdmin) { btnAdmin.className = 'hf-btn hf-btn-secondary'; }
    if (clientForm) clientForm.style.display = 'block';
    if (adminForm) adminForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'none';
    if (tabReg) tabReg.style.display = 'block';
    if (tabLogin) { tabLogin.classList.add('active'); tabLogin.textContent = 'Đăng nhập Khách hàng'; }
    if (title) title.textContent = 'Cổng Đăng Nhập Khách Hàng & Người Dùng';
    if (portalSwitcherBox) portalSwitcherBox.style.display = 'none';
    if (portalLinkBox) portalLinkBox.style.display = 'none';
  }
}

function checkDedicatedPortalUrl() {
  const params = new URLSearchParams(window.location.search);
  const portalType = params.get('portal');
  const pathname = window.location.pathname.toLowerCase();
  const isAdminPath = portalType === 'admin' || pathname.endsWith('/admin') || pathname.endsWith('/admin.html') || pathname.includes('/admin/');

  const adminTag = document.getElementById('topbarPortalAdminTag');
  const clientTag = document.getElementById('topbarPortalClientTag');

  if (isAdminPath) {
    if (adminTag && hasPermission('canManageUsers')) adminTag.style.display = 'inline-flex';
    if (clientTag) clientTag.style.display = 'none';
    setLoginPortalMode('admin');
  } else {
    if (adminTag) adminTag.style.display = 'none';
    if (clientTag && hfState.currentUser) clientTag.style.display = 'inline-flex';
    setLoginPortalMode('client');
  }
}

function submitClientLogin() {
  const userInput = document.getElementById('loginUsernameInput')?.value.trim().toLowerCase();
  const passInput = document.getElementById('loginPasswordInput')?.value.trim();

  if (!userInput || !passInput) {
    alert('Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu.');
    return;
  }

  const user = (hfState.users || []).find(u => u.username.toLowerCase() === userInput && u.pass === passInput);

  if (user) {
    if (user.status === 'PENDING_APPROVAL') {
      alert('Tài khoản của bạn đang chờ Quản trị viên phê duyệt.');
      return;
    }

    hfState.isLoggedIn = true;
    hfState.currentUser = user;
    saveHfState(true);

    const gatewayOverlay = document.getElementById('pnTaskLoginGateway');
    if (gatewayOverlay) {
      gatewayOverlay.classList.remove('active');
      gatewayOverlay.style.display = 'none';
    }

    renderAllViews();
    showToast(`Đăng nhập thành công. Chào mừng ${user.name} (${user.role})`);
    return;
  }

  const pending = (hfState.pendingRegistrations || []).find(p => p.username.toLowerCase() === userInput && p.pass === passInput);
  if (pending) {
    alert('Tài khoản này đang chờ Quản trị viên phê duyệt.');
    return;
  }

  alert('Tên đăng nhập hoặc Mật khẩu không chính xác. Vui lòng thử lại.');
}

function submitAdminLogin() {
  const adminCode = document.getElementById('loginAdminCodeInput')?.value.trim().toLowerCase();
  loginPnTaskUser(adminCode);
}

function loginPnTaskUser(adminCode, optionalPassword) {
  const code = (adminCode || '').trim().toLowerCase();
  const pass = (optionalPassword || '').trim();

  if (!code) {
    alert('Vui lòng nhập Mã Quản trị viên.');
    return;
  }

  const user = hfState.users.find(u => 
    u.username.toLowerCase() === code || 
    u.pass === code || 
    (pass && u.username.toLowerCase() === code && u.pass === pass)
  );

  if (user) {
    if (user.status === 'PENDING_APPROVAL') {
      alert('Tài khoản của bạn đang chờ Admin PN phê duyệt.');
      return;
    }

    hfState.isLoggedIn = true;
    hfState.currentUser = user;
    saveHfState(true);

    const gatewayOverlay = document.getElementById('pnTaskLoginGateway');
    if (gatewayOverlay) {
      gatewayOverlay.classList.remove('active');
      gatewayOverlay.style.display = 'none';
    }

    renderAllViews();
    showToast(`Đăng nhập thành công. Chào mừng ${user.name} (${user.role})`);
    return;
  }

  const pending = (hfState.pendingRegistrations || []).find(p => p.username.toLowerCase() === code || p.pass === code);
  if (pending) {
    alert('Mã tài khoản này đang chờ Admin phê duyệt.');
    return;
  }

  alert('Mã Quản trị viên không chính xác. Vui lòng thử lại.');
}

function registerGuestAccount(fullName, username, password, email) {
  const name = (fullName || '').trim();
  const uInput = (username || '').trim().toLowerCase();
  const pInput = (password || '').trim();
  const mailInput = (email || '').trim();

  if (!name || !uInput || !pInput) {
    alert('Vui lòng điền đầy đủ Họ tên, Tên đăng nhập và Mật khẩu.');
    return;
  }

  const existsUser = hfState.users.find(u => u.username.toLowerCase() === uInput);
  const existsPending = (hfState.pendingRegistrations || []).find(p => p.username.toLowerCase() === uInput);

  if (existsUser || existsPending) {
    alert('Tên đăng nhập này đã tồn tại.');
    return;
  }

  const reqObj = {
    id: `req-${Date.now()}`,
    name: name,
    username: uInput,
    pass: pInput,
    email: mailInput || 'Không có',
    requestDate: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    status: 'PENDING_APPROVAL'
  };

  if (!hfState.pendingRegistrations) hfState.pendingRegistrations = [];
  hfState.pendingRegistrations.unshift(reqObj);
  addAuditLog(`Tài khoản mới [${name}] vừa gửi yêu cầu đăng ký`);
  saveHfState(true);

  alert('Đã gửi yêu cầu đăng ký thành công. Bạn có thể đăng nhập ngay sau khi tài khoản được phê duyệt.');
  switchLoginGatewayTab('login');
  renderAllViews();
}

function approveUserRegistration(reqId) {
  if (!hasPermission('canManageUsers')) {
    alert('Chỉ tài khoản Quản trị viên mới có quyền phê duyệt.');
    return;
  }

  const index = (hfState.pendingRegistrations || []).findIndex(r => r.id === reqId);
  if (index !== -1) {
    const req = hfState.pendingRegistrations[index];
    const newUser = {
      id: `u-${Date.now()}`,
      username: req.username,
      pass: req.pass,
      name: req.name,
      role: 'Thành viên Đội ngũ',
      avatar: req.name.charAt(0).toUpperCase(),
      status: 'APPROVED',
      permissions: { canDeleteTask: false, canCreateProject: false, canExportData: false, canAccessSettings: false, canManageUsers: false }
    };

    hfState.users.push(newUser);
    hfState.pendingRegistrations.splice(index, 1);
    addAuditLog(`Đã phê duyệt tài khoản mới cho: ${newUser.name}`);
    saveHfState(true);
    renderTeams();
    renderAllViews();
    showToast(`Đã phê duyệt tài khoản ${newUser.name}.`);
  }
}

function rejectUserRegistration(reqId) {
  if (!hasPermission('canManageUsers')) {
    alert('Chỉ tài khoản Quản trị viên mới có quyền từ chối.');
    return;
  }

  const index = (hfState.pendingRegistrations || []).findIndex(r => r.id === reqId);
  if (index !== -1) {
    const req = hfState.pendingRegistrations[index];
    hfState.pendingRegistrations.splice(index, 1);
    addAuditLog(`Đã từ chối yêu cầu đăng ký của: ${req.name}`);
    saveHfState(true);
    renderTeams();
    renderAllViews();
    showToast(`Đã từ chối yêu cầu của ${req.name}.`);
  }
}

function logoutPnTaskUser() {
  hfState.isLoggedIn = false;
  hfState.currentUser = null;
  saveHfState(false);
  const gatewayOverlay = document.getElementById('pnTaskLoginGateway');
  if (gatewayOverlay) {
    gatewayOverlay.classList.add('active');
    gatewayOverlay.style.display = 'flex';
  }
  showToast('Đã đăng xuất khỏi tài khoản.');
}

function switchLoginGatewayTab(tab) {
  const clientLoginForm = document.getElementById('clientLoginFormContainer');
  const adminLoginForm = document.getElementById('adminLoginFormContainer');
  const registerForm = document.getElementById('registerFormContainer');
  const tabLogin = document.getElementById('tabBtnLogin');
  const tabReg = document.getElementById('tabBtnRegister');

  if (tab === 'login') {
    if (currentLoginPortalMode === 'admin') {
      if (adminLoginForm) adminLoginForm.style.display = 'block';
      if (clientLoginForm) clientLoginForm.style.display = 'none';
    } else {
      if (clientLoginForm) clientLoginForm.style.display = 'block';
      if (adminLoginForm) adminLoginForm.style.display = 'none';
    }
    if (registerForm) registerForm.style.display = 'none';
    if (tabLogin) tabLogin.classList.add('active');
    if (tabReg) tabReg.classList.remove('active');
  } else {
    // TAB ĐĂNG KÝ
    if (clientLoginForm) clientLoginForm.style.display = 'none';
    if (adminLoginForm) adminLoginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'block';
    if (tabLogin) tabLogin.classList.remove('active');
    if (tabReg) tabReg.classList.add('active');
  }
}

/* REAL FILE UPLOADING ENGINE */
function triggerRealFileInput() {
  const realInput = document.getElementById('realFileInputElement');
  if (realInput) realInput.click();
}

function handleRealFileUpload(inputElem) {
  const files = inputElem.files;
  if (!files || files.length === 0) return;

  const currentUser = hfState.currentUser || { name: 'PN' };
  const catInput = document.getElementById('fileUploadCategoryInput');
  const category = catInput ? catInput.value : 'Dự án';

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const sizeStr = formatBytes(file.size);

      const newFileObj = {
        id: `f-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        name: file.name,
        size: sizeStr,
        category: category,
        date: new Date().toLocaleDateString('vi-VN'),
        owner: currentUser.name,
        dataUrl: dataUrl
      };

      if (!hfState.files) hfState.files = [];
      hfState.files.unshift(newFileObj);
      addAuditLog(`Đã tải lên tệp [${file.name}] (${sizeStr}) bởi ${currentUser.name}`);
      saveHfState(true);
      renderFiles();
      showToast(`Đã tải lên thành công tệp: ${file.name}`);
    };
    reader.readAsDataURL(file);
  });

  inputElem.value = '';
  closeUploadFileModal();
}

function triggerDrawerRealFileInput() {
  const realInput = document.getElementById('drawerRealFileInput');
  if (realInput) realInput.click();
}

function handleDrawerRealFileUpload(inputElem) {
  if (!activeDrawerTaskId) return;

  const files = inputElem.files;
  if (!files || files.length === 0) return;

  const task = hfState.tasks.find(t => t.id === activeDrawerTaskId);
  if (!task) return;

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const sizeStr = formatBytes(file.size);

      if (!task.attachments) task.attachments = [];
      task.attachments.push({
        id: `att-${Date.now()}`,
        name: file.name,
        size: sizeStr,
        dataUrl: dataUrl
      });

      saveHfState(true);
      openTaskDetailDrawer(activeDrawerTaskId);
      renderTasks();
      showToast(`Đã đính kèm tệp [${file.name}] vào công việc.`);
    };
    reader.readAsDataURL(file);
  });

  inputElem.value = '';
}

function triggerChatRealFileInput() {
  const realInput = document.getElementById('chatRealFileInput');
  if (realInput) realInput.click();
}

function handleChatRealFileUpload(inputElem) {
  const files = inputElem.files;
  if (!files || files.length === 0) return;

  const user = hfState.currentUser || { name: 'Thành viên', avatar: 'PN', role: 'Thành viên' };

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const sizeStr = formatBytes(file.size);

      const newMsg = {
        id: `msg-${Date.now()}`,
        sender: user.name,
        avatar: user.avatar || user.name.charAt(0).toUpperCase(),
        role: user.role || 'Thành viên Đội ngũ',
        text: `Đã đính kèm tệp tài liệu: ${file.name} (${sizeStr})`,
        file: { name: file.name, size: sizeStr, dataUrl: dataUrl },
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };

      if (!hfState.chatMessages) hfState.chatMessages = [];
      hfState.chatMessages.push(newMsg);
      saveHfState(true);
      renderChat();
      showToast(`Đã gửi tệp đính kèm [${file.name}] trong trò chuyện nhóm.`);
    };
    reader.readAsDataURL(file);
  });

  inputElem.value = '';
}

function triggerDocFileUpload(docId) {
  const elem = document.getElementById(`docFileInput_${docId}`);
  if (elem) elem.click();
}

function handleDocFileUpload(inputElem, docId) {
  const files = inputElem.files;
  if (!files || files.length === 0) return;

  const doc = (hfState.studyDocs || []).find(d => d.id === docId);
  if (!doc) return;

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const fileObj = {
        id: `sf-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        name: file.name,
        size: formatBytes(file.size),
        dataUrl: e.target.result
      };

      if (!doc.attachments) doc.attachments = [];
      doc.attachments.push(fileObj);
      doc.file = fileObj;

      saveHfState(true);
      renderStudy();
      showToast(`Đã tải lên tệp [${file.name}] cho tài liệu học tập.`);
    };
    reader.readAsDataURL(file);
  });

  inputElem.value = '';
}

/* ADMIN PERMISSION MATRIX & ACCOUNT MANAGEMENT */
function toggleUserPermission(userId, permKey) {
  if (!hasPermission('canManageUsers')) {
    alert('Chỉ tài khoản Quản trị viên mới có quyền thay đổi ma trận phân quyền.');
    return;
  }

  const targetUser = hfState.users.find(u => u.id === userId);
  if (targetUser && targetUser.permissions) {
    targetUser.permissions[permKey] = !targetUser.permissions[permKey];
    addAuditLog(`Đã thay đổi quyền [${permKey}] cho ${targetUser.name}`);
    saveHfState(true);
    renderTeams();
    renderAllViews();
    showToast(`Đã cập nhật phân quyền cho ${targetUser.name}.`);
  }
}

function changeUserRole(userId, newRole) {
  if (!hasPermission('canManageUsers')) {
    alert('Chỉ tài khoản Quản trị viên mới có quyền thay đổi vai trò.');
    return;
  }

  const targetUser = hfState.users.find(u => u.id === userId);
  if (targetUser) {
    targetUser.role = newRole;
    if (newRole.includes('Quản trị')) {
      targetUser.permissions = { canDeleteTask: true, canCreateProject: true, canExportData: true, canAccessSettings: true, canManageUsers: true };
    }
    addAuditLog(`Đã đổi vai trò của [${targetUser.name}] sang ${newRole}`);
    saveHfState(true);
    renderTeams();
    renderAllViews();
    showToast(`Đã đổi vai trò của ${targetUser.name} sang ${newRole}.`);
  }
}

function deleteUserAccount(userId) {
  if (!hasPermission('canManageUsers')) {
    alert('Chỉ tài khoản Quản trị viên mới có quyền xóa tài khoản.');
    return;
  }

  const targetUser = hfState.users.find(u => u.id === userId);
  if (!targetUser) return;

  if (targetUser.username === 'pn' || targetUser.id === 'u-pn') {
    alert('Không thể xóa tài khoản Quản trị viên gốc.');
    return;
  }

  if (confirm(`Bạn có chắc muốn xóa vĩnh viễn tài khoản [${targetUser.name}] (${targetUser.username}) khỏi hệ thống?`)) {
    hfState.users = hfState.users.filter(u => u.id !== userId);
    addAuditLog(`Đã xóa tài khoản của: ${targetUser.name} (${targetUser.username})`);
    saveHfState(true);
    renderTeams();
    renderAllViews();
    showToast(`Đã xóa tài khoản ${targetUser.name}.`);
  }
}

function createNewUserAccount() {
  if (!hasPermission('canManageUsers')) {
    alert('Chỉ tài khoản Quản trị viên mới có quyền tạo tài khoản mới.');
    return;
  }

  const name = prompt('Nhập Họ và Tên thành viên mới:');
  if (!name || !name.trim()) return;

  const username = prompt('Nhập Tên đăng nhập:', name.trim().toLowerCase().replace(/\s+/g, ''));
  const pass = prompt('Nhập Mật khẩu đăng nhập:', '123456');
  const role = prompt('Nhập Vai trò (Quản trị viên / Quản lý Dự án / Thành viên Đội ngũ / Khách hàng):', 'Thành viên Đội ngũ');

  const newUser = {
    id: `u-${Date.now()}`,
    username: username || `user_${Date.now()}`,
    pass: pass || '123456',
    name: name.trim(),
    role: role || 'Thành viên Đội ngũ',
    avatar: name.trim().charAt(0).toUpperCase(),
    status: 'APPROVED',
    permissions: { canDeleteTask: false, canCreateProject: false, canExportData: false, canAccessSettings: false, canManageUsers: false }
  };

  hfState.users.push(newUser);
  addAuditLog(`Đã khởi tạo tài khoản: ${newUser.name} (${newUser.role})`);
  saveHfState(true);
  renderTeams();
  showToast(`Đã khởi tạo tài khoản cho ${newUser.name}.`);
}

function openEditUserModal(userId) {
  const isPNAdmin = hasPermission('canManageUsers') || (hfState.currentUser && hfState.currentUser.username === 'pn');
  if (!isPNAdmin) {
    alert('Chỉ Quản trị viên mới có quyền chỉnh sửa thông tin tài khoản.');
    return;
  }

  const user = (hfState.users || []).find(u => u.id === userId);
  if (!user) {
    alert('Không tìm thấy dữ liệu tài khoản.');
    return;
  }

  const hiddenId = document.getElementById('editUserIdHidden');
  const nameInput = document.getElementById('editFullNameInput');
  const userInput = document.getElementById('editUsernameInput');
  const passInput = document.getElementById('editPasswordInput');
  const roleSelect = document.getElementById('editRoleSelect');

  if (hiddenId) hiddenId.value = user.id;
  if (nameInput) nameInput.value = user.name || '';
  if (userInput) userInput.value = user.username || '';
  if (passInput) passInput.value = user.pass || '';
  if (roleSelect) roleSelect.value = user.role || 'Thành viên Đội ngũ';

  const modal = document.getElementById('editUserModalOverlay');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function closeEditUserModal() {
  const modal = document.getElementById('editUserModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function submitSaveEditUser() {
  const hiddenId = document.getElementById('editUserIdHidden')?.value;
  const newName = document.getElementById('editFullNameInput')?.value.trim();
  const newUsername = document.getElementById('editUsernameInput')?.value.trim().toLowerCase();
  const newPassword = document.getElementById('editPasswordInput')?.value.trim();
  const newRole = document.getElementById('editRoleSelect')?.value;

  if (!hiddenId || !newName || !newUsername || !newPassword) {
    alert('Vui lòng điền đầy đủ Họ tên, Tên đăng nhập và Mật khẩu.');
    return;
  }

  const user = (hfState.users || []).find(u => u.id === hiddenId);
  if (!user) return;

  const dup = (hfState.users || []).find(u => u.id !== hiddenId && u.username.toLowerCase() === newUsername);
  if (dup) {
    alert('Tên đăng nhập này đã được sử dụng bởi tài khoản khác.');
    return;
  }

  const oldName = user.name;
  user.name = newName;
  user.username = newUsername;
  user.pass = newPassword;
  user.role = newRole;
  user.avatar = newName.charAt(0).toUpperCase();

  if (hfState.currentUser && hfState.currentUser.id === hiddenId) {
    hfState.currentUser = user;
  }

  addAuditLog(`Đã chỉnh sửa thông tin tài khoản [${oldName}] -> [${newName}] (${newUsername})`);
  saveHfState(true);
  closeEditUserModal();
  renderTeams();
  renderAllViews();
  showToast(`Đã lưu thay đổi thông tin tài khoản: ${newName}`);
}

function addAuditLog(actionText) {
  if (!hfState.auditLogs) hfState.auditLogs = [];
  hfState.auditLogs.unshift({
    id: Date.now(),
    user: hfState.currentUser ? hfState.currentUser.name : 'Hệ thống',
    action: actionText,
    time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  });
}

/* REALTIME TEAM CHAT SYSTEM */
function sendChatMessage() {
  const input = document.getElementById('chatMessageInput');
  if (!input || !input.value.trim()) return;

  const user = hfState.currentUser || { name: 'Thành viên Đội ngũ', avatar: 'PN', role: 'Thành viên' };
  const newMsg = {
    id: `msg-${Date.now()}`,
    sender: user.name,
    avatar: user.avatar || user.name.charAt(0).toUpperCase(),
    role: user.role || 'Thành viên Đội ngũ',
    text: input.value.trim(),
    file: null,
    time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  };

  if (!hfState.chatMessages) hfState.chatMessages = [];
  hfState.chatMessages.push(newMsg);
  saveHfState(true);
  input.value = '';
  renderChat();
  showToast('Đã gửi tin nhắn chat nhóm.');
}

function renderChat() {
  const container = document.getElementById('chatMessagesContainer');
  if (!container) return;

  container.innerHTML = '';
  const currentName = hfState.currentUser ? hfState.currentUser.name : '';

  (hfState.chatMessages || []).forEach(m => {
    const isMe = m.sender === currentName;
    const msgDiv = document.createElement('div');
    msgDiv.style.display = 'flex';
    msgDiv.style.justifyContent = isMe ? 'flex-end' : 'flex-start';
    msgDiv.style.marginBottom = '12px';

    let fileCardHTML = '';
    if (m.file) {
      fileCardHTML = `
        <div style="margin-top: 6px; background: rgba(0,0,0,0.15); padding: 8px 12px; border-radius: 6px; font-size: 0.8rem; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
          <span>Tệp: <strong>${escapeHtml(m.file.name)}</strong> (${escapeHtml(m.file.size)})</span>
          <button class="hf-btn hf-btn-primary" style="padding:2px 8px; font-size:0.7rem;" onclick="downloadRealFile('${m.file.dataUrl}', '${escapeHtml(m.file.name)}')">Tải về</button>
        </div>
      `;
    }

    msgDiv.innerHTML = `
      <div style="max-width: 70%; display: flex; gap: 10px; flex-direction: ${isMe ? 'row-reverse' : 'row'};">
        <div class="avatar-badge" style="width:32px; height:32px; font-size:0.8rem; flex-shrink:0;">${m.avatar || m.sender.charAt(0)}</div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted); text-align: ${isMe ? 'right' : 'left'}; margin-bottom:2px;">
            <strong style="color:${isMe ? 'var(--primary)' : 'var(--text-primary)'};">${escapeHtml(m.sender)}</strong> (${escapeHtml(m.role || 'Thành viên')}) · ${m.time}
          </div>
          <div style="background: ${isMe ? 'var(--primary)' : 'var(--surface-muted)'}; color: ${isMe ? '#1C1917' : 'var(--text-primary)'}; padding: 10px 14px; border-radius: 8px; font-size: 0.9rem; line-height: 1.4; word-break: break-word;">
            ${escapeHtml(m.text)}
            ${fileCardHTML}
          </div>
        </div>
      </div>
    `;
    container.appendChild(msgDiv);
  });

  container.scrollTop = container.scrollHeight;
}

/* DOCUMENT FILES MANAGEMENT SYSTEM */
function renderFiles() {
  const container = document.getElementById('filesGridContainer');
  if (!container) return;

  container.innerHTML = '';
  (hfState.files || []).forEach(f => {
    const card = document.createElement('div');
    card.className = 'hf-card';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'space-between';

    card.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-weight:700; color:var(--primary);">Tài liệu tệp</span>
          <span class="hf-badge badge-done">${escapeHtml(f.category || 'Chung')}</span>
        </div>
        <h4 style="font-weight:700; margin-bottom:4px; font-size:0.9rem; word-break:break-all;">${escapeHtml(f.name)}</h4>
        <p style="font-size:0.775rem; color:var(--text-secondary);">Kích thước: ${escapeHtml(f.size)} · Người đăng: ${escapeHtml(f.owner || 'PN')}</p>
        <p style="font-size:0.725rem; color:var(--text-muted); margin-top:2px;">Ngày tải lên: ${escapeHtml(f.date)}</p>
      </div>
      <div style="margin-top:14px; display:flex; gap:8px;">
        <button class="hf-btn hf-btn-primary" style="flex:1; padding:6px; font-size:0.775rem;" onclick="downloadRealFile('${f.dataUrl}', '${escapeHtml(f.name)}')">Tải về máy</button>
        <button class="hf-btn hf-btn-secondary" style="padding:6px 10px; font-size:0.775rem; color:var(--danger);" onclick="deleteDocumentFile('${f.id}')">Xóa</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function openUploadFileModal() {
  const modal = document.getElementById('uploadFileModalOverlay');
  if (modal) modal.classList.add('active');
}

function closeUploadFileModal() {
  const modal = document.getElementById('uploadFileModalOverlay');
  if (modal) modal.classList.remove('active');
}

function deleteDocumentFile(fileId) {
  if (confirm('Bạn có chắc muốn xóa tệp tài liệu này?')) {
    hfState.files = (hfState.files || []).filter(f => f.id !== fileId);
    saveHfState(true);
    renderFiles();
    showToast('Đã xóa tệp tài liệu.');
  }
}

/* REVAMPED SELF-LEARNING DOCUMENTS OS */
function renderStudy() {
  const container = document.getElementById('studyAssignmentsList');
  if (!container) return;

  const docs = hfState.studyDocs || [];

  let html = `
    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap:16px; margin-bottom:24px;">
      <div class="hf-card" style="border-left:4px solid var(--primary);">
        <div style="font-size:0.8rem; color:var(--text-secondary);">Tổng số Tài liệu Học tập</div>
        <div style="font-size:1.8rem; font-weight:700; color:var(--primary); margin-top:4px;">${docs.length} Tài liệu</div>
      </div>
      <div class="hf-card" style="border-left:4px solid var(--success);">
        <div style="font-size:0.8rem; color:var(--text-secondary);">Đã đọc & Hoàn thành</div>
        <div style="font-size:1.8rem; font-weight:700; color:var(--success); margin-top:4px;">${docs.filter(d => d.status === 'COMPLETED').length} Bài</div>
      </div>
      <div class="hf-card" style="border-left:4px solid var(--warning);">
        <div style="font-size:0.8rem; color:var(--text-secondary);">Đang nghiên cứu</div>
        <div style="font-size:1.8rem; font-weight:700; color:var(--warning); margin-top:4px;">${docs.filter(d => d.status === 'IN_PROGRESS').length} Bài</div>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
      <h3>Danh sách Tài liệu Học tập Tự tạo (${docs.length})</h3>
      <button class="hf-btn hf-btn-primary" onclick="openAddLearningDocModal()">+ Thêm Tài liệu mới</button>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:18px;">
  `;

  if (docs.length === 0) {
    html += `<div class="hf-card" style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:30px;">
      Chưa có tài liệu học tập nào. Bấm <strong>"+ Thêm Tài liệu mới"</strong> để bắt đầu tạo tài liệu.
    </div>`;
  } else {
    docs.forEach(doc => {
      let statusBadge = '';
      if (doc.status === 'COMPLETED') statusBadge = '<span class="hf-badge badge-done">Đã hoàn thành</span>';
      else if (doc.status === 'IN_PROGRESS') statusBadge = '<span class="hf-badge badge-in-progress">Đang học</span>';
      else statusBadge = '<span class="hf-badge badge-in-review">Cần xem lại</span>';

      let filesHTML = '';
      const attachments = doc.attachments || (doc.file ? [doc.file] : []);
      if (attachments.length > 0) {
        filesHTML += `<div style="margin-bottom:12px; display:flex; flex-direction:column; gap:6px;">`;
        attachments.forEach(att => {
          filesHTML += `
            <div style="background:rgba(0,0,0,0.15); padding:6px 10px; border-radius:6px; font-size:0.775rem; display:flex; justify-content:space-between; align-items:center; border-left:3px solid var(--primary);">
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">Tệp: <strong>${escapeHtml(att.name)}</strong> (${escapeHtml(att.size || '1 MB')})</span>
              <button class="hf-btn hf-btn-primary" style="padding:2px 8px; font-size:0.7rem;" onclick="downloadRealFile('${att.dataUrl}', '${escapeHtml(att.name)}')">Tải về</button>
            </div>
          `;
        });
        filesHTML += `</div>`;
      }

      html += `
        <div class="hf-card" style="display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="hf-badge" style="background:var(--primary-light); color:var(--primary); font-weight:700;">${escapeHtml(doc.category || 'Tài liệu')}</span>
              ${statusBadge}
            </div>

            <h4 style="font-weight:700; font-size:1.05rem; margin-bottom:6px; line-height:1.4;">${escapeHtml(doc.title)}</h4>
            
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">
              ${escapeHtml(doc.note || 'Chưa có ghi chú nội dung.')}
            </p>

            <div style="font-size:0.775rem; color:var(--text-muted); margin-bottom:12px;">
              Chủ đề: <strong>${escapeHtml(doc.topic || 'Chung')}</strong> · Người tạo: ${escapeHtml(doc.author || 'Tự tạo')}
            </div>

            ${filesHTML}

            ${doc.link ? `
              <div style="margin-bottom:12px;">
                <a href="${escapeHtml(doc.link)}" target="_blank" style="color:var(--primary); font-size:0.8rem; text-decoration:none; word-break:break-all; font-weight:600;">
                  Link liên kết: ${escapeHtml(doc.link)}
                </a>
              </div>
            ` : ''}

            <div style="margin-bottom:14px;">
              <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:600; margin-bottom:4px;">
                <span>Tiến độ hoàn thành:</span>
                <span style="color:var(--primary);">${doc.progress}%</span>
              </div>
              <div style="width:100%; background:var(--surface-muted); height:6px; border-radius:3px; overflow:hidden;">
                <div style="width:${doc.progress}%; background:var(--primary); height:100%;"></div>
              </div>
            </div>
          </div>

          <div style="display:flex; gap:6px; border-top:1px solid var(--border); padding-top:12px; align-items:center;">
            <select class="form-select" style="padding:4px 8px; font-size:0.75rem; flex:1;" onchange="updateStudyDocStatus('${doc.id}', this.value)">
              <option value="IN_PROGRESS" ${doc.status === 'IN_PROGRESS' ? 'selected' : ''}>Đang học</option>
              <option value="COMPLETED" ${doc.status === 'COMPLETED' ? 'selected' : ''}>Đã hoàn thành</option>
              <option value="REVIEW" ${doc.status === 'REVIEW' ? 'selected' : ''}>Cần xem lại</option>
            </select>

            <input type="file" id="docFileInput_${doc.id}" style="display:none;" onchange="handleDocFileUpload(this, '${doc.id}')">
            <button class="hf-btn hf-btn-secondary" style="padding:6px 8px; font-size:0.75rem;" onclick="triggerDocFileUpload('${doc.id}')">Đính tệp</button>

            <button class="hf-btn hf-btn-secondary" style="padding:6px 8px; font-size:0.75rem; color:var(--danger);" onclick="deleteStudyDoc('${doc.id}')">Xóa</button>
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  container.innerHTML = html;
}

function openAddLearningDocModal() {
  const modal = document.getElementById('addStudyDocModalOverlay');
  if (modal) {
    modal.classList.add('active');
  } else {
    const title = prompt('Nhập Tiêu đề Tài liệu Học tập:');
    if (!title || !title.trim()) return;
    submitLearningDocManual(title.trim(), 'Khóa học & Bài giảng', 'Công nghệ Thông tin', '', 'Ghi chú tự lưu trữ.');
  }
}

function closeAddLearningDocModal() {
  const modal = document.getElementById('addStudyDocModalOverlay');
  if (modal) modal.classList.remove('active');
}

function submitAddLearningDoc() {
  const titleInput = document.getElementById('studyDocTitleInput');
  const catSelect = document.getElementById('studyDocCategoryInput');
  const topicInput = document.getElementById('studyDocTopicInput');
  const linkInput = document.getElementById('studyDocLinkInput');
  const noteArea = document.getElementById('studyDocNoteInput');
  const fileInput = document.getElementById('studyDocFileInput');

  if (!titleInput || !titleInput.value.trim()) {
    alert('Vui lòng nhập Tiêu đề tài liệu.');
    return;
  }

  const title = titleInput.value.trim();
  const category = catSelect ? catSelect.value : 'Khóa học & Bài giảng';
  const topic = topicInput ? topicInput.value.trim() : 'Chung';
  const link = linkInput ? linkInput.value.trim() : '';
  const note = noteArea ? noteArea.value.trim() : 'Tự lưu trữ cá nhân.';

  const saveDocObj = (fileObj) => {
    if (!hfState.studyDocs) hfState.studyDocs = [];
    const newDoc = {
      id: `doc-${Date.now()}`,
      title: title,
      category: category,
      topic: topic,
      status: 'IN_PROGRESS',
      progress: 50,
      author: hfState.currentUser ? hfState.currentUser.name : 'Tự tạo thủ công',
      link: link,
      note: note,
      date: new Date().toLocaleDateString('vi-VN'),
      file: fileObj || null,
      attachments: fileObj ? [fileObj] : []
    };

    hfState.studyDocs.unshift(newDoc);
    saveHfState(true);

    titleInput.value = '';
    if (linkInput) linkInput.value = '';
    if (noteArea) noteArea.value = '';
    if (fileInput) fileInput.value = '';

    closeAddLearningDocModal();
    renderStudy();
    showToast(`Đã lưu tài liệu học tập [${title}] thành công.`);
  };

  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const fileObj = {
        id: `sf-${Date.now()}`,
        name: file.name,
        size: formatBytes(file.size),
        dataUrl: e.target.result
      };
      saveDocObj(fileObj);
    };
    reader.readAsDataURL(file);
  } else {
    saveDocObj(null);
  }
}

function submitLearningDocManual(title, category, topic, link, note) {
  if (!hfState.studyDocs) hfState.studyDocs = [];
  hfState.studyDocs.unshift({
    id: `doc-${Date.now()}`,
    title: title,
    category: category || 'Khóa học & Bài giảng',
    topic: topic || 'Chung',
    status: 'IN_PROGRESS',
    progress: 50,
    author: hfState.currentUser ? hfState.currentUser.name : 'Tự tạo thủ công',
    link: link || '',
    note: note || 'Tài liệu tự lưu trữ cá nhân.',
    date: new Date().toLocaleDateString('vi-VN'),
    file: null,
    attachments: []
  });

  saveHfState(true);
  renderStudy();
  showToast(`Đã thêm tài liệu học tập [${title}].`);
}

function updateStudyDocStatus(docId, newStatus) {
  const doc = (hfState.studyDocs || []).find(d => d.id === docId);
  if (doc) {
    doc.status = newStatus;
    if (newStatus === 'COMPLETED') doc.progress = 100;
    else if (newStatus === 'IN_PROGRESS') doc.progress = 50;
    saveHfState(true);
    renderStudy();
    showToast('Đã cập nhật trạng thái tài liệu.');
  }
}

function deleteStudyDoc(docId) {
  if (confirm('Bạn có chắc muốn xóa tài liệu học tập này?')) {
    hfState.studyDocs = (hfState.studyDocs || []).filter(d => d.id !== docId);
    saveHfState(true);
    renderStudy();
    showToast('Đã xóa tài liệu.');
  }
}

/* NOTES MODULE */
function renderNotes() {
  const listContainer = document.getElementById('notesListSidebar');
  const titleInput = document.getElementById('noteEditorTitle');
  const contentArea = document.getElementById('noteEditorContent');

  if (listContainer) {
    listContainer.innerHTML = '';
    (hfState.notes || []).forEach(n => {
      const active = n.id === hfState.activeNoteId;
      const item = document.createElement('div');
      item.setAttribute('data-note-id', n.id);
      item.style.padding = '10px';
      item.style.borderRadius = '6px';
      item.style.marginBottom = '6px';
      item.style.cursor = 'pointer';
      item.style.background = active ? 'var(--primary)' : 'var(--surface-muted)';
      item.style.color = active ? '#1C1917' : 'var(--text-primary)';
      item.onclick = () => selectNote(n.id);

      item.innerHTML = `
        <div class="note-sidebar-title" style="font-weight:700; font-size:0.875rem;">${escapeHtml(n.title)}</div>
        <div style="font-size:0.75rem; opacity:0.8; margin-top:2px;">${escapeHtml(n.date || '')}</div>
      `;
      listContainer.appendChild(item);
    });
  }

  const activeNote = (hfState.notes || []).find(n => n.id === hfState.activeNoteId);
  if (activeNote) {
    if (titleInput) titleInput.value = activeNote.title;
    if (contentArea) contentArea.value = activeNote.content;
  }
}

function selectNote(noteId) {
  hfState.activeNoteId = noteId;
  renderNotes();
}

function createNewNote() {
  const newNote = {
    id: `n-${Date.now()}`,
    title: 'Ghi chú mới',
    content: 'Nhập nội dung ghi chú ở đây...',
    date: new Date().toLocaleDateString('vi-VN')
  };

  if (!hfState.notes) hfState.notes = [];
  hfState.notes.unshift(newNote);
  hfState.activeNoteId = newNote.id;
  saveHfState(true);
  renderNotes();
  showToast('Đã tạo ghi chú mới.');
}

function saveActiveNoteOnInput() {
  const activeNote = (hfState.notes || []).find(n => n.id === hfState.activeNoteId);
  const titleInput = document.getElementById('noteEditorTitle');
  const contentArea = document.getElementById('noteEditorContent');

  if (activeNote) {
    if (titleInput) activeNote.title = titleInput.value.trim() || 'Ghi chú mới';
    if (contentArea) activeNote.content = contentArea.value;
    activeNote.date = new Date().toLocaleDateString('vi-VN');
    saveHfState(true);

    const activeSidebarItem = document.querySelector(`#notesListSidebar [data-note-id="${activeNote.id}"] .note-sidebar-title`);
    if (activeSidebarItem) activeSidebarItem.textContent = activeNote.title;
  }
}

function saveActiveNote() {
  saveActiveNoteOnInput();
  showToast('Đã lưu ghi chú thành công.');
}

function deleteActiveNote() {
  if (!hfState.activeNoteId) return;
  if (confirm('Bạn có chắc muốn xóa ghi chú này?')) {
    hfState.notes = hfState.notes.filter(n => n.id !== hfState.activeNoteId);
    hfState.activeNoteId = hfState.notes.length > 0 ? hfState.notes[0].id : null;
    saveHfState(true);
    renderNotes();
    showToast('Đã xóa ghi chú.');
  }
}

/* INTERACTIVE CALENDAR MODULE */
function renderCalendar() {
  const container = document.getElementById('calendarGridContainer');
  if (!container) return;

  const visibleTasks = getVisibleTasks();
  let daysHTML = '';

  for (let d = 1; d <= 31; d++) {
    const dayStr = d < 10 ? `0${d}` : `${d}`;
    const datePattern = `${dayStr}/08/2026`;
    const dayTasks = visibleTasks.filter(t => t.due && (t.due.includes(datePattern) || (d === 14 && t.due.includes('14/08'))));

    daysHTML += `
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:6px; padding:8px; min-height:85px; display:flex; flex-direction:column; justify-content:space-between;">
        <div style="font-weight:700; font-size:0.8rem; color:${d === 14 ? 'var(--primary)' : 'var(--text-secondary)'};">${d} Thg 8 ${d === 14 ? '(Hôm nay)' : ''}</div>
        <div style="display:flex; flex-direction:column; gap:4px; margin-top:4px;">
    `;

    dayTasks.forEach(t => {
      daysHTML += `
        <div onclick="openTaskDetailDrawer('${t.id}')" style="background:var(--surface-muted); padding:3px 6px; border-radius:4px; font-size:0.68rem; font-weight:600; cursor:pointer; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; border-left:3px solid var(--primary);">
          ${escapeHtml(t.title)}
        </div>
      `;
    });

    daysHTML += `</div></div>`;
  }

  container.innerHTML = daysHTML;
}

/* FOCUS TIMER MODULE */
function togglePomodoroTimer() {
  if (hfState.focusSessions && hfState.focusSessions.active) {
    pausePomodoroTimer();
  } else {
    startPomodoroTimer();
  }
}

function startPomodoroTimer() {
  if (!hfState.focusSessions) hfState.focusSessions = defaultPnTaskState.focusSessions;
  hfState.focusSessions.active = true;
  saveHfState(false);
  updatePomodoroUI();

  if (pomodoroTimerInterval) clearInterval(pomodoroTimerInterval);
  pomodoroTimerInterval = setInterval(() => {
    if (hfState.focusSessions.secondsRemaining > 0) {
      hfState.focusSessions.secondsRemaining--;
      updatePomodoroUI();
    } else {
      pausePomodoroTimer();
      hfState.focusSessions.completedToday++;
      hfState.focusSessions.totalMinutesToday += hfState.focusSessions.plannedMinutes;
      hfState.focusSessions.secondsRemaining = hfState.focusSessions.plannedMinutes * 60;
      saveHfState(true);
      updatePomodoroUI();
      alert('Chúc mừng bạn đã hoàn thành 1 phiên tập trung xuất sắc.');
    }
  }, 1000);

  showToast('Bắt đầu thời gian tập trung.');
}

function pausePomodoroTimer() {
  if (!hfState.focusSessions) hfState.focusSessions = defaultPnTaskState.focusSessions;
  hfState.focusSessions.active = false;
  if (pomodoroTimerInterval) clearInterval(pomodoroTimerInterval);
  saveHfState(true);
  updatePomodoroUI();
  showToast('Đã tạm dừng thời gian tập trung.');
}

function resetPomodoroTimer() {
  pausePomodoroTimer();
  if (!hfState.focusSessions) hfState.focusSessions = defaultPnTaskState.focusSessions;
  hfState.focusSessions.secondsRemaining = hfState.focusSessions.plannedMinutes * 60;
  saveHfState(true);
  updatePomodoroUI();
  showToast('Đã đặt lại thời gian tập trung về 25 phút.');
}

function updatePomodoroUI() {
  const displayElem = document.getElementById('pomodoroTimerDisplay');
  const btnElem = document.getElementById('pomodoroToggleBtn');

  const sec = hfState.focusSessions ? hfState.focusSessions.secondsRemaining : 1500;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  const timeStr = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

  if (displayElem) displayElem.textContent = timeStr;
  if (btnElem) btnElem.textContent = hfState.focusSessions && hfState.focusSessions.active ? 'Tạm dừng' : 'Bắt đầu Tập trung';
}

function renderHabits() {
  const container = document.getElementById('habitsListContainer');
  if (!container) return;

  container.innerHTML = '';
  const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];

  (hfState.habits || []).forEach(h => {
    const card = document.createElement('div');
    card.className = 'hf-card';
    card.style.marginBottom = '12px';

    let daysHTML = '';
    h.weekCheck.forEach((chk, idx) => {
      daysHTML += `
        <div style="text-align:center; cursor:pointer;" onclick="toggleHabitCheck('${h.id}', ${idx})">
          <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:2px;">${days[idx]}</div>
          <div style="width:28px; height:28px; border-radius:4px; background:${chk ? 'var(--success)' : 'var(--surface-muted)'}; color:#FFF; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700;">
            ${chk ? 'X' : ''}
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h4 style="font-weight:700;">${escapeHtml(h.name)}</h4>
          <span style="font-size:0.75rem; color:var(--text-secondary);">Chuỗi làm liên tục: ${h.streak} ngày</span>
        </div>
        <div style="display:flex; gap:8px;">${daysHTML}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleHabitCheck(habitId, dayIndex) {
  const habit = hfState.habits.find(h => h.id === habitId);
  if (habit) {
    habit.weekCheck[dayIndex] = !habit.weekCheck[dayIndex];
    habit.streak = habit.weekCheck.filter(Boolean).length * 2;
    saveHfState(true);
    renderHabits();
  }
}

/* PERSONAL & ADMIN GROUP ASSIGNMENTS (PROJECTS VIEW) */
function renderProjects() {
  const container = document.getElementById('projectsGridContainer');
  if (!container) return;

  const currentUser = hfState.currentUser || { name: 'Thành viên', username: 'guest' };
  const isPNAdmin = checkIsAdmin(currentUser);

  let html = '';

  // ADMIN EXECUTIVE VIEW: Sub-account task assignment & sub-account created tasks
  if (isPNAdmin) {
    const adminAssignedTasks = (hfState.tasks || []).filter(t => {
      const isCreatorAdmin = (t.creator === 'PN' || t.creator === 'pn' || (t.creator || '').includes('Quản trị'));
      const isAssigneeSub = t.assignee && t.assignee !== 'PN' && t.assignee !== 'pn' && !(t.assignee || '').includes('Quản trị');
      return isCreatorAdmin && isAssigneeSub;
    });

    const subCreatedTasks = (hfState.tasks || []).filter(t => {
      const isCreatorSub = t.creator && t.creator !== 'PN' && t.creator !== 'pn' && !(t.creator || '').includes('Quản trị');
      return isCreatorSub;
    });

    const subAccounts = (hfState.users || []).filter(u => u.username !== 'pn' && u.id !== 'u-pn');

    // SECTION A: DASHBOARD CARDS FOR SUB-ACCOUNT TASK BREAKDOWN
    html += `
      <div style="margin-bottom:28px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div>
            <h3 style="color:var(--primary); font-weight:700;">📊 Phân công Công việc Theo từng Tài khoản Con</h3>
            <p style="color:var(--text-secondary); font-size:0.85rem;">Tổng quan khối lượng công việc được giao và tự khởi tạo của các thành viên.</p>
          </div>
          <button class="hf-btn hf-btn-primary" onclick="openQuickCreateModal()">+ Giao Công việc Mới</button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap:14px;">
    `;

    subAccounts.forEach(u => {
      const uTasks = (hfState.tasks || []).filter(t => t.assignee === u.name || t.assignee === u.username);
      const uCreatedTasks = (hfState.tasks || []).filter(t => t.creator === u.name || t.creator === u.username);
      const done = uTasks.filter(t => t.status === 'DONE').length;
      const total = uTasks.length;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;

      html += `
        <div class="hf-card" style="border-top:3px solid var(--primary); padding:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="font-size:0.95rem;">${escapeHtml(u.name)}</strong>
            <span class="hf-badge badge-progress" style="font-size:0.75rem;">${u.role}</span>
          </div>
          <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:8px;">
            Admin giao: <strong>${uTasks.length} task</strong> | Tự tạo: <strong>${uCreatedTasks.length} task</strong>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">
            <span>Tiến độ hoàn thành</span>
            <strong>${done}/${total} (${pct}%)</strong>
          </div>
          <div style="width:100%; background:var(--surface-muted); height:6px; border-radius:3px; overflow:hidden;">
            <div style="width:${pct}%; background:var(--success); height:100%;"></div>
          </div>
          <button onclick="openSubAccountDetailsModal('${u.id}')" class="hf-btn hf-btn-secondary" style="width:100%; margin-top:10px; padding:4px 8px; font-size:0.75rem;">👁️ Xem Chi tiết Task</button>
        </div>
      `;
    });

    html += `</div></div>`;

    // SECTION B: TASK ADMIN GIAO CHO TÀI KHOẢN CON
    html += `
      <div style="margin-bottom:28px;">
        <h3 style="margin-bottom:12px; color:#2980b9;">
          📌 Tất cả Công việc Admin đã Giao cho các Tài khoản Con (${adminAssignedTasks.length})
        </h3>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
    `;

    if (adminAssignedTasks.length === 0) {
      html += `<div class="hf-card" style="grid-column: 1 / -1; text-align:center; color:var(--text-muted); padding:20px;">
        Admin chưa giao công việc nào cho tài khoản con.
      </div>`;
    } else {
      adminAssignedTasks.forEach(t => {
        html += `
          <div class="hf-card" onclick="openTaskDetailDrawer('${t.id}')" style="cursor:pointer; border-left: 4px solid #3498db;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-size:0.75rem; font-weight:700; color:#2980b9;">📌 Admin Giao</span>
              <span class="hf-badge badge-${t.status.toLowerCase().replace('_', '-')}">${formatStatusVN(t.status)}</span>
            </div>
            <h4 style="font-weight:700; margin-bottom:6px;">${escapeHtml(t.title)}</h4>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">Giao cho: <strong style="color:var(--primary);">${escapeHtml(t.assignee)}</strong></p>
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); border-top:1px solid var(--border); padding-top:8px;">
              <span>Dự án: ${escapeHtml(t.project || 'PN Task')}</span>
              <span>Hạn: ${escapeHtml(t.due)}</span>
            </div>
          </div>
        `;
      });
    }

    html += `</div></div>`;

    // SECTION C: TASK DO TÀI KHOẢN CON TỰ TẠO
    html += `
      <div style="margin-bottom:28px;">
        <h3 style="margin-bottom:12px; color:#8e44ad;">
          📝 Tất cả Công việc do các Tài khoản Con Tự Tạo (${subCreatedTasks.length})
        </h3>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
    `;

    if (subCreatedTasks.length === 0) {
      html += `<div class="hf-card" style="grid-column: 1 / -1; text-align:center; color:var(--text-muted); padding:20px;">
        Chưa có tài khoản con nào tự khởi tạo công việc.
      </div>`;
    } else {
      subCreatedTasks.forEach(t => {
        html += `
          <div class="hf-card" onclick="openTaskDetailDrawer('${t.id}')" style="cursor:pointer; border-left: 4px solid #9b59b6;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-size:0.75rem; font-weight:700; color:#8e44ad;">📝 Con Tự Tạo</span>
              <span class="hf-badge badge-${t.status.toLowerCase().replace('_', '-')}">${formatStatusVN(t.status)}</span>
            </div>
            <h4 style="font-weight:700; margin-bottom:6px;">${escapeHtml(t.title)}</h4>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">Người tạo: <strong style="color:#8e44ad;">${escapeHtml(t.creator)}</strong> -> Thực hiện: <strong>${escapeHtml(t.assignee)}</strong></p>
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); border-top:1px solid var(--border); padding-top:8px;">
              <span>Dự án: ${escapeHtml(t.project || 'Cá nhân')}</span>
              <span>Hạn: ${escapeHtml(t.due)}</span>
            </div>
          </div>
        `;
      });
    }

    html += `</div></div>`;
  }

  // SECTION 1: NỘI DUNG CẦN LÀM CÁ NHÂN
  html += `
    <div style="margin-bottom:24px;">
      <h3 style="margin-bottom:12px; color:var(--primary);">
        Nội dung Cần làm Cá nhân (${escapeHtml(currentUser.name)})
      </h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
  `;

  const personalTasks = (hfState.tasks || []).filter(t => t.assignee === currentUser.name || t.assignee === currentUser.username);

  if (personalTasks.length === 0) {
    html += `<div class="hf-card" style="grid-column: 1 / -1; text-align:center; color:var(--text-muted); padding:20px;">
      Chưa có công việc cá nhân nào được giao riêng cho ${escapeHtml(currentUser.name)}.
    </div>`;
  } else {
    personalTasks.forEach(t => {
      html += `
        <div class="hf-card" onclick="openTaskDetailDrawer('${t.id}')" style="cursor:pointer; border-left: 4px solid var(--primary);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--primary);">${escapeHtml(t.project || 'PN Task')}</span>
            <span class="hf-badge badge-${t.status.toLowerCase().replace('_', '-')}">${formatStatusVN(t.status)}</span>
          </div>
          <h4 style="font-weight:700; margin-bottom:6px;">${escapeHtml(t.title)}</h4>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">${escapeHtml(t.desc || 'Không có mô tả')}</p>
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); border-top:1px solid var(--border); padding-top:8px;">
            <span>Người giao: <strong>${escapeHtml(t.creator || 'Admin PN')}</strong></span>
            <span>Hạn nộp: ${escapeHtml(t.due)}</span>
          </div>
        </div>
      `;
    });
  }

  html += `</div></div>`;

  // SECTION 2: CÔNG VIỆC PHÂN CÔNG NHÓM (CHUNG CHO CẢ NHÓM)
  html += `
    <div>
      <h3 style="margin-bottom:12px; color:var(--success);">
        Công việc Phân công Cả nhóm (Giao chung)
      </h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
  `;

  const groupTasks = (hfState.tasks || []).filter(t => {
    const a = (t.assignee || '').trim().toLowerCase();
    return a === 'tất cả' || a === 'cả nhóm' || a === 'all' || a === 'nhóm' || a === 'group';
  });

  if (groupTasks.length === 0) {
    html += `<div class="hf-card" style="grid-column: 1 / -1; text-align:center; color:var(--text-muted); padding:20px;">
      Hiện chưa có công việc chung nào được giao cho cả nhóm.
    </div>`;
  } else {
    groupTasks.forEach(t => {
      html += `
        <div class="hf-card" onclick="openTaskDetailDrawer('${t.id}')" style="cursor:pointer;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--success);">${escapeHtml(t.project || 'Nhóm Task')}</span>
            <span class="hf-badge badge-${t.priority.toLowerCase()}">${formatPriorityVN(t.priority)}</span>
          </div>
          <h4 style="font-weight:700; margin-bottom:6px;">${escapeHtml(t.title)}</h4>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">Giao cho: <strong style="color:var(--primary);">Cả nhóm (Tất cả)</strong></p>
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); border-top:1px solid var(--border); padding-top:8px;">
            <span>Trạng thái: <strong>${formatStatusVN(t.status)}</strong></span>
            <span>Hạn nộp: ${escapeHtml(t.due)}</span>
          </div>
        </div>
      `;
    });
  }

  html += `</div></div>`;
  container.innerHTML = html;
}

/* AUTO-SYNC & VIEWS RENDERERS */
function initAutoSyncEngine() {
  const code = hfState.activeWorkspaceCode || 'PNTASK-2026';
  if (syncChannel) syncChannel.close();
  try {
    syncChannel = new BroadcastChannel(`pntask_sync_${code}`);
    syncChannel.onmessage = (e) => {
      if (e.data && e.data.type === 'SYNC_STATE') {
        hfState = e.data.state;
        localStorage.setItem(getStorageKey(code), JSON.stringify(hfState));
        renderAllViews();
        showToast('Đã tự động đồng bộ thời gian thực.');
      }
    };
  } catch (e) {}

  window.addEventListener('storage', (e) => {
    if (e.key === getStorageKey(hfState.activeWorkspaceCode)) {
      try { hfState = JSON.parse(e.newValue); renderAllViews(); } catch (err) {}
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAutoSyncEngine();
  initServerSync();
  initRealtimeCloudSync();
  applyThemeAndAccent();
  initRouting();
  checkDedicatedPortalUrl();
  populateTaskModalDropdowns();

  const gatewayOverlay = document.getElementById('pnTaskLoginGateway');
  if (!hfState.isLoggedIn || !hfState.currentUser) {
    if (gatewayOverlay) {
      gatewayOverlay.classList.add('active');
      gatewayOverlay.style.display = 'flex';
    }
  } else {
    if (gatewayOverlay) {
      gatewayOverlay.classList.remove('active');
      gatewayOverlay.style.display = 'none';
    }
  }

  renderAllViews();
  initGlobalEvents();
});

function recomputeAllMetrics() {
  (hfState.projects || []).forEach(p => {
    const projTasks = (hfState.tasks || []).filter(t => t.project === p.name);
    if (projTasks.length > 0) {
      const done = projTasks.filter(t => t.status === 'DONE').length;
      p.tasksCount = projTasks.length;
      p.progress = Math.round((done / projTasks.length) * 100);
    }
  });
}

function populateTaskModalDropdowns() {
  const assigneeSelect = document.getElementById('quickTaskAssigneeSelect');
  if (assigneeSelect) {
    assigneeSelect.innerHTML = `<option value="Tất cả">Tất cả thành viên trong nhóm</option>`;
    (hfState.users || []).forEach(u => {
      const opt = document.createElement('option');
      opt.value = u.name;
      opt.textContent = `${u.name} (${u.role})`;
      assigneeSelect.appendChild(opt);
    });
  }
}

function applyUIPermissionVisibility() {
  const isPNAdmin = checkIsAdmin(hfState.currentUser);
  const canDeleteTask = hasPermission('canDeleteTask');

  const adminNavElem = document.querySelectorAll('[data-route="teams"]');
  adminNavElem.forEach(el => {
    el.style.display = isPNAdmin ? 'flex' : 'none';
  });

  document.querySelectorAll('.admin-only-filter').forEach(el => {
    el.style.display = isPNAdmin ? 'inline-flex' : 'none';
  });

  const subSelect = document.getElementById('adminSubAccountFilterSelect');
  if (subSelect && isPNAdmin) {
    const currentVal = subSelect.value;
    subSelect.innerHTML = '<option value="">Lọc theo Tài khoản Con...</option>';
    (hfState.users || []).forEach(u => {
      if (u.username !== 'pn' && u.id !== 'u-pn') {
        const opt = document.createElement('option');
        opt.value = u.name;
        opt.textContent = `Tài khoản Con: ${u.name}`;
        subSelect.appendChild(opt);
      }
    });
    subSelect.value = currentVal;
  }

  const drawerDeleteBtn = document.getElementById('drawerDeleteBtn');
  if (drawerDeleteBtn) {
    drawerDeleteBtn.style.display = canDeleteTask ? 'inline-block' : 'none';
  }

  const adminTag = document.getElementById('topbarPortalAdminTag');
  const clientTag = document.getElementById('topbarPortalClientTag');
  if (adminTag) {
    adminTag.style.display = isPNAdmin ? 'inline-flex' : 'none';
  }
  if (clientTag) {
    clientTag.style.display = (!isPNAdmin && hfState.currentUser) ? 'inline-flex' : 'none';
  }
}

function renderAllViews() {
  try {
    recomputeAllMetrics();
    applyUIPermissionVisibility();
    populateTaskModalDropdowns();
    updateTopNavUserDisplay();
    renderFastSwitchModal();
    renderDashboard();
    renderTasks();
    renderProjects();
    renderKanban();
    renderCalendar();
    renderStudy();
    renderHabits();
    renderNotes();
    renderTeams();
    renderSettings();
    renderChat();
    renderFiles();
    renderAnalytics();
    updatePomodoroUI();
  } catch (err) {
    console.warn("Render exception safe-swallowed:", err);
  }
}

function updateTopNavUserDisplay() {
  const user = hfState.currentUser || { name: 'Chưa đăng nhập', role: 'Khách', avatar: 'K' };
  const avatarElem = document.getElementById('currentUserAvatarDisplay');
  const nameElem = document.getElementById('currentUserNameDisplay');
  if (avatarElem) avatarElem.textContent = user.avatar;
  if (nameElem) nameElem.textContent = `${user.name} (${user.role})`;

  const pendingCount = (hfState.pendingRegistrations || []).length;
  const badgeElem = document.getElementById('adminPendingNoticeBadge');
  if (badgeElem) {
    if (pendingCount > 0 && hasPermission('canManageUsers')) {
      badgeElem.style.display = 'inline-flex';
      badgeElem.textContent = `${pendingCount} Yêu cầu duyệt`;
    } else {
      badgeElem.style.display = 'none';
    }
  }
}

function switchUserProfile(userId) {
  const currentUser = hfState.currentUser;
  if (!currentUser || currentUser.id !== userId) {
    alert('Tính năng chuyển đổi tài khoản trực tiếp đã bị khóa vì lý do bảo mật. Mỗi người dùng chỉ được phép truy cập tài khoản của chính mình. Vui lòng Đăng xuất nếu muốn đăng nhập tài khoản khác.');
    return;
  }
}

function applyThemeAndAccent() {
  if (hfState.userSettings && hfState.userSettings.theme === 'dark') document.body.classList.remove('light-mode');
  else document.body.classList.add('light-mode');
}

function toggleDarkMode() {
  if (!hfState.userSettings) hfState.userSettings = defaultPnTaskState.userSettings;
  hfState.userSettings.theme = hfState.userSettings.theme === 'dark' ? 'light' : 'dark';
  saveHfState(true);
  applyThemeAndAccent();
}

function initRouting() {
  document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const route = item.getAttribute('data-route');
      if (route) navigateTo(route);
    });
  });
}

function navigateTo(routeId) {
  document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('.hf-view-panel').forEach(p => p.style.display = 'none');

  document.querySelectorAll(`[data-route="${routeId}"]`).forEach(el => el.classList.add('active'));
  const panel = document.getElementById(`view_${routeId}`);
  if (panel) panel.style.display = 'block';

  renderAllViews();
}

/* DASHBOARD */
function renderDashboard() {
  const isPNAdmin = hasPermission('canManageUsers');
  const visibleTasks = getVisibleTasks();

  const totalTasks = visibleTasks.length;
  const doneTasks = visibleTasks.filter(t => t.status === 'DONE').length;

  const cntTasksElem = document.getElementById('dashCntTasks');
  const cntDoneElem = document.getElementById('dashCntDone');
  const cntOverdueElem = document.getElementById('dashCntOverdue');
  const focusTimeElem = document.getElementById('dashFocusTimeDisplay');

  if (cntTasksElem) cntTasksElem.textContent = totalTasks;
  if (cntDoneElem) cntDoneElem.textContent = doneTasks;
  if (cntOverdueElem) cntOverdueElem.textContent = visibleTasks.filter(t => t.priority === 'URGENT' || (t.due && t.due.includes('14/08') && t.status !== 'DONE')).length;
  if (focusTimeElem) focusTimeElem.textContent = `${Math.floor((hfState.focusSessions?.totalMinutesToday || 0) / 60)} giờ ${(hfState.focusSessions?.totalMinutesToday || 0) % 60} phút`;

  const todayList = document.getElementById('dashTodayPriorities');
  if (todayList) {
    todayList.innerHTML = '';
    visibleTasks.slice(0, 5).forEach(t => {
      const div = document.createElement('div');
      div.className = 'task-row-item';
      div.onclick = () => openTaskDetailDrawer(t.id);
      div.style.display = 'flex';
      div.style.justifyContent = 'space-between';
      div.style.alignItems = 'center';
      div.style.padding = '8px 0';
      div.style.borderBottom = '1px solid var(--border)';
      div.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px;">
          <input type="checkbox" class="task-checkbox" ${t.status === 'DONE' ? 'checked' : ''} onclick="event.stopPropagation(); toggleTaskDone('${t.id}')">
          <span style="font-weight:600; ${t.status === 'DONE' ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${escapeHtml(t.title)}</span>
        </div>
        <span class="hf-badge badge-${t.status.toLowerCase().replace('_', '-')}">${formatStatusVN(t.status)}</span>
      `;
      todayList.appendChild(div);
    });
  }

  const monitorCard = document.getElementById('dashMonitorSectionCard');
  const monitorContainer = document.getElementById('adminMemberProgressMonitor');

  if (!isPNAdmin) {
    if (monitorCard) monitorCard.style.display = 'none';
  } else {
    if (monitorCard) monitorCard.style.display = 'block';
    if (monitorContainer) {
      let monitorHTML = '';
      (hfState.users || []).forEach(u => {
        const userTasks = (hfState.tasks || []).filter(t => t.assignee === u.name || t.assignee === u.username);
        const done = userTasks.filter(t => t.status === 'DONE').length;
        const total = userTasks.length;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;

        monitorHTML += `
          <div style="margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:600;">
              <span>${escapeHtml(u.name)} (${escapeHtml(u.role)})</span>
              <span style="color:var(--primary);">${done}/${total} Task xong (${pct}%)</span>
            </div>
            <div style="width:100%; background:var(--surface-muted); height:6px; border-radius:3px; overflow:hidden; margin-top:4px;">
              <div style="width:${pct}%; background:var(--primary); height:100%; transition:width 0.3s ease;"></div>
            </div>
          </div>
        `;
      });
      monitorContainer.innerHTML = monitorHTML;
    }
  }
}

function renderTasks() {
  const container = document.getElementById('tasksListContainer');
  if (!container) return;

  container.innerHTML = '';
  const isPNAdmin = checkIsAdmin(hfState.currentUser);
  let filtered = getVisibleTasks();

  const q = (document.getElementById('taskSearchInput')?.value || '').toLowerCase().trim();
  if (q) filtered = filtered.filter(t => t.title.toLowerCase().includes(q) || (t.project && t.project.toLowerCase().includes(q)));

  if (currentTaskFilter === 'today') filtered = filtered.filter(t => t.doToday || (t.due && t.due.includes('14/08')));
  else if (currentTaskFilter === 'upcoming') filtered = filtered.filter(t => t.due && !t.due.includes('14/08') && t.status !== 'DONE');
  else if (currentTaskFilter === 'overdue') filtered = filtered.filter(t => t.priority === 'URGENT' || (t.due && t.due.includes('14/08') && t.status !== 'DONE'));
  else if (currentTaskFilter === 'completed') filtered = filtered.filter(t => t.status === 'DONE');
  else if (currentTaskFilter === 'adminAssigned') {
    filtered = filtered.filter(t => {
      const isCreatorAdmin = (t.creator === 'PN' || t.creator === 'pn' || (t.creator || '').includes('Quản trị'));
      const isAssigneeSub = t.assignee && t.assignee !== 'PN' && t.assignee !== 'pn' && !(t.assignee || '').includes('Quản trị');
      return isCreatorAdmin && isAssigneeSub;
    });
  }
  else if (currentTaskFilter === 'personalAssigned') {
    filtered = filtered.filter(t => {
      const isCreatorSub = t.creator && t.creator !== 'PN' && t.creator !== 'pn' && !(t.creator || '').includes('Quản trị');
      const isAssigneeSub = t.assignee && t.assignee !== 'PN' && t.assignee !== 'pn' && !(t.assignee || '').includes('Quản trị');
      return isCreatorSub || isAssigneeSub;
    });
  }
  else if (currentTaskFilter === 'subCreated') {
    filtered = filtered.filter(t => {
      const isCreatorSub = t.creator && t.creator !== 'PN' && t.creator !== 'pn' && !(t.creator || '').includes('Quản trị');
      return isCreatorSub;
    });
  }
  else if (currentTaskFilter.startsWith('subAccount_')) {
    const selectedUser = currentTaskFilter.replace('subAccount_', '');
    filtered = filtered.filter(t => t.assignee === selectedUser || t.creator === selectedUser);
  }

  let tableHTML = '';

  // Executive Overview Banner for Admin
  if (isPNAdmin) {
    const adminAssignedTasks = (hfState.tasks || []).filter(t => {
      const isCreatorAdmin = (t.creator === 'PN' || t.creator === 'pn' || (t.creator || '').includes('Quản trị'));
      const isAssigneeSub = t.assignee && t.assignee !== 'PN' && t.assignee !== 'pn' && !(t.assignee || '').includes('Quản trị');
      return isCreatorAdmin && isAssigneeSub;
    });

    const personalAssignedTasks = (hfState.tasks || []).filter(t => {
      const isCreatorSub = t.creator && t.creator !== 'PN' && t.creator !== 'pn' && !(t.creator || '').includes('Quản trị');
      const isAssigneeSub = t.assignee && t.assignee !== 'PN' && t.assignee !== 'pn' && !(t.assignee || '').includes('Quản trị');
      return isCreatorSub || isAssigneeSub;
    });

    const subCreatedTasks = (hfState.tasks || []).filter(t => {
      const isCreatorSub = t.creator && t.creator !== 'PN' && t.creator !== 'pn' && !(t.creator || '').includes('Quản trị');
      return isCreatorSub;
    });

    tableHTML += `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin-bottom:16px;">
        <div class="hf-card" style="padding:12px; border-left:4px solid var(--primary); cursor:pointer; background:var(--bg-secondary);" onclick="filterTasksTab('adminAssigned')">
          <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">📌 Task Admin Giao Con</div>
          <div style="font-size:1.3rem; font-weight:700; color:var(--primary); margin-top:4px;">${adminAssignedTasks.length} Công việc</div>
          <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">Admin giao cho thành viên con</div>
        </div>

        <div class="hf-card" style="padding:12px; border-left:4px solid #e67e22; cursor:pointer; background:var(--bg-secondary);" onclick="filterTasksTab('personalAssigned')">
          <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">👤 Task Cá Nhân Giao Nhau</div>
          <div style="font-size:1.3rem; font-weight:700; color:#e67e22; margin-top:4px;">${personalAssignedTasks.length} Công việc</div>
          <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">Cá nhân giao việc lẫn nhau</div>
        </div>

        <div class="hf-card" style="padding:12px; border-left:4px solid #9b59b6; cursor:pointer; background:var(--bg-secondary);" onclick="filterTasksTab('subCreated')">
          <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">📝 Task Con Tự Tạo</div>
          <div style="font-size:1.3rem; font-weight:700; color:#9b59b6; margin-top:4px;">${subCreatedTasks.length} Công việc</div>
          <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">Tài khoản con tự khởi tạo</div>
        </div>
      </div>
    `;
  }

  tableHTML += `
    <div class="misa-table-container">
      <table class="misa-table">
        <thead>
          <tr>
            <th style="width:36px;"></th>
            <th>Tên công việc</th>
            <th>Người giao (Admin / Tự tạo)</th>
            <th>Người thực hiện</th>
            <th>Dự án</th>
            <th>Độ ưu tiên</th>
            <th>Trạng thái</th>
            <th>Tệp đính kèm</th>
            <th>Hạn nộp</th>
          </tr>
        </thead>
        <tbody>
  `;

  if (filtered.length === 0) {
    tableHTML += `<tr><td colspan="9" style="text-align:center; color:var(--text-muted); padding:20px;">Không có công việc nào thuộc tiêu chí lọc.</td></tr>`;
  } else {
    filtered.forEach(t => {
      const attachCount = (t.attachments || []).length;
      const isCreatorAdmin = (t.creator === 'PN' || t.creator === 'pn' || (t.creator || '').includes('Quản trị'));
      const isAssigneeAdmin = (t.assignee === 'PN' || t.assignee === 'pn' || (t.assignee || '').includes('Quản trị'));
      
      let originBadge = '';
      if (isPNAdmin) {
        if (isCreatorAdmin && !isAssigneeAdmin) {
          originBadge = `<span class="hf-badge" style="background:rgba(52, 152, 219, 0.15); color:#2980b9; border:1px solid #3498db; font-size:0.7rem; margin-left:6px;">📌 Admin Giao Con</span>`;
        } else if (!isCreatorAdmin && !isAssigneeAdmin && t.creator !== t.assignee) {
          originBadge = `<span class="hf-badge" style="background:rgba(230, 126, 34, 0.15); color:#d35400; border:1px solid #e67e22; font-size:0.7rem; margin-left:6px;">👤 Cá Nhân Giao</span>`;
        } else if (!isCreatorAdmin) {
          originBadge = `<span class="hf-badge" style="background:rgba(155, 89, 182, 0.15); color:#8e44ad; border:1px solid #9b59b6; font-size:0.7rem; margin-left:6px;">📝 Con Tự Tạo</span>`;
        } else {
          originBadge = `<span class="hf-badge badge-done" style="font-size:0.7rem; margin-left:6px;">👑 Task Admin</span>`;
        }
      }

      tableHTML += `
        <tr onclick="openTaskDetailDrawer('${t.id}')" style="cursor:pointer;">
          <td><input type="checkbox" class="task-checkbox" ${t.status === 'DONE' ? 'checked' : ''} onclick="event.stopPropagation(); toggleTaskDone('${t.id}')"></td>
          <td style="font-weight:600; ${t.status === 'DONE' ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">
            ${escapeHtml(t.title)} ${originBadge}
          </td>
          <td><span style="font-weight:600; font-size:0.8rem; color:var(--primary);">${escapeHtml(t.creator||'Quản trị viên (Admin)')}</span></td>
          <td><span style="font-weight:600; font-size:0.8rem;">${escapeHtml(t.assignee||'PN')}</span></td>
          <td style="color:var(--text-secondary); font-size:0.8rem;">${escapeHtml(t.project||'Hệ thống PN Task')}</td>
          <td><span class="hf-badge badge-${t.priority.toLowerCase()}">${formatPriorityVN(t.priority)}</span></td>
          <td><span class="hf-badge badge-${t.status.toLowerCase().replace('_', '-')}">${formatStatusVN(t.status)}</span></td>
          <td style="font-size:0.8rem; color:var(--primary);">${attachCount > 0 ? `${attachCount} tệp` : 'Chưa có'}</td>
          <td style="font-size:0.8rem; color:var(--text-secondary);">${escapeHtml(t.due || '')}</td>
        </tr>
      `;
    });
  }

  tableHTML += `</tbody></table></div>`;
  container.innerHTML = tableHTML;
}

function filterTasksTab(type) {
  currentTaskFilter = type;
  document.querySelectorAll('.task-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`taskTab_${type}`)?.classList.add('active');
  renderTasks();
}

function toggleTaskDone(taskId) {
  const task = hfState.tasks.find(t => t.id === taskId);
  if (task) {
    task.status = task.status === 'DONE' ? 'TODO' : 'DONE';
    addAuditLog(`Đã đổi trạng thái công việc [${task.title}] sang ${formatStatusVN(task.status)}`);
    saveHfState(true);
    renderAllViews();
    showToast(task.status === 'DONE' ? 'Đã hoàn thành công việc.' : 'Đã mở lại công việc.');
  }
}

/* TEAMS & RBAC & APPROVAL VIEW */
function renderTeams() {
  const container = document.getElementById('teamsListContainer');
  if (!container) return;

  const isPNAdmin = checkIsAdmin(hfState.currentUser);
  if (!isPNAdmin) {
    container.innerHTML = `<div class="hf-card" style="text-align:center; padding:40px;">
      <h2 style="color:var(--danger);">Khu vực Giới hạn Access</h2>
      <p style="color:var(--text-secondary); margin-top:8px;">Chức năng này dành riêng cho Tài khoản Quản trị viên.</p>
    </div>`;
    return;
  }

  const pendingList = hfState.pendingRegistrations || [];
  const allUsers = hfState.users || [];
  const subAccounts = allUsers.filter(u => u.username !== 'pn' && u.id !== 'u-pn');

  let html = `<div class="hf-card" style="margin-bottom:16px;">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h3>Trung tâm Quản lý & Giám sát Tài khoản Con (Sub-Accounts)</h3>
        <p style="color:var(--text-secondary); font-size:0.85rem; margin-top:4px;">Quyền Admin: Theo dõi thông tin, mật khẩu, thống kê công việc và quản lý phân quyền tất cả tài khoản thành viên con.</p>
      </div>
      <button class="hf-btn hf-btn-primary" onclick="createNewUserAccount()">+ Tạo Tài khoản Con Mới</button>
    </div>
  </div>`;

  // Summary Metrics Bar for Admin
  html += `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:16px;">
      <div class="hf-card" style="padding:14px; border-left:4px solid var(--primary);">
        <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Tổng Số Tài khoản Con</div>
        <div style="font-size:1.4rem; font-weight:700; margin-top:4px;">${subAccounts.length} Tài khoản</div>
      </div>
      <div class="hf-card" style="padding:14px; border-left:4px solid var(--warning);">
        <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Yêu cầu Đăng ký Cần Duyệt</div>
        <div style="font-size:1.4rem; font-weight:700; color:var(--warning); margin-top:4px;">${pendingList.length} Yêu cầu</div>
      </div>
      <div class="hf-card" style="padding:14px; border-left:4px solid var(--success);">
        <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Tổng số Task Thành viên</div>
        <div style="font-size:1.4rem; font-weight:700; color:var(--success); margin-top:4px;">${(hfState.tasks || []).length} Công việc</div>
      </div>
    </div>
  `;

  if (pendingList.length > 0) {
    html += `<div class="hf-card" style="margin-bottom:20px; border-color:var(--danger); background:rgba(168, 59, 59, 0.08);">
      <h3 style="color:var(--danger); margin-bottom:10px;">Yêu cầu Đăng ký Mới từ Thành viên / Khách hàng (Cần duyệt)</h3>
      <div class="misa-table-container">
        <table class="misa-table">
          <thead>
            <tr>
              <th>Họ và Tên</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>
              <th>Thời gian</th>
              <th>Hành động Phê duyệt</th>
            </tr>
          </thead>
          <tbody>
    `;

    pendingList.forEach(req => {
      html += `
        <tr>
          <td style="font-weight:700;">${escapeHtml(req.name)}</td>
          <td><code>${escapeHtml(req.username)}</code></td>
          <td>${escapeHtml(req.email)}</td>
          <td style="font-size:0.8rem; color:var(--text-secondary);">${escapeHtml(req.requestDate)}</td>
          <td>
            <button class="hf-btn hf-btn-primary" style="padding:4px 10px; font-size:0.75rem; background:var(--success); border-color:var(--success);" onclick="approveUserRegistration('${req.id}')">Phê duyệt & Cấp quyền</button>
            <button class="hf-btn hf-btn-secondary" style="padding:4px 10px; font-size:0.75rem; color:var(--danger);" onclick="rejectUserRegistration('${req.id}')">Từ chối</button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table></div></div>`;
  }

  html += `<h3 style="margin-bottom:10px;">Danh sách Tài khoản Con & Phân quyền Chi tiết</h3>
  <div class="misa-table-container"><table class="misa-table">
    <thead>
      <tr>
        <th>Thành viên / Tài khoản Con</th>
        <th>Tên đăng nhập</th>
        <th>Mật khẩu</th>
        <th>Vai trò</th>
        <th>Công việc</th>
        <th>Hành động Quản trị</th>
      </tr>
    </thead>
    <tbody>`;

  allUsers.forEach(u => {
    const isRootPN = u.username === 'pn' || u.id === 'u-pn';
    const userTasks = (hfState.tasks || []).filter(t => t.assignee === u.name || t.assignee === u.username);

    html += `
      <tr>
        <td style="font-weight:700;">
          ${escapeHtml(u.name)} ${isRootPN ? '<span class="hf-badge badge-done" style="margin-left:4px; font-size:0.7rem;">ADMIN ROOT</span>' : ''}
        </td>
        <td><code>${escapeHtml(u.username)}</code></td>
        <td><code>${escapeHtml(u.pass || '******')}</code></td>
        <td>
          ${!isRootPN ? `
            <select class="form-select" style="padding:4px 8px; font-size:0.775rem; width: auto;" onchange="changeUserRole('${u.id}', this.value)">
              <option value="Quản trị viên (Giám đốc)" ${u.role.includes('Quản trị') ? 'selected' : ''}>Quản trị viên (Giám đốc)</option>
              <option value="Quản lý Dự án" ${u.role.includes('Quản lý') ? 'selected' : ''}>Quản lý Dự án</option>
              <option value="Thành viên Đội ngũ" ${u.role.includes('Thành viên') ? 'selected' : ''}>Thành viên Đội ngũ</option>
              <option value="Người dùng (Thành viên cá nhân)" ${u.role.includes('Người dùng') ? 'selected' : ''}>Người dùng (Thành viên cá nhân)</option>
              <option value="Khách hàng (Người xem)" ${u.role.includes('Khách') ? 'selected' : ''}>Khách hàng (Người xem)</option>
            </select>
          ` : `<span class="hf-badge badge-done">${escapeHtml(u.role)}</span>`}
        </td>
        <td><span class="hf-badge badge-progress">${userTasks.length} Task</span></td>
        <td>
          <div style="display:flex; gap:6px; align-items:center;">
            <button onclick="openSubAccountDetailsModal('${u.id}')" class="hf-btn hf-btn-primary" style="padding:4px 8px; font-size:0.75rem;">👁️ Xem Chi tiết</button>
            <button onclick="openEditUserModal('${u.id}')" class="hf-btn hf-btn-secondary" style="padding:4px 8px; font-size:0.75rem;">Sửa</button>
            ${!isRootPN ? `<button onclick="deleteUserAccount('${u.id}')" class="hf-btn hf-btn-secondary" style="padding:4px 8px; font-size:0.75rem; color:var(--danger);" title="Xóa tài khoản con">Xóa</button>` : ''}
          </div>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;

  html += `<div class="hf-card" style="margin-top:20px;">
    <h3>Nhật ký Hoạt động Hệ thống (Audit Logs)</h3>
    <div style="margin-top:10px; max-height:180px; overflow-y:auto;">
  `;

  (hfState.auditLogs || []).forEach(log => {
    html += `<div style="font-size:0.8rem; color:var(--text-secondary); border-bottom:1px solid var(--border); padding:6px 0;">
      <strong style="color:var(--primary);">${escapeHtml(log.user)}</strong>: ${escapeHtml(log.action)} <span style="float:right; color:var(--text-muted);">${log.time}</span>
    </div>`;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

function openSubAccountDetailsModal(userId) {
  const isPNAdmin = checkIsAdmin(hfState.currentUser);
  if (!isPNAdmin) {
    alert('Chỉ tài khoản Quản trị viên mới có quyền xem thông tin chi tiết tài khoản con.');
    return;
  }

  const targetUser = (hfState.users || []).find(u => u.id === userId);
  if (!targetUser) {
    alert('Không tìm thấy tài khoản con.');
    return;
  }

  const userTasks = (hfState.tasks || []).filter(t => 
    t.assignee === targetUser.name || 
    t.assignee === targetUser.username ||
    t.creator === targetUser.name ||
    t.creator === targetUser.username
  );

  const completedTasks = userTasks.filter(t => t.status === 'DONE').length;
  const inProgressTasks = userTasks.filter(t => t.status === 'IN_PROGRESS').length;
  const todoTasks = userTasks.filter(t => t.status === 'TODO').length;

  const modal = document.getElementById('viewSubAccountModalOverlay');
  const bodyElem = document.getElementById('viewSubAccountModalBody');
  const titleElem = document.getElementById('viewSubAccountModalTitle');

  if (titleElem) titleElem.textContent = `Chi tiết Tài khoản Con: ${targetUser.name}`;

  if (bodyElem) {
    let taskRowsHtml = '';
    if (userTasks.length === 0) {
      taskRowsHtml = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:16px;">Tài khoản con này chưa có công việc nào.</td></tr>`;
    } else {
      userTasks.forEach(t => {
        let statusBadge = `<span class="hf-badge badge-todo">Cần làm</span>`;
        if (t.status === 'IN_PROGRESS') statusBadge = `<span class="hf-badge badge-progress">Đang làm</span>`;
        if (t.status === 'DONE') statusBadge = `<span class="hf-badge badge-done">Hoàn thành</span>`;
        if (t.status === 'IN_REVIEW') statusBadge = `<span class="hf-badge badge-review">Đang duyệt</span>`;

        taskRowsHtml += `
          <tr>
            <td style="font-weight:600;">${escapeHtml(t.title)}</td>
            <td>${escapeHtml(t.project || 'Cá nhân')}</td>
            <td>${statusBadge}</td>
            <td style="font-size:0.8rem; color:var(--text-secondary);">${escapeHtml(t.due || '-')}</td>
          </tr>
        `;
      });
    }

    bodyElem.innerHTML = `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:16px;">
        <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; border:1px solid var(--border);">
          <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Hồ sơ Tài khoản Con</div>
          <div style="font-size:1.05rem; font-weight:700; margin-top:4px;">${escapeHtml(targetUser.name)}</div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">Username: <code style="color:var(--primary); font-weight:600;">${escapeHtml(targetUser.username)}</code></div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">Password: <code style="color:var(--danger); font-weight:600;">${escapeHtml(targetUser.pass)}</code></div>
          <div style="font-size:0.85rem; color:var(--primary); font-weight:600; margin-top:4px;">Vai trò: ${escapeHtml(targetUser.role)}</div>
        </div>

        <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; border:1px solid var(--border);">
          <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Thống kê Tiến độ</div>
          <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:0.85rem;">
            <span>Tổng số Task:</span>
            <strong>${userTasks.length}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.85rem; color:var(--success);">
            <span>Đã hoàn thành:</span>
            <strong>${completedTasks}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.85rem; color:var(--warning);">
            <span>Đang thực hiện:</span>
            <strong>${inProgressTasks}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.85rem; color:var(--text-muted);">
            <span>Cần làm:</span>
            <strong>${todoTasks}</strong>
          </div>
        </div>
      </div>

      <h4 style="margin-bottom:8px; font-size:0.9rem;">Danh sách Công việc của Tài khoản Con này</h4>
      <div class="misa-table-container" style="max-height:200px; overflow-y:auto;">
        <table class="misa-table" style="width:100%; font-size:0.8rem;">
          <thead>
            <tr>
              <th>Tên công việc</th>
              <th>Dự án</th>
              <th>Trạng thái</th>
              <th>Hạn chót</th>
            </tr>
          </thead>
          <tbody>
            ${taskRowsHtml}
          </tbody>
        </table>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:16px;">
        <button class="hf-btn hf-btn-primary" onclick="closeSubAccountDetailsModal(); openEditUserModal('${targetUser.id}');" style="font-size:0.8rem;">Chỉnh sửa Thông tin & Mật khẩu</button>
        <button class="hf-btn hf-btn-secondary" onclick="closeSubAccountDetailsModal()" style="font-size:0.8rem;">Đóng Window</button>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function closeSubAccountDetailsModal() {
  const modal = document.getElementById('viewSubAccountModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function openTaskDetailDrawer(taskId) {
  const task = (hfState.tasks || []).find(t => t.id === taskId);
  if (!task) return;

  activeDrawerTaskId = taskId;
  const tInput = document.getElementById('drawerTaskTitle'); if (tInput) tInput.value = task.title;
  const cInput = document.getElementById('drawerTaskCreator'); if (cInput) cInput.value = task.creator || 'Quản trị viên (Admin)';
  const dInput = document.getElementById('drawerTaskDesc'); if (dInput) dInput.value = task.desc || '';
  const sSelect = document.getElementById('drawerTaskStatus'); if (sSelect) sSelect.value = task.status;
  const pSelect = document.getElementById('drawerTaskPriority'); if (pSelect) pSelect.value = task.priority;
  const dueInput = document.getElementById('drawerTaskDue'); if (dueInput) dueInput.value = task.due || '';

  const aSelect = document.getElementById('drawerTaskAssignee');
  if (aSelect) {
    aSelect.innerHTML = `<option value="Tất cả">Tất cả thành viên trong nhóm</option>`;
    (hfState.users || []).forEach(u => {
      const opt = document.createElement('option');
      opt.value = u.name;
      opt.textContent = `${u.name} (${u.role})`;
      aSelect.appendChild(opt);
    });
    aSelect.value = task.assignee || 'Tất cả';
  }

  const attachListElem = document.getElementById('drawerAttachmentsList');
  if (attachListElem) {
    attachListElem.innerHTML = '';
    const attachments = task.attachments || [];
    if (attachments.length === 0) {
      attachListElem.innerHTML = `<span style="font-size:0.75rem; color:var(--text-muted);">Chưa có tệp đính kèm.</span>`;
    } else {
      attachments.forEach(att => {
        const item = document.createElement('div');
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        item.style.fontSize = '0.8rem';
        item.style.background = 'var(--surface-muted)';
        item.style.padding = '6px 10px';
        item.style.borderRadius = '6px';
        item.style.marginTop = '4px';
        item.innerHTML = `<span>Tệp: <strong>${escapeHtml(att.name)}</strong> (${escapeHtml(att.size||'1 MB')})</span> <button class="hf-btn hf-btn-primary" style="padding:2px 6px; font-size:0.7rem;" onclick="downloadRealFile('${att.dataUrl}', '${escapeHtml(att.name)}')">Tải về máy</button>`;
        attachListElem.appendChild(item);
      });
    }
  }

  const drawerDeleteBtn = document.getElementById('drawerDeleteBtn');
  if (drawerDeleteBtn) {
    drawerDeleteBtn.style.display = hasPermission('canDeleteTask') ? 'inline-block' : 'none';
  }

  document.getElementById('taskDrawerOverlay')?.classList.add('active');
  document.getElementById('taskDrawer')?.classList.add('active');
}

function closeTaskDetailDrawer() {
  document.getElementById('taskDrawerOverlay')?.classList.remove('active');
  document.getElementById('taskDrawer')?.classList.remove('active');
  activeDrawerTaskId = null;
}

function saveDrawerTaskChanges() {
  if (!activeDrawerTaskId) return;

  const task = (hfState.tasks || []).find(t => t.id === activeDrawerTaskId);
  if (task) {
    const tInput = document.getElementById('drawerTaskTitle'); if (tInput) task.title = tInput.value.trim();
    const dInput = document.getElementById('drawerTaskDesc'); if (dInput) task.desc = dInput.value.trim();
    const sSelect = document.getElementById('drawerTaskStatus'); if (sSelect) task.status = sSelect.value;
    const pSelect = document.getElementById('drawerTaskPriority'); if (pSelect) task.priority = pSelect.value;
    const dueInput = document.getElementById('drawerTaskDue'); if (dueInput) task.due = dueInput.value.trim();
    const aSelect = document.getElementById('drawerTaskAssignee'); if (aSelect) task.assignee = aSelect.value;

    addAuditLog(`Chỉnh sửa chi tiết công việc [${task.title}]`);
    saveHfState(true);
    renderAllViews();
    showToast('Lưu và đồng bộ dữ liệu thành công.');
  }
}

function deleteTaskFromDrawer() {
  if (!hasPermission('canDeleteTask')) {
    alert('Bạn không có quyền xóa công việc.');
    return;
  }

  if (!activeDrawerTaskId) return;
  if (confirm('Bạn có chắc muốn xóa công việc này?')) {
    const task = (hfState.tasks || []).find(t => t.id === activeDrawerTaskId);
    if (task) addAuditLog(`Đã xóa công việc [${task.title}]`);

    hfState.tasks = (hfState.tasks || []).filter(t => t.id !== activeDrawerTaskId);
    saveHfState(true);
    closeTaskDetailDrawer();
    renderAllViews();
    showToast('Đã xóa công việc.');
  }
}

function renderKanban() {
  const cols = ['col_TODO', 'col_IN_PROGRESS', 'col_IN_REVIEW', 'col_DONE'];
  const statusMap = { 'col_TODO': 'TODO', 'col_IN_PROGRESS': 'IN_PROGRESS', 'col_IN_REVIEW': 'IN_REVIEW', 'col_DONE': 'DONE' };
  const visibleTasks = getVisibleTasks();

  cols.forEach(colId => {
    const container = document.getElementById(colId);
    if (!container) return;
    container.innerHTML = '';
    const targetStatus = statusMap[colId];
    visibleTasks.filter(t => t.status === targetStatus).forEach(task => {
      const card = document.createElement('div');
      card.className = 'kanban-card';
      card.onclick = () => openTaskDetailDrawer(task.id);
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--primary);">${escapeHtml(task.project || 'Công việc')}</span>
          <span class="hf-badge badge-${task.priority.toLowerCase()}">${formatPriorityVN(task.priority)}</span>
        </div>
        <div style="font-weight:600; font-size:0.875rem;">${escapeHtml(task.title)}</div>
      `;
      container.appendChild(card);
    });
  });
}

function renderAnalytics() {
  const visibleTasks = getVisibleTasks();
  const total = visibleTasks.length;
  const done = visibleTasks.filter(t => t.status === 'DONE').length;
  const rate = total > 0 ? Math.round((done / total) * 100) : 0;

  const rateElem = document.getElementById('analyticsCompletionRate');
  const countElem = document.getElementById('analyticsDoneCount');
  if (rateElem) rateElem.textContent = `${rate}%`;
  if (countElem) countElem.textContent = done;
}

/* SETTINGS MODULE */
function exportSystemDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(hfState, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `PN_Task_Sao_Luu_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Đã xuất toàn bộ dữ liệu hệ thống ra tệp.');
}

function importSystemDataJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedState = JSON.parse(e.target.result);
      if (importedState && importedState.users && importedState.tasks) {
        hfState = importedState;
        saveHfState(true);
        renderAllViews();
        alert('Đã phục hồi dữ liệu thành công.');
      } else {
        alert('Tệp dữ liệu không hợp lệ.');
      }
    } catch (err) {
      alert('Lỗi khi đọc tệp dữ liệu sao lưu.');
    }
  };
  reader.readAsText(file);
}

function resetWorkspaceData() {
  if (confirm('Bạn có chắc muốn khôi phục dữ liệu hệ thống về mặc định ban đầu?')) {
    hfState = JSON.parse(JSON.stringify(defaultPnTaskState));
    saveHfState(true);
    renderAllViews();
    showToast('Đã khôi phục dữ liệu mặc định.');
  }
}

function initGlobalEvents() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); toggleCommandPalette(); }
  });
}

function toggleCommandPalette() { document.getElementById('commandPaletteOverlay')?.classList.toggle('active'); }
function closeCommandPalette() { document.getElementById('commandPaletteOverlay')?.classList.remove('active'); }
function openQuickCreateModal() { document.getElementById('quickCreateModalOverlay')?.classList.add('active'); }
function closeQuickCreateModal() { document.getElementById('quickCreateModalOverlay')?.classList.remove('active'); }

function handleQuickCreateSubmit() {
  const titleInput = document.getElementById('quickTaskTitleInput');
  const descInput = document.getElementById('quickTaskDescInput');
  const prioritySelect = document.getElementById('quickTaskPrioritySelect');
  const statusSelect = document.getElementById('quickTaskStatusSelect');
  const assigneeSelect = document.getElementById('quickTaskAssigneeSelect');
  const projectInput = document.getElementById('quickTaskProjectInput');
  const dueInput = document.getElementById('quickTaskDueInput');
  const fileInputReal = document.getElementById('quickTaskRealFileInput');

  if (!titleInput || !titleInput.value.trim()) {
    alert('Vui lòng nhập Tên công việc.');
    return;
  }

  const currentUser = hfState.currentUser || defaultPnTaskState.currentUser;
  const assignee = assigneeSelect ? assigneeSelect.value : currentUser.name;

  const attachments = [];

  const processAndSaveTask = () => {
    const newTask = {
      id: `task-${Date.now()}`,
      title: titleInput.value.trim(),
      desc: descInput && descInput.value.trim() ? descInput.value.trim() : 'Tạo mới từ hệ thống',
      status: statusSelect ? statusSelect.value : 'TODO',
      priority: prioritySelect ? prioritySelect.value : 'MEDIUM',
      project: projectInput && projectInput.value.trim() ? projectInput.value.trim() : 'Hệ thống PN Task',
      assignee: assignee,
      creator: currentUser ? currentUser.name : 'Hệ thống',
      due: dueInput && dueInput.value.trim() ? dueInput.value.trim() : '14/08/2026',
      doToday: true,
      subtasks: [],
      attachments: attachments,
      comments: []
    };

    if (!hfState.tasks) hfState.tasks = [];
    hfState.tasks.unshift(newTask);
    addAuditLog(`Tạo công việc mới [${newTask.title}] phân công cho ${assignee}`);
    saveHfState(true);

    titleInput.value = '';
    if (descInput) descInput.value = '';
    if (fileInputReal) fileInputReal.value = '';

    closeQuickCreateModal();
    renderAllViews();
    showToast(`Đã tạo công việc và phân công cho ${assignee}.`);
  };

  if (fileInputReal && fileInputReal.files && fileInputReal.files.length > 0) {
    const file = fileInputReal.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      attachments.push({
        id: `att-${Date.now()}`,
        name: file.name,
        size: formatBytes(file.size),
        dataUrl: e.target.result
      });
      processAndSaveTask();
    };
    reader.readAsDataURL(file);
  } else {
    processAndSaveTask();
  }
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${escapeHtml(msg)}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('hfSidebar');
  if (!sidebar) return;
  sidebar.classList.toggle('mobile-open');
  let backdrop = document.getElementById('mobileSidebarBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'mobileSidebarBackdrop';
    backdrop.className = 'mobile-sidebar-backdrop';
    backdrop.onclick = () => {
      sidebar.classList.remove('mobile-open');
      backdrop.classList.remove('active');
    };
    document.body.appendChild(backdrop);
  }
  backdrop.classList.toggle('active', sidebar.classList.contains('mobile-open'));
}

