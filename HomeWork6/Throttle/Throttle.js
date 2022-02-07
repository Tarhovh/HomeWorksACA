const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3')
const button = document.querySelector('#button');
const input = document.querySelector('input')

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args)
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
         }, limit - (Date.now() - lastRan));
      }
    }
  }
  
  function send(limit){
  
    const newP = document.createElement("p")
    let text = document.createTextNode(`From second I will be sent in ${limit} ms`);
    newP.appendChild(text)
    document.querySelector('.container').appendChild(newP)
  
  }
  
  const processChange = throttle(() => send(5000),5000);
  
  input.addEventListener('input', processChange)
  
    let count = 0;
   
    input.addEventListener('input', (event) => {
    
        event.preventDefault()

        count++
  
        h2.innerText = input.innerText
  })