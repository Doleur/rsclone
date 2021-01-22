import { arrLevel, currLevel } from './healthbar.js'

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: false,
  centeredSlides: true,
  initialSlide: (currLevel - 1),
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

function newLevelSlide () {
  swiper.appendSlide(`<div class="swiper-slide" data-level=${arrLevel[arrLevel.length - 1]} >Level ${arrLevel[arrLevel.length - 1]} </div>`)
  swiper.update()
}

function newItemArrSlides () {
  const isCurrLevel = arrLevel.includes(currLevel)
  if (!isCurrLevel) {
    arrLevel.push(currLevel)
    console.log(arrLevel)
    newLevelSlide()
  }
}

export { newLevelSlide, newItemArrSlides }
