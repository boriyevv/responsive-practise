let xmark = document.querySelector('.fa-xmark')
let bars = document.querySelector('.fa-bars')
let list = document.querySelector('.list')

bars.addEventListener('click', ()=>{
    list.style.display = 'flex'
    bars.style.display = 'none'
    xmark.style.display = 'inline-block'
})

xmark.addEventListener('click', ()=>{
    list.style.display = 'none'
    bars.style.display = 'inline-block'
    xmark.style.display = 'none'
})