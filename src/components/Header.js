import React from 'react'
import { Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer exact to="/hundred-points-react/">
        <Navbar.Brand>100 points</Navbar.Brand>
      </LinkContainer>
    </Navbar>
  )
}

export default Header