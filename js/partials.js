document.addEventListener("DOMContentLoaded", () => {
    loadPartial("navbar", "/partials/navbar.html");
    loadPartial("footer", "/partials/footer.html");
});

function loadPartial(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Could not load ${url}`);
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}
