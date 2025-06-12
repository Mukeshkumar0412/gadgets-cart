import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { BsCartX, BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Cart.css";

export default function Cart() {
    const [cart, setCart] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setLoading(false);
    }, []);

    const removeFromCart = (productId: string) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateQuantity = (productId: string, newQuantity: number) => {
        if (newQuantity < 1) return;

        const updatedCart = cart.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.min_price * (item.quantity || 1)), 0).toFixed(2);
    };

    if (loading) {
        return <div className="loading-spinner">Loading...</div>;
    }

    return (
        <Container className="cart-container mt-5">
            <h2 className="section-title mb-4">Your Shopping Cart</h2>

            {cart.length > 0 ? (
                <>
                    <Table responsive className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="cart-item">
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item.image?.thumbnail}
                                                alt={item.slug}
                                                className="cart-item-img me-3"
                                            />
                                            <div>
                                                <Link to={`/products/${item.slug}`} className="product-link">
                                                    {item.slug}
                                                </Link>
                                                <p className="small text-muted mb-0">
                                                    {item.shop?.description?.substring(0, 50) || 'No description'}...
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${item.min_price}</td>
                                    <td>
                                        <div className="quantity-control d-flex align-items-center">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                            >
                                                -
                                            </Button>
                                            <span className="mx-2">{item.quantity || 1}</span>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </td>
                                    <td>${(item.min_price * (item.quantity || 1)).toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <BsCartX /> Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="cart-summary">
                        <Row className="justify-content-end">
                            <Col md={4}>
                                <Card className="summary-card">
                                    <Card.Body>
                                        <h5 className="summary-title">Order Summary</h5>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Subtotal:</span>
                                            <span>${calculateTotal()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <span>Shipping:</span>
                                            <span>Free</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between fw-bold">
                                            <span>Total:</span>
                                            <span>${calculateTotal()}</span>
                                        </div>
                                        <Button
                                            variant="primary"
                                            className="w-100 mt-3 checkout-btn"
                                            onClick={() => navigate('/checkout')}
                                        >
                                            Proceed to Checkout
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            className="w-100 mt-2 continue-btn"
                                            onClick={() => navigate('/products')}
                                        >
                                            <BsArrowLeft className="me-1" /> Continue Shopping
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </>
            ) : (
                <div className="empty-cart text-center py-5">
                    <h4>Your cart is empty</h4>
                    <p className="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
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