// const navigation = document.querySelector('.navigation')

// navigation.addEventListener('click', ()=> {
//     console.log('navigation clicked')
// })

// let body = document.querySelector('body')

var latestKnownScrollY = 0;

function onScroll() {
	latestKnownScrollY = window.scrollY;
}

console.log(latestKnownScrollY)