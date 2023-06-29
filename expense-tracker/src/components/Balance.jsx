import React from 'react'
import { Box, Typography,styled } from '@mui/material';


const BalanceText = styled(Typography)`
    font-size: 1.5rem;
    margin-bottom: 1.7rem;
`

const Balance = ({transactions}) => {

  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((amount,item)=>(amount+=item),0).toFixed(2)

  return (
    <Box>
        <BalanceText>Balance: {total} czk</BalanceText>
    </Box>
  )
}

export default Balance