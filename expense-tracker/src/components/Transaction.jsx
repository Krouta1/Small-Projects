import styled from '@emotion/styled'
import { ListItem, ListItemText } from '@mui/material'
import React from 'react'

const Detail = styled(ListItem)`
  margin-top:1rem;
`

const Transaction = ({transaction}) => {
  const color= transaction.amount > 10 ? 'Green' : 'red'

  return (
    <Detail style={{backgroundColor:color, color: '#fff'}}>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText >{transaction.amount}</ListItemText>
    </Detail>
  )
}

export default Transaction