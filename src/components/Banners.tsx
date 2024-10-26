import React from "react";
import { Badge, Button, Container } from "react-bootstrap";
import Slider from "react-slick";
import { assets } from "../assets";

function Banners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <div style={{ backgroundImage: `url(${assets.banner01})` }} className="banner-slide">
            <div className="col-md-4">
              <Badge className="bg-warning" text="dark">Free Shipping - orders over $100</Badge>
              <h1>Free Shipping on orders over <span className="text-danger">$100</span></h1>
              <p> Free Shipping to First-Time Customers only, After Promotions and discount are applied.</p>
              <Button >Shop now</Button>
            </div>
          </div>
        </div>
        <div>
          <div style={{ backgroundImage: `url(${assets.banner01})` }} className="banner-slide">
            <div className="col-md-4">
              <Badge className="bg-warning" text="dark">Free Shipping - orders over $100</Badge>
              <h1>Free Shipping on orders over <span className="text-danger">$100</span></h1>
              <p> Free Shipping to First-Time Customers only, After Promotions and discount are applied.</p>
              <Button >Shop now</Button>
            </div>
          </div>
        </div>
        <div>
          <div style={{ backgroundImage: `url(${assets.banner01})` }} className="banner-slide">
            <div className="col-md-4">
              <Badge className="bg-warning" text="dark">Free Shipping - orders over $100</Badge>
              <h1>Free Shipping on orders over <span className="text-danger">$100</span></h1>
              <p> Free Shipping to First-Time Customers only, After Promotions and discount are applied.</p>
              <Button >Shop now</Button>
            </div>
          </div>
        </div>
      </Slider>
    </Container>
  );
}

export default Banners;
