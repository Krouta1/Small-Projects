import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
    display:flex;
    flex-direction: column;
    & > h5, & > div, & >button{
        margin-top: 2rem;
    }
`

const NewTransactions = () => {
  return (
    <Container>
        <Typography variant='h5'>New transaction</Typography>
        <TextField label='Enter expense'/>
        <TextField label='Enter amount'/>
        <Button variant='contained'>Add transaction</Button>
    </Container>
  )
}

export default NewTransactions