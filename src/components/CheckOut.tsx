import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { BsArrowLeft, BsCheckCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Checkout.css";

export default function CheckoutPage() {
    const [cart, setCart] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "United States",
        paymentMethod: "credit",
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvv: ""
    });
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.min_price * (item.quantity || 1)), 0).toFixed(2);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors: any = {};
        
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.zip) newErrors.zip = "ZIP code is required";
        
        if (formData.paymentMethod === "credit") {
            if (!formData.cardName) newErrors.cardName = "Card name is required";
            if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
            if (!formData.cardExpiry) newErrors.cardExpiry = "Expiry date is required";
            if (!formData.cardCvv) newErrors.cardCvv = "CVV is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validate()) {
            setIsSubmitting(true);
            
           
            setTimeout(() => {
                setIsSubmitting(false);
                setOrderSuccess(true);
                localStorage.removeItem('cart');
            }, 1500);
        }
    };

    if (orderSuccess) {
        return (
            <Container className="checkout-success-container">
                <Card className="text-center p-4">
                    <BsCheckCircle className="success-icon" />
                    <h2>Order Placed Successfully!</h2>
                    <p className="text-muted mb-4">
                        Thank you for your purchase. Your order has been received and is being processed.
                    </p>
                    <p>Order Total: <strong>${calculateTotal()}</strong></p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Button variant="primary" onClick={() => navigate('/')}>
                            Continue Shopping
                        </Button>
                        <Button variant="outline-primary" onClick={() => navigate('/orders')}>
                            View Orders
                        </Button>
                    </div>
                </Card>
            </Container>
        );
    }

    return (
        <Container className="checkout-container">
            <h2 className="checkout-title mb-4">Checkout</h2>
            
            {cart.length === 0 ? (
                <div className="empty-cart text-center py-5">
                    <h4>Your cart is empty</h4>
                    <p className="text-muted mb-4">There are no items to checkout.</p>
                    <Button variant="primary" onClick={() => navigate('/products')}>
                        <BsArrowLeft className="me-1" /> Continue Shopping
                    </Button>
                </div>
            ) : (
                <Row>
                    <Col lg={8}>
                        <Card className="mb-4 checkout-card">
                            <Card.Body>
                                <h4 className="section-title">Shipping Information</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>First Name*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.firstName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.firstName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Last Name*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.lastName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.lastName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email*</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Phone*</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.phone}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.phone}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Address*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            isInvalid={!!errors.address}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.address}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>City*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.city}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.city}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>ZIP Code*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="zip"
                                                    value={formData.zip}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.zip}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.zip}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select
                                            name="country"
                                            value={formData.country}
                                            onChange={(e) => setFormData({...formData, country: e.target.value})}
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>United Kingdom</option>
                                            <option>Australia</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <h4 className="section-title">Payment Method</h4>
                                    <Form.Group className="mb-3">
                                        <div className="payment-options">
                                            <Form.Check
                                                type="radio"
                                                id="credit"
                                                name="paymentMethod"
                                                label="Credit Card"
                                                value="credit"
                                                checked={formData.paymentMethod === "credit"}
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="paypal"
                                                name="paymentMethod"
                                                label="PayPal"
                                                value="paypal"
                                                checked={formData.paymentMethod === "paypal"}
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="cod"
                                                name="paymentMethod"
                                                label="Cash on Delivery"
                                                value="cod"
                                                checked={formData.paymentMethod === "cod"}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </Form.Group>

                                    {formData.paymentMethod === "credit" && (
                                        <div className="credit-card-form">
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name on Card*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="cardName"
                                                    value={formData.cardName}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.cardName}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.cardName}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Card Number*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="cardNumber"
                                                    value={formData.cardNumber}
                                                    onChange={handleChange}
                                                    placeholder="1234 5678 9012 3456"
                                                    isInvalid={!!errors.cardNumber}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.cardNumber}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Expiry Date*</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="cardExpiry"
                                                            value={formData.cardExpiry}
                                                            onChange={handleChange}
                                                            placeholder="MM/YY"
                                                            isInvalid={!!errors.cardExpiry}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.cardExpiry}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>CVV*</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="cardCvv"
                                                            value={formData.cardCvv}
                                                            onChange={handleChange}
                                                            placeholder="123"
                                                            isInvalid={!!errors.cardCvv}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.cardCvv}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                    )}

                                    {formData.paymentMethod === "paypal" && (
                                        <Alert variant="info" className="mb-4">
                                            You will be redirected to PayPal to complete your payment.
                                        </Alert>
                                    )}

                                    {formData.paymentMethod === "cod" && (
                                        <Alert variant="info" className="mb-4">
                                            Pay with cash when your order is delivered.
                                        </Alert>
                                    )}

                                    <div className="d-flex justify-content-between mt-4">
                                        <Button 
                                            variant="outline-secondary" 
                                            onClick={() => navigate('/cart')}
                                        >
                                            <BsArrowLeft className="me-1" /> Back to Cart
                                        </Button>
                                        <Button 
                                            variant="primary" 
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Processing...' : 'Place Order'}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className="checkout-summary">
                            <Card.Body>
                                <h4 className="section-title">Order Summary</h4>
                                
                                <div className="order-items">
                                    {cart.map(item => (
                                        <div key={item.id} className="order-item">
                                            <div className="d-flex justify-content-between">
                                                <span>
                                                    {item.slug} × {item.quantity || 1}
                                                </span>
                                                <span>${(item.min_price * (item.quantity || 1)).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="order-totals">
                                    <div className="d-flex justify-content-between">
                                        <span>Subtotal:</span>
                                        <span>${calculateTotal()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Shipping:</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Tax:</span>
                                        <span>$0.00</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between fw-bold">
                                        <span>Total:</span>
                                        <span>${calculateTotal()}</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
}