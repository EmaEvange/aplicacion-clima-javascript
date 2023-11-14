let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'fe98ec24d8c8c3045ec7ffc46da0e538'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click',() => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperature = response.main.temp
    const descripcion = response.weather[0].description
    const humedad = response.main.humidity
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperature-difKelvin)}°C`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `http://openweathermap.org/img/wn/${icono}@2x.png`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es ${humedad}%`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es del ${descripcion}`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)
    
}



