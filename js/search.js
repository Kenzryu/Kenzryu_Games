

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

let selected = -1;

input.addEventListener("input", () => {

    const value = input.value.toLowerCase().trim();

    results.innerHTML = "";
    selected = -1;

    if (value === "") {
        results.style.display = "none";
        return;
    }

   const match = window.games.filter(game =>
    game.name.toLowerCase().includes(value)
);
    );

    if (match.length === 0) {

        results.innerHTML =
            '<div class="search-empty">No game found</div>';

        results.style.display = "block";

        return;
    }

    match.forEach(game => {

        const item = document.createElement("div");

        item.className = "search-item";

        item.textContent = "🔍 " + game.name;

        item.onclick = () => {
            window.location.href = game.url;
        };

        results.appendChild(item);

    });

    results.style.display = "block";

});
