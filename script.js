const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const nav = document.querySelector('.navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('move');
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('move');
    })
}


const opensporductbuttons = document.querySelectorAll('[data-sproduct-target]')
const closesporductbuttons = document.querySelectorAll('[data-close-button]')
const overlay = document.querySelector('.overlay')

opensporductbuttons.forEach(div =>{
    div.addEventListener('click',() =>{
        const sproduct = document.querySelector(div.dataset.sproductTarget)
        openproduct(sproduct)
    })
})

closesporductbuttons.forEach(div =>{
    div.addEventListener('click',() =>{
        const sproduct = div.closest('.sproduct ')
        closeproduct(sproduct)
    })
})

function openproduct(sproduct){
    if (sproduct == null) return;
    overlay.classList.add('on');
    sproduct.classList.add('on');
    
}
function closeproduct(sproduct){
    if (sproduct == null) return;
    overlay.classList.remove('on');
    sproduct.classList.remove('on');
    
}



