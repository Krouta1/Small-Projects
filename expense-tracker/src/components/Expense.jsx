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

const Expense = () => {
  return (
    <Container>
        <Card>
            <CardContent>
                <Typography>Income</Typography>
                <Typography style={{color:'green'}}>25 czk</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography>Expense</Typography>
                <Typography style={{color:'red'}}>10 czk</Typography>
            </CardContent>
        </Card>
    </Container>
  )
}

export default Expense