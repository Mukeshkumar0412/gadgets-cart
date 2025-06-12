import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { FaRegHeart, FaHeart, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import RelatedItems from '../components/RelatedProduct';
import "../assets/ProductDetails.css"

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [count, setCount] = useState<number>(1);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

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
      .catch(() => {
        setLoading(false);
      });
  }, [slug]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading product details...</p>
    </div>
  );

  return (
    <div className="product-detail-page">
      <Container>
        {product ? (
          <div className='product-detail-container'>
            <div className="product-image-section">
              <div className="favorite-icon" onClick={handleFavorite}>
                {isFavorite ? (
                  <FaHeart className="filled" />
                ) : (
                  <FaRegHeart />
                )}
              </div>
              <img
                className="product-main-image"
                alt={product.name}
                src={product.image?.thumbnail}
              />
              <div className="image-thumbnails">

                <div className="thumbnail active"></div>
                <div className="thumbnail"></div>
                <div className="thumbnail"></div>
              </div>
            </div>

            <div className="product-info-section">
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <IoIosArrowRoundForward />
                <Link to="/products">Products</Link>
                <IoIosArrowRoundForward />
                <span>{product.name}</span>
              </div>

              <h1 className="product-title">{product.name}</h1>
              
              <div className="price-section">
                <span className="current-price">${product.min_price}</span>
                {product.max_price && product.max_price !== product.min_price && (
                  <span className="original-price">${product.max_price}</span>
                )}
                {product.max_price && product.max_price !== product.min_price && (
                  <span className="discount-badge">
                    {Math.round((1 - product.min_price / product.max_price) * 100)}% OFF
                  </span>
                )}
              </div>

              <div className="product-meta">
                <div className="meta-item">
                  <span className="label">Product Code:</span>
                  <span className="value">FBB00255</span>
                </div>
                <div className="meta-item">
                  <span className="label">Availability:</span>
                  <span className="value in-stock">In Stock</span>
                </div>
                <div className="meta-item">
                  <span className="label">Category:</span>
                  <span className="value">{product.type?.name || 'N/A'}</span>
                </div>
                <div className="meta-item">
                  <span className="label">Shipping:</span>
                  <span className="value">
                    1 day shipping. <span className="highlight">Free pickup available</span>
                  </span>
                </div>
              </div>

              <div className="product-description">
                <h3>Description</h3>
                <p>{product.description || product.shop?.description || 'No description available.'}</p>
              </div>

              <div className="quantity-selector">
                <button onClick={decrementCount} disabled={count <= 1}>
                  <FaChevronLeft />
                </button>
                <span>{count}</span>
                <button onClick={incrementCount}>
                  <FaChevronRight />
                </button>
              </div>

              <div className="action-buttons">
                <button className="add-to-cart">
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="not-found-message">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist or may have been removed.</p>
            <Link to="/products" className="back-to-products">
              Browse our products
            </Link>
          </div>
        )}

        <hr className="section-divider" />
        <RelatedItems />
      </Container>
    </div>
  );
};

export default ProductDetail;