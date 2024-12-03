import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa"; // Add this import if you use FaRegHeart for wishlist

export default function ProductComponent() {
    const [data, setData] = useState<any[]>([]);
    const [cart, setCart] = useState<any[]>([]); // Track items in cart
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/products', {
            store: "gadget"
        }).then(res => {
            setData(res.data.data);
            setLoading(false); // Set loading to false when data is fetched
        }).catch(err => {
            setLoading(false);
            console.error('Error fetching data:', err);
        });
    }, []);

    const addToCart = (product: any) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const isInCart = (productId: string) => {
        return cart.some(item => item.id === productId);
    };

    const addToWishlist = (product: any) => {
        console.log('Add to Wishlist:', product);
        // Implement logic to add to wishlist
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container className="mt-5">
            <h3 className="py-2">Popular Products</h3>
            <Row>
                {data.length > 0 ? (
                    data.map((item: any) => (
                        <Col md={4} key={item.id} className="product">
                            <Link to={`/products/${item.slug}`} key={item.id}>
                                <Card>
                                    <img
                                        className="product-img"
                                        alt={`Image of ${item.slug}`}
                                        src={item.image.thumbnail}
                                    />
                                    <Card.Body>
                                        <Card.Title className="product-title">
                                            <h1>{item.slug}</h1>
                                        </Card.Title>
                                        <Card.Text className="text-product">
                                            {item.shop.description || 'No description available'}
                                            <br />
                                            <b>ID:</b> {item.id}
                                            <br />
                                            <b>$</b> {item.min_price}
                                            <br />
                                            <b>Quantity:</b> {item.quantity}
                                        </Card.Text>
                                        {isInCart(item.id) ? (
                                            <Button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                                Remove from Cart
                                            </Button>
                                        ) : (
                                            <Button className="add-btn" onClick={() => addToCart(item)}>
                                                Add to Cart
                                            </Button>
                                        )}
                                        <Link to={`/wishlist/:slug ${item.slug}`}>
                                            <FaRegHeart
                                                onClick={() => addToWishlist(item)}
                                                className="heart-icon"
                                            />
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </Row>
        </Container>
    );
}
