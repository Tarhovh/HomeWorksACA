// Ex 2

const select = document.getElementById('pet-select')

async function dogList(){

    let response = await fetch(`https://dog.ceo/api/breed/${select.options[select.selectedIndex].value}/images`);

    
    if (response.status == '200') {
        let json = await response.json();
        let img = document.createElement('img');

    for (let key in json.message) 
        {
            img.src = json.message[key];
            img.style = 'display:flex;width:500px';
            document.body.appendChild(img);
        }

        }
}

select.addEventListener('change', () => { 
    dogList();
})