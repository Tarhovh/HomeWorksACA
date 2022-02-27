// Ex 1

let div = document.createElement('div')
let ul = document.createElement('ul')

document.body.append(div)
div.append(ul)

async function filmList(films){

    let url = 'https://ghibliapi.herokuapp.com/films';
    let response = await fetch(url);
    
    let commits = await response.json();

    console.log(commits)

    for (let key in commits) {
        let li = document.createElement('li')
        ul.appendChild(li)
        
        li.textContent = `Title: ${commits[key].title}; 
                        ::Release Date: ${commits[key].release_date};
                        ::Director: ${commits[key].director};
                        ::Decription: ${commits[key].description}
                        `

        li.style.color = 'blue'
    }
    
    }
    
    filmList();