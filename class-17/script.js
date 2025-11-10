const searchField = document.querySelector('.searchField');
const form = document.querySelector('form');
const temperatureField =document.querySelector('.temp');
const cityField = document.querySelector('.time_location p');
const dateField = document.querySelector('.time_location span');
const emojiField = document.querySelector('.weather_condition img');
const weatherField = document.querySelector('.weather_condition span');
let target = 'Mumbai'

form.addEventListener('submit', search)

function search(e){
    e.preventDefault()
    target = searchField.value
    console.log(target)
    fetchData(target)
}

async function fetchData(target){
    const endpoint = `https://api.weatherapi.com/v1/current.json?key=8b394fe6d7cc400fa1e170306250511&q=${target}&aqi=no`
    const response =  await fetch(endpoint)
    const data = await response.json()
    console.log(data)

   let currentTemp = data.current.temp_c
   let cityName = data.location.name
   let localTime = data.location.localtime
   let currentCondition = data.current.condition.text 
   let conditionLogo = data.current.condition.icon


   
   updateWeatherData(currentTemp, cityName, localTime, currentCondition, conditionLogo)
}

function updateWeatherData(currTemp, cityName, time, currentCondition, conditionLogo){
    temperatureField.innerText = currTemp
    cityField.innerText = cityName
    dateField.innerText = time
    weatherField.innerText = currentCondition
    emojiField.src = conditionLogo
}


