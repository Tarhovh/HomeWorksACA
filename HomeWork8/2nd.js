// Ex 2

const select = document.getElementById('pet-select')

function dogList(){

select.addEventListener('change', async() => {

let response = await fetch(`https://dog.ceo/api/breed/${select.options[select.selectedIndex].value}/images`);

let json = await response.json();

for (let key in json.message) {
let img = document.createElement('img');
img.src = json.message[key];
img.style = 'display:flex;width:500px';

document.body.append(img);

}
})
}

dogList()