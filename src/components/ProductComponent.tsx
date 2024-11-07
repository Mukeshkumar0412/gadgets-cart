import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";


export default function ProductComponent() {
    const [data, setData] = useState([])
    // const [limit, setLimit] = useState(10)
    // const [loading,setLoading]= useState(true)

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
                                <Card>
                                    <img
                                        alt="Sample"
                                        src={item.image.thumbnail}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className="">
                                            {item.shop.description }
                                            {item.icon}
                                            <br></br>
                                            <b>ID:</b>       {item.id}
                                        <br></br>
                                            <b>$</b>     {item.min_price}
                                            <br></br>
                                            <b>Quantity:</b>       {item.quantity}
                                        </Card.Text>
                                        <Button className="btn"> Buy </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        : null
                       
                }
            </Row>
           
        </Container>
    )
}
