
const form = document.querySelector('form')
const button = document.querySelector('#submit');
const cardContainer = document.querySelector('.card-container')

const cardNumberInput = document.querySelector('.card-number-input')
const CardNumber = document.querySelector('.card-number-box')

cardNumberInput.addEventListener('input', ()=> {
      CardNumber.innerText = cardNumberInput.value        
    } )

const cardHolderInput = document.querySelector('.card-holder-input')
const cardHolder = document.querySelector('.card-holder-name')

cardHolderInput.addEventListener('input', ()=> {
    cardHolder.innerText = cardHolderInput.value
})

const monthInput = document.querySelector('.month-input')
const expMonth = document.querySelector('.exp-month')

monthInput.addEventListener('input', ()=> {
    expMonth.innerText = monthInput.value
})

const yearInput = document.querySelector('.year-input')
const expYear = document.querySelector('.exp-year')

yearInput.addEventListener('input', ()=> {
    expYear.innerText = yearInput.value
})


const ccvInput = document.querySelector('.cvv-input')
const ccvBox = document.querySelector('.cvv-box')
const front = document.querySelector('.front')
const back = document.querySelector('.back')

ccvInput.addEventListener('mouseenter', ()=> {

    front.style.transform = 'perspective(1000px) rotateY(180deg)';
    front.style.transition = 'transform 1s ease-out';
    back.style.transform = 'perspective(1000px) rotateY(360deg)';
    back.style.transition = 'transform 1s ease-out';
})

ccvInput.addEventListener('mouseleave', ()=> {

    front.style.transform = 'perspective(1000px) rotateY(0deg)';
    front.style.transition = 'transform 1s ease-out';
    back.style.transform = 'perspective(1000px) rotateY(180deg)';
    back.style.transition = 'transform 1s ease-out';
})


ccvInput.addEventListener('input', ()=> {
    ccvBox.innerText = ccvInput.value
})

front.addEventListener('mouseenter', ()=> {

    front.style.transform = 'perspective(1000px) rotateY(180deg)';
    front.style.transition = 'transform 1s ease-out';
    back.style.transform = 'perspective(1000px) rotateY(360deg)';
    back.style.transition = 'transform 1s ease-out';
})

back.addEventListener('mouseleave', ()=> {

    front.style.transform = 'perspective(1000px) rotateY(0deg)';
    front.style.transition = 'transform 1s ease-out';
    back.style.transform = 'perspective(1000px) rotateY(180deg)';
    back.style.transition = 'transform 1s ease-out';
})


function showData(event) {

    if(cardNumberInput.validity.valid) {

    form.style.display = 'none'
    }
}

button.addEventListener('click', showData, false);


cardContainer.addEventListener('click', ()=> {
    form.style.display = 'block'
})