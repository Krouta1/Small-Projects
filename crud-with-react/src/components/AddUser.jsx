
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../service/api'

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

const AddUser = () => {
  const [user, setUser] = useState(initialVales)
  const navigate = useNavigate()
 
  function onValueChange(e){
    setUser({...user, [e.target.name]: e.target.value})
    
  }

  async function addUserDetails(){
     await addUser(user)
     navigate('/all')
  }

  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name'/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='username'/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone'/>
      </FormControl>
      <FormControl>
        <Button onClick={()=>addUserDetails()} variant='contained'>Add User</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser