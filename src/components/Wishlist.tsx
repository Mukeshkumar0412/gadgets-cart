import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsCartPlus, BsArrowLeft } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }
        setLoading(false);
    }, []);

    const removeFromWishlist = (productId: string) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const addToCart = (product: any) => {
        alert(`${product.slug} added to cart!`);
        navigate('/cart');
    };

    if (loading) {
        return <div className="loading-spinner">Loading...</div>;
    }

    return (
        <Container className="wishlist-container mt-5">
            <h2 className="section-title mb-4">Your Wishlist</h2>
            
            {wishlist.length > 0 ? (
                <Row className="g-4">
                    {wishlist.map((item) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Card className="wishlist-card h-100">
                                <div className="wishlist-badge" onClick={() => removeFromWishlist(item.id)}>
                                    <FaHeart className="text-danger" />
                                </div>
                                <Link to={`/products/${item.slug}`} className="product-link">
                                    <div className="image-container">
                                        <Card.Img
                                            variant="top"
                                            className="wishlist-img"
                                            alt={`Image of ${item.slug}`}
                                            src={item.image.thumbnail}
                                        />
                                    </div>
                                </Link>
                                <Card.Body className="d-flex flex-column">
                                    <Link to={`/products/${item.slug}`} className="product-link">
                                        <Card.Title className="wishlist-title">
                                            {item.slug}
                                        </Card.Title>
                                        <Card.Text className="wishlist-text">
                                            {item.shop.description?.substring(0, 60) || 'No description available'}...
                                            <div className="price">${item.min_price}</div>
                                            <div className="stock-status">
                                                {item.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                            </div>
                                        </Card.Text>
                                    </Link>
                                    <Button 
                                        variant="primary" 
                                        className="mt-auto cart-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(item);
                                        }}
                                    >
                                        <BsCartPlus className="me-1" /> Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <div className="empty-wishlist text-center py-5">
                    <h4>Your wishlist is empty</h4>
                    <p className="text-muted mb-4">You haven't added any items to your wishlist yet.</p>
                    <Button 
                        variant="primary" 
                        onClick={() => navigate('/products')}
                    >
                        <BsArrowLeft className="me-1" /> Continue Shopping
                    </Button>
                </div>
            )}
        </Container>
    );
}