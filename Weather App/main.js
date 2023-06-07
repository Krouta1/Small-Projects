import './style.css'
import { getWeather } from './weather'
import { ICON_MAP } from './iconMap'

navigator.geolocation.getCurrentPosition(positionSuccess,positionError)

function positionSuccess({coords}){
    getWeather(
        coords.latitude,
        coords.longitude,
        Intl.DateTimeFormat().resolvedOptions().timeZone
        )
        .then(renderWeather).catch(e=>{ // Intl...is getting timezone
        console.error(e)
        alert('Hups something went wrong on wether getting')
    })
}

function positionError(){
    alert("Please allow to use your location and refresh.")
}


function renderWeather({current,daily,hourly}){
    renderCurrentWeather(current)
    renderDailyWeather(daily)
    renderHourlyWeather(hourly)
}


function setValue(selector, value, { parent = document } = {}) {// function that is setting values to selectors
    parent.querySelector(`[data-${selector}]`).textContent = value // same as this document.querySelector("[data-current-temp]").textContent = current.currentTemp
}
  
  
function getIconUrl(iconCode) {   
    return `icons/${ICON_MAP.get(iconCode)}.svg` // ./iconMap it is explained there
}
  
const currentIcon = document.querySelector("[data-current-icon]")
    function renderCurrentWeather(current) {
        currentIcon.src = getIconUrl(current.iconCode)
        setValue("current-temp", current.currentTemp)
        setValue("current-high", current.highTemp)
        setValue("current-low", current.lowTemp)
        setValue("current-wind", current.windSpeed)
  }

const DAY_FORMATTER =  new Intl.DateTimeFormat(undefined, {weekday:"long"}) // returning day portion of my weekday
const dailySetcion = document.querySelector("[data-day-section]")
const dayCardTemplate = document.getElementById("day-card-template")
function renderDailyWeather(daily){
    dailySetcion.innerHTML=""
    daily.forEach(day => { 
        const element = dayCardTemplate.content.cloneNode(true) // colone a tempalte
        setValue("temp",day.maxTemp,{parent: element})
        setValue("date",DAY_FORMATTER.format(day.timestamp),{parent: element})
        element.querySelector("[data-icon]").src = getIconUrl(day.iconCode) // setting icon
        dailySetcion.append(element)
    });
}


const HOUR_FORMATTER =  new Intl.DateTimeFormat(undefined, {hour:"numeric"}) // returns hour
const hourlySection = document.querySelector("[data-hourly-section]")
const hourCardTemplate = document.getElementById("hour-row-template")
function renderHourlyWeather(hourly){
    hourlySection.innerHTML= ""
    hourly.forEach(hour => { 
        const element = hourCardTemplate.content.cloneNode(true) // colone a tempalte
        setValue("temp",hour.temp,{parent: element})
        setValue("fl-temp",hour.feelsLike,{parent: element})
        setValue("wind",hour.windSpeed,{parent: element})
        setValue("precip",hour.precip,{parent: element})
        setValue("day",DAY_FORMATTER.format(hour.timestamp),{parent: element})
        setValue("time",HOUR_FORMATTER.format(hour.timestamp),{parent: element})
        element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode) // setting icon
        hourlySection.append(element)
    });
}