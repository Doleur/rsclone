import createTagElement from './creatElement.js'
import { theme } from './dataTheme.js'

function swapTheme() {
  const textTheme = document.querySelectorAll('.text_theme')
  const shopHero = document.querySelectorAll('.shop_hero')
  const buyButton = document.querySelectorAll('.buyButton')
  const shop = document.querySelector('.shop')

  textTheme.forEach(element => element.style.color = theme[1].textColor)
  shopHero.forEach(element => element.style.backgroundColor = theme[1].shopHeroColor)
  buyButton.forEach(element => {
    element.style.backgroundImage = theme[1].buyButtonColor
  })
  shop.style.background = theme[1].shopColor
}

const them2 = createTagElement('div', 'theme2', 'Theme 2', document.querySelector('body'), ['style', `position:absolute; right:20px; top:50%; background-color:${theme[1].shopHeroColor};color:#fff;font-size:25px`])
them2.addEventListener('click', swapTheme)