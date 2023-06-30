import { Box, Divider, List,Typography } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

const Transactions = ({transactions, setTransactions}) => {
  return (
    <Box>
        <Typography variant='h5'>Transactions History</Typography>
        <Divider/>
        <List>
            {
              transactions.map(transaction =>(
                <Transaction transaction={transaction} transactions={transactions} setTransactions={setTransactions}/>
              ))
            }
        </List>
    </Box>
  )
}

export default Transactions