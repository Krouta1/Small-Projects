
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser, editUser } from '../service/api'

// styles fro FromGroup
const Container = styled(FormGroup)`
  width: 50%;
  margin: 10% auto;
  & > div{
    margin:1rem;
  }
`
const initialVales = {
  name:'',
  username:'',
  email:'',
  phone:''
}

const EditUser = () => {
  const [user, setUser] = useState(initialVales)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    getUserData()
  }, [])
  
 
  function onValueChange(e){
    setUser({...user, [e.target.name]: e.target.value})
    
  }
  const getUserData = async()=>{
    let response = await getUser(id)
    setUser(response.data)
    
 }

 async function editUserDetails(){
    await editUser(user,id)
    navigate('/all')
 }

  return (
    <Container>
      <Typography variant='h4'>Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='username' value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email'value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone'value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button onClick={()=>editUserDetails()} variant='contained'>Edit User</Button>
      </FormControl>
    </Container>
  )
}

export default EditUser