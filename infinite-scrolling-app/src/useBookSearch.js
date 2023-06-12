// custom Hook

import { useEffect, useState} from 'react';
import axios from 'axios';

const useBookSearch = (query,pageNumber) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false); //it is for num_found in API array, if i scroll all the way down 
    
    useEffect(()=>{
      setBooks([]);
    },[query]);

    useEffect(() => {

      setLoading(true);
      setError(false);
      let cancel //way to cancel things
      
      axios({
        method:'GET',
        url:'https://openlibrary.org/search.json',
        params: { q : query, page: pageNumber },
        cancelToken: new axios.CancelToken(c => cancel = c)// way to cancel
      }).then(res=>{
        setBooks(prevBooks =>{ // comment for line down : spreading array and adding to it
          return [...new Set([...prevBooks,...res.data.docs.map(b=> b.title)])] //set returning just uniqeu values. Cuz i can have multiple same titles
        })
        setHasMore(res.data.docs.length > 0)
        setLoading(false)
      }).catch(error =>{
        if(axios.isCancel(error)) return // when you cancle thing it throws errors to console when you type, basically i send only finshed word
        setError(true)
      })

      return () =>{
        cancel() // when you type to input, it wont search letter by letter
      }
    
    }, [query,pageNumber])
    
    return {loading,error,books,hasMore} //return obj to user :)
}

export default useBookSearch