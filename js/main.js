const board = document.querySelector("#board");
const colors = ['#FFEFD5', '#E6E6FA', '#F0FFFF', '#87CEFA', '#00FF7F', '#EEDD82']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        deleteColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomNumber(0, colors.length - 1)
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}`
}

function deleteColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = ``
}

function getRandomNumber(min, max) {
    const index = Math.floor(Math.random() * (max - min)) + min;
    return colors[index]
}