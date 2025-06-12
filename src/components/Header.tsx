import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Container, 
  Form, 
  Nav, 
  Navbar 
} from 'react-bootstrap';
import { 
  BsCartCheck,
  BsSearch 
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbBrandElectronicArts } from "react-icons/tb";
import '../assets/Header.css';

const HeaderNavLinks = () => {
  return (
    <Nav className="header-nav-links">
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = 0; 

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="app-header">
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <div className="header-top">
            <Navbar.Brand as={Link} to="/" className="logo">
              <TbBrandElectronicArts size={30} />
              <span>Gadgets-Cart</span>
            </Navbar.Brand>

            {windowWidth > 992 && (
              <Form className="search-form">
                <Form.Control
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search"
                />
                <Button variant="outline-secondary" type="submit">
                  <BsSearch />
                </Button>
              </Form>
            )}

            <div className="action-icons">
              <Link to="/wishlist" className="icon-button">
                <FaRegHeart />
                <span className="badge">{cartCount}</span>
              </Link>
              <Button variant="link" className="icon-button">
                <FiUser />
              </Button>
              <Link to="/cart"  className="icon-button">
                <BsCartCheck />
                <span className="badge">{cartCount}</span>
              </Link>
            </div>

            <Navbar.Toggle aria-controls="navbar-collapse" />
          </div>

          <Navbar.Collapse id="navbar-collapse">
            {windowWidth <= 992 && (
              <div className="mobile-search">
                <Form className="search-form">
                  <Form.Control
                    type="search"
                    placeholder="Search products..."
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary" type="submit">
                    <BsSearch />
                  </Button>
                </Form>
              </div>
            )}
            <HeaderNavLinks />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;