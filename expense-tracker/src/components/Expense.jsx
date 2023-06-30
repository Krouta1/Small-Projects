import styled from '@emotion/styled'
import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    display:flex;
    & > div {
        flex: 1;
        padding: 0.75rem;
    }
`

const Expense = ({transactions}) => {

    const amount = transactions.map(transaction => transaction.amount)
    const income = amount.filter(item=> item > 0 ).reduce((amount,item)=>(amount+=item),0).toFixed(2)
    const expense = (amount.filter(item=> item < 0 ).reduce((amount,item)=>(amount+=item),0) * -1).toFixed(2)


  return (
    <Container>
        <Card>
            <CardContent>
                <Typography>Income</Typography>
                <Typography style={{color:'green'}}>{income} czk</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography>Expense</Typography>
                <Typography style={{color:'red'}}>{expense} czk</Typography>
            </CardContent>
        </Card>
    </Container>
  )
}

export default Expense