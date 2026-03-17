async function loadInclude(target) {
    const includePath = target.dataset.include;

    if (!includePath) {
        return;
    }

    try {
        const response = await fetch(includePath);

        if (!response.ok) {
            throw new Error(`Failed to load ${includePath}: ${response.status}`);
        }

        target.innerHTML = await response.text();

        const heroTitle = target.dataset.heroTitle;
        const heroSubtitle = target.dataset.heroSubtitle;

        if (heroTitle) {
            const titleElement = target.querySelector(".hero-title");
            if (titleElement) {
                titleElement.textContent = heroTitle;
            }
        }

        if (heroSubtitle) {
            const subtitleElement = target.querySelector(".hero-subtitle");
            if (subtitleElement) {
                subtitleElement.textContent = heroSubtitle;
            }
        }
    } catch (error) {
        target.dataset.includeError = "true";
        console.warn(`[site-shell] ${error.message}`);
    }
}

function syncCurrentDocumentLink() {
    const docLinks = Array.from(document.querySelectorAll(".sidebar-nav a[data-doc-link]"));
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    docLinks.forEach((link) => {
        const target = link.getAttribute("href");
        const isCurrent = target === currentPath;

        link.classList.toggle("is-active", isCurrent);

        if (isCurrent) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    const includeTargets = Array.from(document.querySelectorAll("[data-include]"));

    await Promise.all(includeTargets.map(loadInclude));
    syncCurrentDocumentLink();

    document.documentElement.dataset.siteShellReady = "true";
    document.dispatchEvent(new CustomEvent("site-shell:ready"));
});
