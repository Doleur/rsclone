import createTagElement from './creatElement.js'

const wrapperGolds = document.querySelector('.wrapper-gold')

async function dropGold() {
  for (let i = 1; i < 6; i++) {
    const gold = createTagElement('div', `gold g${i}`, '', wrapperGolds)
    const numberGold = createTagElement('div', `goldNumber gN${i}`, '10g', wrapperGolds)
    gold.addEventListener('animationend', function() {
      gold.parentNode.removeChild(gold)
    })
    numberGold.addEventListener('animationend', function() {
      numberGold.parentNode.removeChild(numberGold)
    })
  }
}

export { dropGold }
