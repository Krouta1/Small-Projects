// custom Hook

import {React,useEffect,useState} from 'react'
import axios from 'axios'

const useBookSearch = (query,pageNumber) => {
    useEffect(() => {
      axios({
        method:'GET',
        url:'https://openlibrary.org/search.json',
        params: { q : query, page: pageNumber }
      })
    
      return () => {
        second
      }
    }, [query,pageNumber])
    
    return (
        null
)
}

export default useBookSearch