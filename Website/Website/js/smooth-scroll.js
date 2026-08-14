document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById(
        "siteHeader"
    );

    function getHeaderHeight() {
        if (!header) {
            return 0;
        }
        return header.offsetHeight;
    }


    function scrollToElement(element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = elementPosition - getHeaderHeight() - 18;

        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }


    document.querySelectorAll('a[href*="#"]')
        .forEach((link) => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute("href");
                const hashIndex = href.indexOf("#");
                if (hashIndex === -1) return;
                const targetId = href.substring(hashIndex);
                if (!targetId || targetId === "#!" || targetId === "#") {
                    if (targetId === "#") event.preventDefault();
                    return;
                }
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    scrollToElement(targetElement);
                    history.pushState(null, "", targetId);
                }
            });
        });

    if (window.location.hash) {
        window.setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                scrollToElement(
                    targetElement
                );
            }
        }, 120);
    }
});