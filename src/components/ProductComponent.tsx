import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "../assets/ProductComponents.css"; 

export default function ProductComponent() {
    const [data, setData] = useState<any[]>([]);
    const [cart, setCart] = useState<any[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [wishlist, setWishlist] = useState<any[]>(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/products', {
            store: "gadget"
        }).then(res => {
            setData(res.data.data);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.error('Error fetching data:', err);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (product: any) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: (item.quantity || 1) + 1 } 
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        // navigate('/cart');
    };

    const removeFromCart = (productId: string) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const isInCart = (productId: string) => {
        return cart.some(item => item.id === productId);
    };

    const toggleWishlist = (product: any) => {
        if (isInWishlist(product.id)) {
            setWishlist(wishlist.filter(item => item.id !== product.id));
        } else {
            setWishlist([...wishlist, product]);
        }
    };

    const isInWishlist = (productId: string) => {
        return wishlist.some(item => item.id === productId);
    };

    if (loading) {
        return <div className="loading-spinner">Loading...</div>;
    }

    return (
        <Container className="product-container mt-5">
            <h3 className="section-title py-2">Popular Products</h3>
            <Row className="g-4">
                {data.length > 0 ? (
                    data.map((item: any) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={item.id} className="product-col">
                            <Card className="product-card h-100">
                                <Link to={`/products/${item.slug}`} className="product-link">
                                    <div className="image-container">
                                        <Card.Img
                                            variant="top"
                                            className="product-img"
                                            alt={`Image of ${item.slug}`}
                                            src={item.image.thumbnail}
                                        />
                                    </div>
                                </Link>
                                <Card.Body className="d-flex flex-column">
                                    <Link to={`/products/${item.slug}`} className="product-link">
                                        <Card.Title className="product-title">
                                            {item.slug}
                                        </Card.Title>
                                        <Card.Text className="product-text">
                                            {item.shop.description?.substring(0, 60) || 'No description available'}...
                                            <div className="price">${item.min_price}</div>
                                            <div className="stock-status">
                                                {item.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                            </div>
                                        </Card.Text>
                                    </Link>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        {isInCart(item.id) ? (
                                            <Button 
                                                variant="outline-danger" 
                                                className="cart-btn"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    removeFromCart(item.id);
                                                }}
                                            >
                                                <BsCartCheck className="me-1" /> Remove
                                            </Button>
                                        ) : (
                                            <Button 
                                                variant="primary" 
                                                className="cart-btn"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    addToCart(item);
                                                }}
                                                disabled={item.quantity <= 0}
                                            >
                                                <BsCartPlus className="me-1" /> Add to Cart
                                            </Button>
                                        )}
                                        <Button 
                                            variant="link" 
                                            className="wishlist-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleWishlist(item);
                                            }}
                                        >
                                            {isInWishlist(item.id) ? (
                                                <FaHeart className="text-danger" />
                                            ) : (
                                                <FaRegHeart />
                                            )}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col className="text-center py-5">
                        <p className="no-products">No products available</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
}