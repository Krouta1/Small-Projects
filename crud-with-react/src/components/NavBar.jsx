import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material/';

//routing
import { NavLink } from 'react-router-dom';


// replacing some components with styled ones
const Header = styled(AppBar)`
    background: #111111;
    position: static;
`
//this styling NavLink from react-router-dom
const Tabs = styled(NavLink)`
    font-size: 1.5rem;
    margin-right: 2rem;
    color: inherit;
    text-decoration: none;
`
const NavBar = () => {
  return (
    <Header>
        <Toolbar>
            <Tabs to='/'>Simply by Krouta</Tabs>
            <Tabs to='all'>All users</Tabs>
            <Tabs to='add'>Add user</Tabs>
        </Toolbar>
    </Header>
  )
}

export default NavBar