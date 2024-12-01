import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCartCheck } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbBrandElectronicArts } from "react-icons/tb";
import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';


const HeaderNavLinks = () => {
  return (
    <Nav className='header-nav-links'>
      <Nav.Item >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/products">Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav >
  )
}

function Header() {
  // const [showModal, setShowModal] = React.useState(false);
  // const cartItems = useSelector((state: RTCIceConnectionState) => state.cart.items);
  // console.log(cartItems+'check cart Items')

  // const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);
  return (
    <header className='border-bottom pb-2'>
      <Navbar expand="lg" className='pb-0' >
        <Container>
          <div className='d-md-flex align-items-center'>
            <div className="logo">
              <TbBrandElectronicArts size={30} />
              <Navbar.Brand href="#" className='ms-2 text-dark fw-bold' >Gadgets-Cart</Navbar.Brand>
            </div>
            {window.innerWidth > 992 ?
              <Form className="col-12 d-flex border align-items-center px-1 rounded mx-md-4" >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 border-0"
                  aria-label="search"
                />
                <CiSearch size={24} />
              </Form>
              : null
            }
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"

              navbarScroll
            >
              <div className="icons p-3">
                <div className='action-icons'>
                  <FaRegHeart />
                  <span>5</span>
                </div>
                <div className='action-icons'>
                  <FiUser />
                </div>
                <div className='action-icons'>
                  <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                  </svg>

                  <span>0</span>
                </div>
              </div>
            </Nav>
            {
              window.innerWidth < 992 ?
                <Container>
                  <HeaderNavLinks />
                </Container>
                : null
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {
        window.innerWidth > 992 ?
          <Container>
            <HeaderNavLinks />
          </Container>
          : null
      }
    </header>

  );
}

export default Header;