import { Table, TableBody, TableCell, TableHead, TableRow,styled } from '@mui/material'
import React, {useState,useEffect} from 'react'
import { getUsers } from '../service/api'


// some styles
const StyledTable = styled(Table)`
  width: 90%;
  margin: 3rem auto;
`
const Thead = styled(TableRow)`
  background: #000;
`

const AllUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsersDetails()
  
    return () => {
      
    }
  }, [])
  
  const getUsersDetails = async () => { 
   let response = await getUsers()
   setUsers(response.data)
  }

  return (
    <StyledTable>
      <Thead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </Thead>
      <TableBody>
        {users.map(user =>{
          return <TableRow key={user.id}>
            <TableCell >{user.id}</TableCell>
            <TableCell >{user.name}</TableCell>
            <TableCell >{user.username}</TableCell>
            <TableCell >{user.email}</TableCell>
            <TableCell >{user.email}</TableCell>
          </TableRow>
        })}
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers