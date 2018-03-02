const $win = window
const $cityImg = document.getElementById('city-img')
const $citySelector = document.getElementById('city-selector')
const $navMenu = document.getElementById('nav-menu')
const $burgerButton = document.getElementById('burger-button')
const $divGauge = document.getElementById('gauge')

/*************************************************/
/**********     LLAMADAS ASINCROINICAS   *********/
/*************************************************/

/**
	Ejecuta una consulta a api de geolicalización para obtener ciudad de donde se accede a sitio.
**/
setTimeout( () => fetch('//geoip.nekudo.com/api')
		.then( response =>  response.json() )
		.then( data =>  changeCity(data) )
		,0)

/**
	Ejecuta la construcción de gauge indicador de estado del aire.
**/
setTimeout( () => initialize() ,0)


/**************************************/
/**********     LISTENERS     *********/
/**************************************/

/**
	Cierra nav de menu, al hacer click fuera de el.
**/
$win.addEventListener('click', (event) => {
	if ( !event.target.classList.value.includes('hamburger')) {
		if ($navMenu.classList.contains('in')) {
			const slideOut = event.path.find( (el) => (el == $navMenu) )
			if ( ! slideOut ) $burgerButton.click()
		}
	}
})

/**
	Ejecuta el cambio de ciudad de forma manual por el usuario.
**/
$citySelector.addEventListener('change', (event) => {
	changeCity(event.target.value)
})


/**************************************/
/**********     FUNCIONES     *********/
/**************************************/

/**
	Ejecuta el cambio de background, dependiendo de la ciudad seleccionada.
**/
function changeCity(city) {
	if (typeof city === 'object') {
		city = getCity(city)
	}
	
	if ($cityImg.classList.contains('in') ) {
		$cityImg.classList.remove('in')
	}

	setTimeout( () => {
		$cityImg.style.backgroundImage = `url("images/bg_${city.toLowerCase()}.png")`
		$cityImg.classList.add('in')	
		$citySelector.value = city.toLowerCase()
	}, 500)
}

/**
	Retorna la ciudad buscada por geolocalización si existe en nuestro listado. Sino, devuelve por defecto santiago.
**/
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


