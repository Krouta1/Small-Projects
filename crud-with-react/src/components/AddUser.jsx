
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

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

  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input/>
      </FormControl>
      <FormControl>
        <Button variant='contained'>Add User</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser