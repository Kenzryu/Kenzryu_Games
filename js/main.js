console.log("Kenzryu Games Website Loaded");

/* ============================
   LIGHTBOX
============================ */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", function(){

        lightbox.style.display = "flex";

        lightboxImg.src = this.src;

        lightboxImg.alt = this.alt;

    });

});

closeLightbox.addEventListener("click", function(){

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

// ===========================
// BACK TO TOP
// ===========================

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
           }
                    
});
});
/* ===========================
   SEARCH GAME
=========================== */

const searchInput = document.getElementById("searchGame");
const searchResult = document.getElementById("searchResult");

const games = [

    {
        name: "Lustful Sin",
        url: "index.html"
    }

];

searchInput.addEventListener("input", function(){

    const keyword = this.value.toLowerCase();

    searchResult.innerHTML = "";

    if(keyword === ""){

        searchResult.style.display = "none";

        return;

    }

    const result = games.filter(game =>
        game.name.toLowerCase().includes(keyword)
    );

    if(result.length === 0){

        searchResult.innerHTML =
        "<a>Tidak ada game ditemukan</a>";

    }else{

        result.forEach(game=>{

            searchResult.innerHTML +=
            `<a href="${game.url}">${game.name}</a>`;

        });

    }

    searchResult.style.display = "block";

});

document.addEventListener("click", function(e){

    if(!document.querySelector(".search-box").contains(e.target)){

        searchResult.style.display = "none";

    }


    
});
