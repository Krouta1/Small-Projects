import axios from "axios";

export function getWeather(lat, lon,timezone) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime",
    {
      params: {
        latitude: lat,
        longitude: lon,
        timezone,
      },
    }
  ).then(({data})=>{
    return{
        current: parseCurrentWeather(data),
        daily: parseCurrentDaily(data),
        hourly: parseCurrentHourly(data), 
    }
  });
}


function parseCurrentWeather({current_weather,daily}){
    const {
        temperature:currentTemp,
        windspeed: windSpeed, //destructing current_weather data from API
        weathercode:iconCode
    } = current_weather 

    const{                              //destructing daily data from API // first value in Array is what i want from API
        temperature_2m_max:[maxTemp],// destructing array temprature_2m_max same as maxTemp = daily.temprature_2m_max[0]
        temperature_2m_min:[minTemp],
        precipitation_sum:[precip],
    } = daily

    return{ //returning my new object
        currentTemp: Math.round(currentTemp),
        windSpeed: Math.round(windSpeed),
        highTemp: Math.round(maxTemp), // rounded the data to be nice you know :)
        lowTemp: Math.round(minTemp),
        precip: Math.round(precip,2),
        iconCode,
    }
}

function parseCurrentDaily({daily}){
    return daily.time.map((time,index)=>{  // daily is obj a can access time array and map over it
        return{
            timestamp: time * 1000, // convert to milisec cuz JS needs it :/ API is in sec
            iconCode: daily.weathercode[index],
            maxTemp: Math.round(daily.temperature_2m_max[index])
        }
    })
}

function parseCurrentHourly({hourly, current_weather}){
    return hourly.time.map((time,index) => {
        return{
            timestamp: time * 1000,
            iconCode: hourly.weathercode[index],
            temp: Math.round(hourly.temperature_2m[index]),
            feelsLike: Math.round(hourly.apparent_temperature[index]), //same as above
            windspeed: Math.round(hourly.windspeed_10m[index]),
            precip: Math.round(hourly.precipitation[index]*100) /100,
        }                                                           // i need filter to find current time at wich i should start
    }).filter(({timestamp})=> timestamp >= current_weather.time*1000)  // hour i am currently in or future
}