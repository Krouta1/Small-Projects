import { useEffect, useState } from "react"

const PREFIX = 'codepen-clone-'

const useLocalStorage = (key, initialValue) => {

    const PREFIXEDKEY = PREFIX + key

    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(PREFIXEDKEY)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if( typeof initialValue === 'function'){
            return initialValue()
        }else{
            return initialValue
        }
    })

    useEffect(() => {
      localStorage.setItem(PREFIXEDKEY, JSON.stringify(value))  
    }, [value,PREFIXEDKEY])
    
  return [value, setValue]
}

export default useLocalStorage