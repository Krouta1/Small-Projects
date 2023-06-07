export const ICON_MAP = new Map() // gets something and set some value to it. In my case getting iconCode and setting name of of svg to it

function addMapping(values,icon){
    values.forEach(value => {           // setting icons for values from API  like ICON_MAP.set([1],"sun")
        ICON_MAP.set(value,icon)
    });
}

addMapping([0,1],"sun")
addMapping([2],"cloud-sun")
addMapping([3],"cloud")             // match the icon for all the values from API
addMapping([45,48],"smog")
addMapping([51,53,55,56,57,61,63,65,66,67,80,81,82],"cloud-showers-heavy")
addMapping([71,73,75,77,885,86],"snowflake")
addMapping([95,96,99],"cloud-bolt")