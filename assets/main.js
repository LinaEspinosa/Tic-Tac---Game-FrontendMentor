const load =document.querySelector('.main .table-game .options .load')
const initGame = document.querySelector('.main .init-game')
const overlayInitGame = document.querySelector('.main .overlayInitgame')
const contentGame = document.getElementById('content-game')
const btnPick = document.getElementById('btn-pick')
const btnInactive = document.getElementById('btn-inactive')
const btnActive = document.getElementById('btn-active')
const btnsMark = document.querySelectorAll('.main .init-game .pick-player  .btn-simbols .pick-simbols .btns')
const switchBtn = document.getElementById('switch')

for (let i = 0; i < btnsMark.length; i++){
    const btns = btnsMark[i]
    
    btns.addEventListener('click', ()=>{
        btnsMark.forEach(item => item.classList.remove('selected'))
        
        btns.classList.add('selected')

    })
}

// let value = 1
// switchBtn.checked = 1

// switchBtn.addEventListener('change', (e) => {
//     console.log(switchBtn.checked);
//     if(switchBtn.checked){
        
//     }else{
//         switchBtn
//     }
// })

btnPick.addEventListener('click', (evt) => {
    // console.log('entro', evt)
    // if(btnInactive || btnActive){
    //     btnInactive.classList.add('btn-active')
    //     btnActive.classList.remove('btn-active') 
    //     btnActive.classList.add('btn-inactive')
    
    // }      
    
})



contentGame.addEventListener('click', (e) => {
    let target = e.target
    let dataset = target.dataset
    console.log('dataset', dataset)
    
    if(dataset && dataset.row){
        console.log('pos', dataset.row ,dataset.column)
    }
})
load.addEventListener('click', () =>{
    initGame.classList.add('newGame')
    overlayInitGame.classList.add('visible')
    // modalRound.classList.remove('openRound')
    // modalRound.classList.add('openRound')
    
})