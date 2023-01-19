const select_simbols = document.querySelectorAll('.main .table-options .btns')
const table_game = document.getElementById("table-game")
const game_cpu = document.getElementById("game_cpu")
const game_player = document.getElementById("game_player")
const overlayInitGame = document.getElementById("overlayInitgame")
const load = document.getElementById("load")
const takeRound = document.getElementById("take-round")
const btn_quit = document.getElementById("quit")
const btn_next = document.getElementById("next")
const initGame = document.getElementById(("init"))
const cellElements = document.querySelectorAll('[data-cell]')
const playerTurn = document.getElementById("player-turn")
const x_class = 'equis'
const circle_class = 'zero'
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let circleTurn = false;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})


function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class
    console.log(currentClass)
    placeMark(cell, currentClass)


    if (checkWin(currentClass)) {
        endGame(false)
    }
    swapTurns()

}


function endGame(draw) {
    if (draw) {

    } else {
        takeRound.classList.add('openRound')
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function playTurn() {
    const turnEl = document.getElementById('player-turn');

    turnEl.innerHTML = `<svg class="gameplay__turn-icon">
											<use xlink:href="./assets/images/icon-${
        circleTurn ? circle_class : x_class
    }-turn-solid.svg#icon-${
        circleTurn ? circle_class : x_class
    }-turn-solid"></use>
											</svg> &nbsp; TURN`;
}

// assets/images/icon-equis-solid.svg

function swapTurns() {
    circleTurn = !circleTurn
    playTurn()


}


function checkWin(currentClass) {
    return winning_combinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

btn_quit.addEventListener('click', () => {
    location.reload()
})


load.addEventListener('click', () => {
    takeRound.classList.add('openRound')

})

game_cpu.addEventListener('click', () => {
    table_game.classList.add('newGame')
    overlayInitGame.classList.add('visible')

})

game_player.addEventListener('click', () => {
    table_game.classList.add('newGame')
    overlayInitGame.classList.add('visible')

})

for (let i = 0; i < select_simbols.length; i++) {
    const btns = select_simbols[i];

    btns.addEventListener('click', () => {
        select_simbols.forEach(item => item.classList.remove('selected'))

        btns.classList.add('selected')
    })

}

