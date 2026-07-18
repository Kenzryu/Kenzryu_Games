console.log("Kenzryu Games Website Loaded");
alert("JavaScript berhasil dimuat!");
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

    
});
});
