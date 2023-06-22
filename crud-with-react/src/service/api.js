import axios from "axios";

const API_URL = 'http://localhost:3002/users'

export const addUser = async (data ) => {
    try{
         return await axios.post(API_URL,data)
    }catch(error){
        alert('Error while calling addUser API', error.message)
    }
}

export const getUsers = async () => {
    try{
        return await axios.get(API_URL)
    }catch(error){
        alert('Users not found', error.message)
    }
}