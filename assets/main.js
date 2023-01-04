const load = document.querySelector('.main .options .load')
const modalRound = document.querySelector('.main .take-round')
const overlay = document.querySelector('.main .overlay')

load.addEventListener('click', () =>{
    modalRound.classList.add('openRound')
    overlay.classList.add('visible')
    // modalRound.classList.remove('openRound')
    // modalRound.classList.add('openRound')
    
})