const $win = window
const $cityImg = document.getElementById('city-img')
const $citySelector = document.getElementById('city-selector')
const $navMenu = document.getElementById('nav-menu')
const $burgerButton = document.getElementById('burger-button')

setTimeout( () => fetch('//geoip.nekudo.com/api')
		.then( response =>  response.json() )
		.then( data =>  changeCity(data) )
		,0)
// 
$win.addEventListener('click', (event) => {
	if ( !event.target.classList.value.includes('hamburger')) {
		if ($navMenu.classList.contains('in')) {
			const slideOut = event.path.find( (el) => (el == $navMenu) )
			if ( ! slideOut ) $burgerButton.click()
		}
	}
})

$citySelector.addEventListener('change', (event) => {
	changeCity(event.target.value)
})

function changeCity(city) {
	console.log(city)
	if (typeof city === 'object') {
		city = getCity(city)
	}
	
	if ($cityImg.classList.contains('in') ) {
		$cityImg.classList.remove('in')
	}

	setTimeout( () => {
		$cityImg.style.backgroundImage = `url("../images/bg_${city.toLowerCase()}.png")`
		$cityImg.classList.add('in')	
		$citySelector.value = city.toLowerCase()
	}, 500)
}

function getCity(data) {
	switch (data.city) {
		case 'valdivia':
			return city
		default:
			return 'santiago'
	}
	

    // document.write("City: ", data.city);
    // document.write("Country: ", data.country.name);
    // document.write("Latitude: ", data.location.latitude);
    // document.write("Longitude: ", data.location.longitude)
}








// $cityImg.onload = function () {
// 	this.orientation = 'landscape'
// 	if (window.matchMedia("(orientation: portrait)").matches) {
// 		this.orientation = 'portrait'
// 	}

// 	this.imageRatio = this.width / this.height
// 	this.screenRatio = screen.width / screen.height


// 	if ( this.orientation == 'landscape' && (this.imageRatio < this.screenRatio) ) {
// 		$cityImg.style.width = "100vw"
// 		$cityImg.style.height = 'initial'
// 	}
//   // alert(`pictureW: ${this.width}, pcitureH: ${this.height}, screenX: ${screen.width}, screenY: ${screen.height}`);



// }