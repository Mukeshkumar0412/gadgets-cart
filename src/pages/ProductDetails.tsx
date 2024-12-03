import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { CiHeart } from 'react-icons/ci';
import RelatedItems from '../components/RelatedProduct';
import { FaRegHeart } from 'react-icons/fa';

const Productdetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [count, setCount] = useState<number>(1);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);



  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://mock.redq.io/api/products/${slug}`, {
        params: { store: 'gadget' },
      })
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })

  }, [slug]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Container>
        {product ? (
          <div className='mainproduct'>
            <img
              className="product-img"
              alt={product.name}
              src={product.image?.thumbnail}
            />
            <div className="para">
              <h1>{product.name}</h1>
              <p><b>Products Price:</b>    ${product.min_price}</p>
              <p><b>Description:</b>    {product.shop.description}</p>
              {/* <p><b>Description:</b>    ${product.shop.description}</p>
          <p><b>Description:</b>    ${product.products_count}</p>
          <p><b>Description:</b>    ${product.shop.description}</p> */}
              <div className="sproduct-prices">
                <h4>
                  <span className="sellprice">$32</span>{' '}
                  <span className="mrp">$35</span>{' '}
                  <span className="discount">26% off</span>
                </h4>
              </div>
              <hr />
              <div className="product-details">
                <div className="product-info">
                  <div className="info-row">
                    <span className="label">Product Code:</span>
                    <span className="value">FBB00255</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Availability:</span>
                    <span className="value">In Stock</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Type:</span>
                    <span className="value">charge</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Shipping:</span>
                    <span className="value">
                      01 day shipping.{' '}
                      <span className="free-pickup">(Free pickup today)</span>
                    </span>
                  </div>
                </div>
              </div>
              
                
            </div>
          </div>
        ) : (
          <div>No product found.</div>
        )}
        <hr></hr>
        <RelatedItems />
      </Container>
    </div>
  );

};

export default Productdetail;
