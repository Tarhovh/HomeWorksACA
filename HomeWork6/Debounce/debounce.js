const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3')
const button = document.querySelector('#button');
const input = document.querySelector('input')


function debounce(fn, ms){
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => { fn.apply(this, args); }, ms);
    };
  }

 
 function send(){

    const newP = document.createElement("p")
    let text = document.createTextNode("I was sent");
    newP.appendChild(text)
    document.querySelector('.container').appendChild(newP)

  }
  
  const processChange = debounce(() => send(),2000);


  button.addEventListener('click', processChange)

  let count = 0;
 
  button.addEventListener('click', function debounce (event) {

    event.preventDefault()

    count++

    h2.textContent = ` (${count}):${event.type}`;
})
