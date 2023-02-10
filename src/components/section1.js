import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../imgndlogo/Imagr.png';
import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';
import search from '../imgndlogo/searchwhite.png';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FirstSection(){
  // src/pages/Home.js
const cart = useSelector((state) => state.cart)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}
    return(
        <div className='images'>
             <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src={logo}
              width="250"
              height="80"
              className="d-inline-block align-top fruitkha"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            id="nav-custom"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1" className='gap1'>Home</Nav.Link>
            <Nav.Link href="#action2" className='padd'>About</Nav.Link>
            <NavDropdown title="Pages" className='padd'id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='padd' title="News" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className='padd' href="#features">Contact</Nav.Link>
            <Nav.Link className='padd' href="#pricing">Shop</Nav.Link>
          </Nav>
         <Container className=' align-top padd gap2'><Link to='/Cart'><FaShoppingCart style={{color:'#fd7e14'}}/>
          <sup style={{backgroundColor:'white',borderRadius:'50%',color:'orange'}}>{getTotalQuantity() || 0}</sup></Link>
          <img
              src={search}
              width="30"
              height="25"
              className="d-inline-block "
              alt="React Bootstrap logo"
            />
         </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
        <h4 className='colorbg d'>fresh & organic</h4>
        <h1 className='high'>Delicious Seasonal Fruits</h1>
    </Container>
    <Container className='spacing'>
      <Col lg="12">
        <Button variant="primary" className='butt'>Fruit Collection</Button>{' '}
        <Button variant="primary" className='buttt'>Contact Us</Button>{' '}
      </Col>  
    </Container>

        </div>
    );
}


export default FirstSection;