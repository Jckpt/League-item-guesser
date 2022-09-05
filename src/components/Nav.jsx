import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Switch } from 'react-darkreader';
function Nav({isDark,toggle}) {


  return (
    <Navbar bg="light"  variant="light">
    <Container>
      <Navbar.Brand href="#home">League item guesser</Navbar.Brand>
    </Container>
    <div className='d-flex flex-direction-row justify-content-evenly align-items-center' style={{width: "6rem"}}>
    <Switch checked={isDark} onChange={toggle} styling="docusaurus" offColor="#0d6efd" />
    </div>

    </Navbar>
  )
}

export default Nav