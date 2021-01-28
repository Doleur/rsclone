import { gameStats } from './constants.js'
import { arrLevel } from './healthbar.js'

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: false,
  centeredSlides: true,
  initialSlide: (gameStats.currLevel - 1),
  observer: true,
  observerParents: true,
  observeSlideChildren: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

function newLevelSlide() {
  swiper.appendSlide(`<div class="swiper-slide" data-level=${arrLevel[arrLevel.length - 1]} >
                        <div class = "swiper-slide-container">
                          <span class = "swiper-slide-text"> Level ${arrLevel[arrLevel.length - 1]} </span>
                        </div>
                      </div>`)
}

function newItemArrSlides() {
  const isCurrLevel = arrLevel.includes(gameStats.currLevel)
  if (!isCurrLevel) {
    arrLevel.push(gameStats.currLevel)
    newLevelSlide()
  }
  setTimeout(clickNextButton, 50)
}

function clickNextButton () {
  const buttonNext = document.querySelector('.swiper-button-next')
  buttonNext.click()
}

function clickPrevButton () {
  const buttonPrev = document.querySelector('.swiper-button-prev')
  buttonPrev.click()
}

export { newLevelSlide, newItemArrSlides, clickPrevButton }
