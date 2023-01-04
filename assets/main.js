const load =document.querySelector('.main .table-game .options .load')
const initGame = document.querySelector('.main .init-game')
const overlayInitGame = document.querySelector('.main .overlayInitgame')

load.addEventListener('click', () =>{
    initGame.classList.add('newGame')
    overlayInitGame.classList.add('visible')
    // modalRound.classList.remove('openRound')
    // modalRound.classList.add('openRound')
    
})