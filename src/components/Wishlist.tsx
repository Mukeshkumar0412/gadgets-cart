import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Optional, if you want to use axios for API calls

// Define a TypeScript type for the Product
type Product = {
  id: number;
  name: string;
  price: number;
  image: { original: string };
  max_price: number;
};

const API_URL = 'https://ecom-shop-api.vercel.app/products';  // Replace with your API endpoint

const Wishlist: React.FC = () => {
  // State for products fetched from the API
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  // State for wishlist (stored in localStorage)
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data); // Assuming response.data contains the product array
        setLoading(false); // Set loading to false when products are fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to add a product to the wishlist
  const addToWishlist = (product: Product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      const newWishlist = [...wishlist, product];
      setWishlist(newWishlist);
      localStorage.setItem('wishlist', JSON.stringify(newWishlist)); // Persist to localStorage
    }
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (id: number) => {
    const newWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist)); // Persist to localStorage
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>

      {/* Show loading state */}
      {loading && <p>Loading products...</p>}

      {/* Show the list of products fetched from API */}
      <div className="product-list">
        {products.length === 0 ? (
          <p>Grab Yours As Soon As Possible</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img className="productlist" alt={product.name} src={product.image.original} />
              <h3>{product.name}</h3>
              <p>Price: ${product.max_price}</p>
              <button onClick={() => addToWishlist(product)}>
                Add to Wishlist
              </button>
            </div>
          ))
        )}
      </div>

      <h2>Wishlist Items</h2>
      {/* Show the items in the wishlist */}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
