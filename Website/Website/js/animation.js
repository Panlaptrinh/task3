document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(
        ".reveal"
    );
    /* ==================================================
       REVEAL WHEN SCROLLING
       ================================================== */
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    const delay = Number(
                        entry.target.dataset.delay ||
                        0
                    );
                    window.setTimeout(() => {
                        entry.target.classList.add(
                            "is-visible"
                        );
                    }, delay);
                    observer.unobserve(
                        entry.target
                    );
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );
        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add(
                "is-visible"
            );
        });
    }
    /* ==================================================
       PARALLAX
       ================================================= */
    const parallaxElements = document.querySelectorAll(
        "[data-parallax]"
    );
    let ticking = false;
    function updateParallax() {
        parallaxElements.forEach(
            (element) => {
                const speed = Number(
                    element.dataset.parallax
                );
                const rectangle = element.getBoundingClientRect();
                const viewportCenter = window.innerHeight / 2;
                const elementCenter = rectangle.top + rectangle.height / 2;
                const distance = elementCenter - viewportCenter;
                const offset = distance * speed;
                element.style.setProperty("--parallax-y", `${offset}px`);
            }
        );
        ticking = false;
    }

    function requestParallaxUpdate() {
        if (
            window.innerWidth <= 820 ||
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }
        if (ticking) {
            return;
        }
        ticking = true;
        window.requestAnimationFrame(
            updateParallax
        );
    }
    if (parallaxElements.length > 0) {
        updateParallax();
        window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
        window.addEventListener("resize", requestParallaxUpdate);
    }
});