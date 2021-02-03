import { gameStats } from './constants.js'
import {audioPlay} from './setAudio.js'


let swiper

function createSlider() {
  swiper = new Swiper('.swiper-container', {
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
}

function newLevelSlide() {
  swiper.appendSlide(`<div class="swiper-slide" data-level=${gameStats.arrLevel[gameStats.arrLevel.length - 1]} >
                        <div class = "swiper-slide-container">
                          <span class = "swiper-slide-text"> Level ${gameStats.arrLevel[gameStats.arrLevel.length - 1]} </span>
                        </div>
                      </div>`)
}

function newItemArrSlides() {
  const isCurrLevel = gameStats.arrLevel.includes(gameStats.currLevel)
  if (!isCurrLevel) {
    gameStats.arrLevel.push(gameStats.currLevel)
    newLevelSlide()
    audioPlay('assets/audio/level_up_ding.mp3')
  }
  setTimeout(clickNextButton, 50)
}

function clickNextButton() {
  const buttonNext = document.querySelector('.swiper-button-next')
  buttonNext.click()
  audioPlay('assets/audio/click_1.mp3')
}

function clickPrevButton() {
  const buttonPrev = document.querySelector('.swiper-button-prev')
  buttonPrev.click()
  audioPlay('assets/audio/click_1.mp3')
}

export { createSlider, newLevelSlide, newItemArrSlides, clickPrevButton }
