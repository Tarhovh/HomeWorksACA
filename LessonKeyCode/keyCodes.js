// addEventListener for any events and put them into an array.
// Remember to show the numbered list of events on display.
//(do not forget, scroll and resize)

const container = document.querySelector('.container')
const keyCode = document.querySelector('.keyCode')

let newUl = document.createElement('ul');
let newUl2 = document.createElement('ul');

    container.appendChild(newUl);
    keyCode.appendChild(newUl2);

let events = ['keypress', 'keydown', 'keyup', 
'mouseenter', 'mouseleave', 'resize', 'mousedown', 'mouseup', 'click',
'dblclick',  'focus', 'contextmenu', 'DOMContentLoaded', 'DOMContentResized', 'copy', 'error']

for (i=0; i<events.length; i++)

document.addEventListener(events[i], function(event){

    let newLi = document.createElement('li');
        newUl.appendChild(newLi)

    newLi.innerHTML = `eventType === ${event.type}`;

    let newLi2 = document.createElement('li')
        newUl2.appendChild(newLi2);

    if (event.code !== undefined) 

        newLi2.innerHTML = `eventCode === ${event.code}`;

    else 
        newLi2.textContent = `Not a KeyboardEvent`
})

                    // 2. Coordinates

const screenLog = document.querySelector('.screen-log');
const newOl = document.createElement('ol');

    screenLog.appendChild(newOl)

let events2 = ['mouseenter', 'mouseleave', 'mousedown', 'mouseup', 
'dblclick', 'click']

for (i=0; i<events2.length; i++)

document.addEventListener(events2[i], function(e){

    let newLi3 = document.createElement('li');
        newOl.appendChild(newLi3)

    newLi3.innerText = 
    `${e.type}
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
})

                // 3. Scroll Count

const sticky = document.querySelector('.sticky')
let count = 0;

document.addEventListener('scroll', (event) => {

    count++

    sticky.textContent = ` (${count}):${event.type}`;
})

                // 4. Resize Event

window.addEventListener('resize', ()=> {
    let newLi = document.createElement('li');
        newUl.appendChild(newLi);

    newLi.textContent = 'resize'
})

                // 5. Colomns styling

document.addEventListener('mouseenter',()=>{
    newUl.style.color = 'green'
    newUl2.style.color = 'blue'
    newOl.style.color = 'gray'
})

document.addEventListener('mouseleave',()=>{
    newUl.style.color = 'red'
    newUl2.style.color = 'red'
    newOl.style.color = 'red'
})