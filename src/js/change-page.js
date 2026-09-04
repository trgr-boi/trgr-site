function loadContent(page) {
    fetch("pages/" + page + ".html")
        .then((response) => {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return response.text();
        })
        .then((html) => {
            document.getElementById("content").innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading content:", error);
            document.getElementById("content").innerHTML =
                '<p class="start">Page not found.</p>';
        });
}

// Hash routing: #page-name -> pages/page-name.html
// Hash is the single source of truth. Handles initial load,
function loadFromHash() {
    const page = location.hash.slice(1) || "home";
    loadContent(page);
}

window.onload = loadFromHash;
window.addEventListener("hashchange", loadFromHash);
