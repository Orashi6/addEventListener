// let body  = document.querySelector('body')
// let inputN = document.getElementById('number')
// let btn = document.querySelector('.send')
// let minus = document.querySelector('.min')
// let plus = document.querySelector('.max')
// let h1 = document.querySelector('h1')
// let color  = document.querySelector('.color')


// btn.addEventListener('click', () => {
//     let inpvalue = inputN.value
//     h1.textContent = inpvalue
//     inputN.value= ''
    
// })



// btn.addEventListener('click', () => {
//     let inputValue = Number(inputN)
//     h1.innerHTML = `${inputValue}`
//     console.log(inputValue);
    
// } )
// let btn = document.querySelector('min')
// let inputs = document.querySelector('.input')
// let body = document.querySelector('body')
// btn.innerHTML = 'bos mani'

// inputs.addEventListener('change', () => {

//     let inputvalue = inputs.value
//     console.log(inputvalue);
//     body.style.backgroundColor = inputvalue

// })

// btn.addEventListener('click', () => {
//     let text = document.querySelector('.text')
//     let qiymat = text.value
//     body.classList.toggle('dark')
//     let h1 = document.createElement('h1')
//     h1.textContent = qiymat
//     body.appendChild(h1)

//     console.log(text.value = ' ');


// })

let body = document.querySelector('body')
let inpText = document.querySelector('.number')
let inpColor = document.querySelector('.color')
let btnPlus = document.querySelector('.max')
let btn = document.querySelector('.send')
let btnMinus = document.querySelector('.min')
let h1 = document.querySelector('h1')


btn.addEventListener('click', () => {
    let inpvalue = inpText.value
    h1.textContent = inpvalue
    inpText.value = ''  
})


btnPlus.addEventListener('click', () => {
    let currentVal = parseInt(h1.textContent) || 0  
    h1.textContent = currentVal + 1
})


btnMinus.addEventListener('click', () => {
    let currentVal = parseInt(h1.textContent) || 0  
    h1.textContent = currentVal - 1
})

inpColor.addEventListener('change', () => {
    let col = inpColor.value
    h1.style.color = `${col}`
})