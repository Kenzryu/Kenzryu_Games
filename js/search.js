const games = [
    {
        name: "Lustful Sin",
        url: "games/lustful-sin/index.html"
    },
    {
        name: "Cinderella's Glass Collar",
        url: "games/Cinderella’s Glass Collar/index.html"
    },
    {
        name: "Attack on Survey Corps",
        url: "games/Attack-on-Survey-Corps/index.html"
    },
    {
        name: "My New Girlfriend",
        url: "games/My-New-Girlfriend/index.html"
    },
    {
        name: "Living with Alya",
        url: "games/Living-with-Alya/index.html"
    },
    {
        name: "Living with Chainsaw",
        url: "games/Living-with-Chainsaw/index.html"
    },
    {
        name: "Lewd Slayer Inn",
        url: "games/Lewd-Slayer-Inn/index.html"
    },
    {
        name: "Academy34",
        url: "games/Academy34/index.html"
    },
    {
        name: "Parallax",
        url: "games/Parallax/index.html"
    },
    {
        name: "He’s Just a Friend",
        url: "games/He’s-Just-a-Friend/index.html"
    },
    {
        name: "How I Fap",
        url: "games/How-I-Fap/index.html"
    },
    {
        name: "College of Mysteria",
        url: "games/College-of-Mysteria/index.html"
    },
    {
        name: "Isekai Chan!",
        url: "games/Isekai-Chan!/index.html"
    },
    {
        name: "Wife’s Dare – Reignited",
        url: "games/Wife’s-Dare – Reignited/index.html"
    }
];

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

    const match = games.filter(game =>
        game.name.toLowerCase().includes(value)
    );

    if (match.length === 0) {

        results.innerHTML = '<div class="search-empty">No game found</div>';

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

input.addEventListener("keydown", (e) => {

    const items = document.querySelectorAll(".search-item");

    if (!items.length) return;

    if (e.key === "ArrowDown") {

        selected++;

        if (selected >= items.length) selected = 0;

        update();

    }

    if (e.key === "ArrowUp") {

        selected--;

        if (selected < 0) selected = items.length - 1;

        update();

    }

    if (e.key === "Enter") {

        e.preventDefault();

        if (selected >= 0) {

            items[selected].click();

        } else {

            items[0].click();

        }

    }

});

function update() {

    document.querySelectorAll(".search-item").forEach((item, i) => {

        item.classList.toggle("active", i === selected);

    });

}

document.addEventListener("click", (e) => {

    if (!document.querySelector(".search-box").contains(e.target)) {

        results.style.display = "none";

    }

});
