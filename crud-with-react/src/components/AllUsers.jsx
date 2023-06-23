import { Button, Table, TableBody, TableCell, TableHead, TableRow,styled } from '@mui/material'
import React, {useState,useEffect} from 'react'
import { getUsers,deleteUser } from '../service/api'
import { Link } from 'react-router-dom'


// some styles
const StyledTable = styled(Table)`
  width: 90%;
  margin: 3rem auto;
`
const Trow = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 1.2rem;
  }
`
const Tbody = styled(TableRow)`
  & > td {
    font-size: 1.5rem;
  }
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
  const deleteUserData = async (id)=>{
    await deleteUser (id)
    getUsersDetails()
  }

  // empty TableCell cuz of UI :)
  return (
    <StyledTable>
      <TableHead>
        <Trow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell> 
        </Trow>
      </TableHead>
      <TableBody>
        {users.map(user =>{
          return <Tbody key={user.id}>
            <TableCell >{user.id}</TableCell>
            <TableCell >{user.name}</TableCell>
            <TableCell >{user.username}</TableCell>
            <TableCell >{user.email}</TableCell>
            <TableCell >{user.email}</TableCell>
            <TableCell>
              <Button variant='contained'style={{marginRight: '.75rem'}} LinkComponent={Link} to={`/edit/${user.id}`}>Edit</Button>
              <Button variant='contained' color='secondary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
            </TableCell>
          </Tbody>
        })}
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers