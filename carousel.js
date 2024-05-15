

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const spacer = document.getElementById("carouselSpacer")


function updateCarousel() {
  let carouselWidth = slidesContainer.scrollWidth

let carouselY =  slidesContainer.getBoundingClientRect().top + window.scrollY
let carouselBottom = carouselY + carouselWidth
let carouselHeight = carouselBottom - carouselY
spacer.style.height = carouselHeight + "px"

const spacerHeight = spacer.offsetHeight
const spacerY = spacer.getBoundingClientRect().top + window.scrollY



  console.log("scroll - " + slidesContainer.scrollLeft);


  console.log(window.scrollY + " " + spacerY + " " + spacerHeight )
  
  if(window.scrollY >= spacerY && window.scrollY <= spacerY + spacerHeight){
    // slidesContainer.scrollLeft = window.scrollY - spacerY
    slidesContainer.scrollLeft = window.scrollY - spacerY
  
  }
  if(window.scrollY < spacerY){
    slidesContainer.scrollLeft = 0
  }
}


if(!(window.screen.availWidth <= 1050)){

  window.addEventListener("scroll", updateCarousel)
  
  window.addEventListener("DOMContentLoaded", updateCarousel)

}

