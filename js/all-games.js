const games = [
    {
        name: "Lustful Sin",
        date: "2026-08-12",
        image: "images/lustful-sin/cover.webp",
        url: "games/lustful-sin/index.html"
    },
    {
        name: "Cinderella's Glass Collar",
        date: "2026-08-11",
        image: "images/Cinderella’s Glass Collar/cover.webp",
        url: "games/Cinderella’s Glass Collar/index.html"
    },
    {
        name: "Attack on Survey Corps",
        date: "2026-08-10",
        image: "images/Attack-on-Survey-Corps/cover.webp",
        url: "games/Attack-on-Survey-Corps/index.html"
    }

    // Tambahkan game lainnya di sini
];


const gamesContainer = document.getElementById("allGames");
const pagination = document.getElementById("pagination");

const gamesPerPage = 10;

let currentPage = 1;


// Urutkan game dari tanggal terbaru
games.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});


function displayGames() {

    gamesContainer.innerHTML = "";

    const start = (currentPage - 1) * gamesPerPage;
    const end = start + gamesPerPage;

    const currentGames = games.slice(start, end);


    currentGames.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `
            <a href="${game.url}">
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
            </a>
            <p class="game-date">${formatDate(game.date)}</p>
        `;

        gamesContainer.appendChild(card);

    });

}


function createPagination() {

    pagination.innerHTML = "";

    const totalPages = Math.ceil(games.length / gamesPerPage);


    if (totalPages <= 1) {
        return;
    }


    // Previous
    if (currentPage > 1) {

        const prev = document.createElement("button");

        prev.textContent = "← Prev";

        prev.onclick = () => {

            currentPage--;

            displayGames();
            createPagination();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };

        pagination.appendChild(prev);

    }


    // Nomor halaman
    for (let i = 1; i <= totalPages; i++) {

        const button = document.createElement("button");

        button.textContent = i;

        if (i === currentPage) {

            button.classList.add("active");

        }

        button.onclick = () => {

            currentPage = i;

            displayGames();
            createPagination();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };

        pagination.appendChild(button);

    }


    // Next
    if (currentPage < totalPages) {

        const next = document.createElement("button");

        next.textContent = "Next →";

        next.onclick = () => {

            currentPage++;

            displayGames();
            createPagination();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };

        pagination.appendChild(next);

    }

}


function formatDate(date) {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return new Date(date).toLocaleDateString("en-US", options);

}


// Jalankan
displayGames();
createPagination();
