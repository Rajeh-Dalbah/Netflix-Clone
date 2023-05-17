import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css"

const Navbar2 = () => {
  return <div>
   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to="/">Movies</Navbar.Brand>
    <Nav className="me-auto">
      <Link className='link' to="/trending">Home</Link>
      <Link className='link' to="/getmovies">Favorite</Link>
    </Nav>
    </Container>
  </Navbar>
  </div>;
};

export default Navbar2;