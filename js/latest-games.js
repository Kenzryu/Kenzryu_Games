const games = window.games;

const latestGamesContainer = document.getElementById("latestGames");

const latestGames = [...games]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);


latestGames.forEach(game => {

    const card = document.createElement("div");

    card.className = "game-card";

    card.innerHTML = `
        <a href="${game.url}">
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
        </a>
    `;

    latestGamesContainer.appendChild(card);

});
