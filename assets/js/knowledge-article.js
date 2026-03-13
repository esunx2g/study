document.addEventListener("DOMContentLoaded", function () {
    if (typeof renderMathInElement === "function") {
        renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
            ],
            throwOnError: false,
        });
    }

    const sectionLinks = Array.from(document.querySelectorAll(".topic-nav a"));
    const sections = Array.from(document.querySelectorAll(".section-title[id]"));
    // The left sidebar is a categorized document list; only document links get active state.
    const docLinks = Array.from(document.querySelectorAll(".sidebar-nav a[data-doc-link]"));
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    docLinks.forEach((link) => {
        const target = link.getAttribute("href");
        const isCurrent = target === currentPath;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) {
            link.setAttribute("aria-current", "page");
        }
    });

    if (sectionLinks.length === 0 || sections.length === 0) {
        return;
    }

    const setActiveSection = () => {
        let currentId = sections[0].id;

        sections.forEach((section) => {
            if (section.getBoundingClientRect().top <= 160) {
                currentId = section.id;
            }
        });

        sectionLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${currentId}`;
            link.classList.toggle("is-active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "true");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    setActiveSection();
    window.addEventListener("scroll", setActiveSection, { passive: true });
});
