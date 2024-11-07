import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Button, Card, Container, } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import Slider from "react-slick";

function ProductCategories() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/categories', {
            
                "limit": 5,       
                "store": "gadget"    
              
        }).then(res => {
            setData(res.data.data)
        })
    },[])
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500


    };
    return (
        <Container>
            <h3>Categories</h3>
            <Slider {...settings}>
            {
                data.length ?
                data.map((item:any)=>(


                <div className="category">
                    <div className="banner-slide">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                src={item.image.original}/>
                            <Card.Body>
                                <Card.Title >{item.name}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {item.id}
                                </Card.Subtitle>
                                <Card.Text>
                                    {item.icon}
                                    
                                </Card.Text>
                                <Button>
                                <BsCartCheck />
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                ))
                : null
            }
            </Slider>
        </Container>
    );
}

export default ProductCategories;
