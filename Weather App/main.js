import './style.css'
import { getWeather } from './weather'
import { ICON_MAP } from './iconMap'

getWeather(10.09, 10.09, Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather).catch(e=>{
    console.error(e)
    alert('Hups something went wrong on wether getting')
})

function renderWeather({current,daily,hourly}){
    renderCurrentWeather(current)
    // renderDailyWeather(daily)
    // renderHourlyWeather(hourly)
}


function setValue(selector, value, { parent = document } = {}) {// function that is setting values to selectors
    parent.querySelector(`[data-${selector}]`).textContent = value // same as this document.querySelector("[data-current-temp]").textContent = current.currentTemp
}
  
  
function getIconUrl(iconCode) {   
    return `icons/${ICON_MAP.get(iconCode)}.svg`
}
  
const currentIcon = document.querySelector("[data-current-icon]")
    function renderCurrentWeather(current) {
        currentIcon.src = getIconUrl(current.iconCode)
        setValue("current-temp", current.currentTemp)
        setValue("current-high", current.highTemp)
        setValue("current-low", current.lowTemp)
        setValue("current-wind", current.windSpeed)
  }