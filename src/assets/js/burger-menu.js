const menuIcon = document.querySelector('.menu__icon')
const shopContainer = document.querySelector('.shop-container')
const overlay = document.querySelector('.overlay')

function menuToggle () {
  if (!menuIcon.classList.contains('active')) {
    menuIcon.classList.add('active')
    shopContainer.classList.add('active')
    document.body.classList.add('hidden')
    overlay.classList.add('active')
  } else {
    close()
  }
}

function close () {
  menuIcon.classList.remove('active')
  shopContainer.classList.remove('active')
  document.body.classList.remove('hidden')
  overlay.classList.remove('active')
}

menuIcon.addEventListener('click', menuToggle)
overlay.addEventListener('click', (e) => {
  const isOverlay = e.target.closest('.overlay')
  if (isOverlay) {
    close()
  }
})
