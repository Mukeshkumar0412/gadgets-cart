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


const HeaderNavLinks = () => {
  return (
    <Nav className='header-nav-links'>
      <Nav.Item >
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Contact</Nav.Link>
      </Nav.Item>
    </Nav >
  )
}

function Header() {
  return (
    <header className='border-bottom '>
      <Navbar expand="lg" className='pb-0' >
        <Container>
          <div className='d-flex align-items-center'>
            <div className="logo">
              <TbBrandElectronicArts size={30} />
              <Navbar.Brand href="#" className='ms-2 text-dark fw-bold' >Gadgets-Cart</Navbar.Brand>
            </div>
            <Form className="col-12 d-flex border align-items-center px-1 rounded mx-4" >
              <Form.Control 
                type="search"
                placeholder="Search"
                className="me-2 border-0"
                aria-label="search"
              />
              <CiSearch size={24} />
            </Form>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className="icons px-3">
                <div className='action-icons'>
                  <FaRegHeart />
                  <span>5</span>
                </div>
                <div className='action-icons'>
                  <FiUser />
                </div>
                <div className='action-icons'>
                  <BsCartCheck />
                  <span>5</span>
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