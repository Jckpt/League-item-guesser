import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Nav() {
  return (
    <Navbar bg="light"  variant="light">
    <Container>
      <Navbar.Brand href="#home">League item guesser</Navbar.Brand>
    </Container>
    </Navbar>
  )
}

export default Nav