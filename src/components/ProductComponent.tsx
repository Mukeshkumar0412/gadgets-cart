import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function ProductComponent() {
    const [data, setData ] = useState([])
    // const [limit, setLimit] = useState(10)
    // const [loading,setLoading]= useState(true)
    const addCart = () => {};
    const removeCart = () => {};

    useEffect(() => {

        axios.post('https://ecom-shop-api.vercel.app/products', {
            store: "gadget"
        }).then(res => {
            setData(res.data.data)

        })
        // fetch('https://ecom-shop-api.vercel.app/products', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         store: "gadget"
        //     })
        // })
    }, [])

    return (
        <Container className="mt-5">
            <h3 className="py-2">Popular Products</h3>
            <Row>
                {
                    data.length ?
                        data.map((item: any) => (

                            <Col md={4} key={item.id} className="product">
                                <Link to={`/products/${item.slug}`} key={item.id}>
                                    <Card>
                                        <img className="product-img"
                                            alt="Sample"
                                            src={item.image.thumbnail}
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                <h1>{item.slug}</h1>
                                            </Card.Title>
                                            <Card.Text className="text-product">
                                                {item.shop.description}
                                            
                                                <br></br>
                                                <b>ID:</b>       {item.id}
                                                <br></br>
                                                <b>$</b>     {item.min_price}
                                                <br></br>
                                                <b>Quantity:</b>       {item.quantity}

                                               
                                            </Card.Text>
                                            <Button className="add-btn"> Add to Cart</Button>
                                            {/* {cart.includes(data)? <Button className="btnremove">remove from Cart</Button>:
                                            <Button>add to cart</Button>} */}
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>


                        ))
                        : null

                }
            </Row>

        </Container>
    )
}
