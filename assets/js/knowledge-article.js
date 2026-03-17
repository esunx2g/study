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

    const initializeConceptGroups = () => {
        const articleScopes = Array.from(document.querySelectorAll(".tistory-post-wrapper article, .article-container article"));

        articleScopes.forEach((scope) => {
            const sections = Array.from(scope.querySelectorAll(".section-title"));

            sections.forEach((section) => {
                let conceptIndex = 0;
                let sibling = section.nextElementSibling;

                while (sibling && !sibling.classList.contains("section-title")) {
                    if (sibling.classList.contains("concept-group")) {
                        conceptIndex += 1;
                        sibling.dataset.conceptIndex = String(conceptIndex);
                    }

                    sibling = sibling.nextElementSibling;
                }

            });
        });
    };

    const initializeMathBoxLayout = () => {
        const mathBoxes = Array.from(document.querySelectorAll(".math-box"));

        mathBoxes.forEach((box) => {
            const contents = Array.from(box.querySelectorAll(":scope > .math-box-content"));
            let hasFormula = false;
            let hasBody = false;

            contents.forEach((content) => {
                if (content.classList.contains("math-box-content--body")) {
                    hasBody = true;
                    return;
                }

                content.classList.add("math-box-content--formula");
                hasFormula = true;
            });

            if (hasFormula && hasBody) {
                box.dataset.mathBoxLayout = "mixed";
            } else {
                delete box.dataset.mathBoxLayout;
            }
        });
    };

    const initializeTopicNavigation = () => {
        const sectionLinks = Array.from(document.querySelectorAll(".topic-nav a"));
        const sections = Array.from(document.querySelectorAll(".section-title[id]"));

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
    };

    initializeConceptGroups();
    initializeMathBoxLayout();

    if (document.documentElement.dataset.siteShellReady === "true") {
        initializeTopicNavigation();
        return;
    }

    document.addEventListener("site-shell:ready", initializeTopicNavigation, { once: true });
});
