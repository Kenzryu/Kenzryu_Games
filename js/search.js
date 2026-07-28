const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".game-card");

searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();

        if (name.includes(keyword)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
