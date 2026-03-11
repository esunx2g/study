document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const walk = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const textNodes = [];

    while ((node = walk.nextNode())) {
        textNodes.push(node);
    }

    textNodes.forEach((textNode) => {
        const text = textNode.textContent;

        if (!text.includes("$")) {
            return;
        }

        const span = document.createElement("span");
        const parts = text.split(/(\$[^\$]+\$)/g);

        parts.forEach((part) => {
            if (part.startsWith("$") && part.endsWith("$")) {
                const formula = part.slice(1, -1);
                const formulaSpan = document.createElement("span");

                try {
                    katex.render(formula, formulaSpan, { throwOnError: false });
                    span.appendChild(formulaSpan);
                } catch (e) {
                    span.appendChild(document.createTextNode(part));
                }
            } else {
                span.appendChild(document.createTextNode(part));
            }
        });

        textNode.parentNode.replaceChild(span, textNode);
    });
});
