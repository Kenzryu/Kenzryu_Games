const searchInput = document.getElementById("searchInput");

const games = document.querySelectorAll(".game-card");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    games.forEach(game => {

        const name = game.dataset.name.toLowerCase();

        if (name.includes(keyword)) {

            game.style.display = "block";

        } else {

            game.style.display = "none";

        }

    });

});
