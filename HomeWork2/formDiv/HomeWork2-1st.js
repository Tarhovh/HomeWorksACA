let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email')
let Birthday = document.querySelector('#birthday')
let Gender = document.querySelectorAll('input[name=Gender]');

let address = document.querySelector('#address')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let country = document.querySelector('#country')
let image = document.querySelector("#image")
let img = document.querySelector("#img")

let form = document.querySelector('form')
let input = document.querySelectorAll('input')

const submit = document.querySelector("#submit")
let dataFields = document.querySelectorAll(".ft_tbl_meta")
let button = document.querySelector('#submit');
let data = document.querySelector('.data')
let btn = document.querySelector('input[type=button]');

function showData(event) {

    for (let i = 0; i < dataFields.length; i++) {
        switch (i) {
            case (0) : dataFields[i].textContent =  name.value; break;
            case (1) : dataFields[i].textContent = phone.value; break;
            case (2) : dataFields[i].textContent = email.value; break;

            case (3) : dataFields[i].textContent =  Birthday.value; break;


        
            case (4) : 
            for (let z=0; z<Gender.length; z++) {
                if (Gender[z].type === 'radio' && Gender[z].checked) {
            dataFields[i].textContent = Gender[z].value; 
                }
            }
            break;
            
            case (5) : dataFields[i].textContent = address.value; break;
            case (6) : dataFields[i].textContent = city.value; break;
            case (7) : dataFields[i].textContent = state.value; break;
            case (8) : dataFields[i].textContent = country.value; break;
        };

        event.preventDefault();
        form.style.display = 'none'
        data.style.visibility = "visible"
    };
    
};

form.addEventListener('submit', showData, false);

btn.addEventListener('click', (e)=>{
    form.style.display = 'block'
})


image.addEventListener('change', ()=> {
    const [file] = image.files;
     if(file) {
        img.src = URL.createObjectURL(file);
     }  
     
});

// let storage = function () {

//     for (i=0; i<input.length; i++) {

// if (sessionStorage.getItem("autosave")) {
// {
//     // Restore the contents of the text field
//     input.value = sessionStorage.getItem("autosave");
    
//   }
  
//   // Listen for changes in the text field

//   for (i=0; i<input.length; i++)
//  input.addEventListener("change", function() {
//     // And save the results into the session storage object
//     sessionStorage.setItem("autosave", input.values);
//   });
// }
// }

// }




