const games = window.games;

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
