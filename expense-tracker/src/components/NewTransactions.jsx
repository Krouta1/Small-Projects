import React, {useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
    display:flex;
    flex-direction: column;
    & > h5, & > div, & >button{
        margin-top: 2rem;
    }
`

const NewTransactions = ({setTransactions}) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const addTranscaction = ()=>{
    const transaction = {
      id: Math.floor(Math.random() *1000),
      text: text,
      amount: +amount
    }
    setTransactions(prevState =>[transaction,...prevState,])
  }

  return (
    <Container>
        <Typography variant='h5'>New transaction</Typography>
        <TextField label='Enter expense' onChange={(e)=>setText(e.target.value)}/>
        <TextField label='Enter amount' onChange={(e)=>setAmount(e.target.value)}/>
        <Button variant='contained' onClick={()=> addTranscaction()}>Add transaction</Button>
    </Container>
  )
}

export default NewTransactions