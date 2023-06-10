import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Headers.css'

function Header() {
  return (
    <div>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/fLnvXXYP/23254597-christmas-2012-new-2857.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <strong>Find Resto</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header