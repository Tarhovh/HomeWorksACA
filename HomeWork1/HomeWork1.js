let input = document.querySelector('input')
let outerDiv = document.querySelector('#outerDiv')
let innerDIV = document.querySelector('#innerDiv')
let redBtn = document.querySelector('#redBtn')
let greenBtn = document.querySelector('#greenBtn')
let boldBtn = document.querySelector('#boldBtn')
let emBtn = document.querySelector('#emBtn')
let strokeBtn = document.querySelector('#strokeBtn')
let ucBtn = document.querySelector('#ucBtn')
let underlinedBtn = document.querySelector('#underlinedBtn')
let button = document.querySelectorAll('button')

let toggle = false

input.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
    innerDIV.textContent = input.value 
    }
})

redBtn.addEventListener('click', ()=>{
    if (toggle) {
    innerDIV.style.color = 'red'
    }
    else {
        innerDIV.style.color = 'black'
    }
    toggle = !toggle
} )

greenBtn.addEventListener('click', ()=>{
    if (toggle) {
    innerDIV.style.color = 'green'
    }
    else {
        innerDIV.style.color = 'black'
    }
    toggle = !toggle
} )

boldBtn.addEventListener('click', ()=> {
   if (toggle) {
    innerDIV.style.fontWeight = 'bold'
   }
   else {
       innerDIV.style.fontWeight = 'normal'
       }  
       
       toggle = !toggle
})

emBtn.addEventListener('click', ()=>{
    if (toggle) {
    innerDIV.style.fontStyle = 'italic'
    }
    else {
        innerDIV.style.fontStyle = 'normal'
    }
    toggle = !toggle
})

strokeBtn.addEventListener('click', (e)=> {
    if (toggle) {
    innerDIV.style.textDecoration = 'line-through'
    }
    else {
        innerDIV.style.textDecoration = 'none'  
    }
    toggle = !toggle
})

ucBtn.addEventListener('click', ()=> {
    if (toggle) {
        innerDIV.style.textTransform = "uppercase";

    }
    else {
        innerDIV.style.textTransform = "lowercase" 
    }
    toggle = !toggle

})

underlinedBtn.addEventListener('click', ()=> {
    if (toggle) {
    innerDIV.style.textDecoration = 'underline'
    }
    else {
        innerDIV.style.textDecoration = 'none'
    }

    toggle = !toggle
});

let clicked = false

button.forEach((button) => {
button.addEventListener ('click', ()=> {

   if (clicked) {
    button.style.backgroundColor = "yellow";
}
    else {
        button.style.backgroundColor = ""
    }

    clicked = !clicked

});
})

// other variant

// button.forEach((button) => {
//     button.addEventListener ('click', (e)=> {
    
//        if (e.target === redBtn) {
//         innerDIV.style.color = 'red'
//     }
//         else if (e.target === greenBtn) {
//             innerDIV.style.color = 'green'
//         }

//         else if (e.target === boldBtn) {
//             innerDIV.style.fontWeight = 'bold'
//         }

//         else if (e.target === emBtn) {
//             innerDIV.style.fontStyle = 'italic'
//         }

//         else if (e.target === strokeBtn) {
//             innerDIV.style.textDecoration = 'line-through'
//         }

//         else if (e.target === ucBtn) {
//             innerDIV.style.textTransform = "uppercase";
//         }

//         else if (e.target === underlinedBtn) {
//             innerDIV.style.textDecoration = 'underline'
//         }

//         toggle = !toggle
    
//     });
//     })