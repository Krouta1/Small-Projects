import styled from '@emotion/styled'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Delete } from '@mui/icons-material'

const Detail = styled(ListItem)`
  margin-top:1rem;
`

const Transaction = ({transaction,setTransactions,transactions}) => {
  const color= transaction.amount > 10 ? 'Green' : 'red'

  const deleteTransaction = (id)=>{
    setTransactions(transactions.filter(transaction=> transaction.id !==id))
  }

  return (
    <Detail style={{backgroundColor:color, color: '#fff'}}>
        <ListItemIcon>
          <Delete onClick={()=>deleteTransaction(transaction.id)}/>
        </ListItemIcon>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText >{transaction.amount}</ListItemText>
    </Detail>
  )
}

export default Transaction