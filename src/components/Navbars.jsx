import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Navbars = () => {
  return (
   
      <Navbar expand="lg" className='nbar' >
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
       
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <Link to='/tvseries' className='nav-link  linknav1' >TV Series</Link>
            <Link to='/movies' className='nav-link  linknav1 '>Movies</Link>
            <Link to='/animations' className='nav-link  linknav1'>Amimations</Link>
           
          </Nav>
          
      </Container>
    </Navbar>
  );
}




export default Navbars
