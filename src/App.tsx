import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./Layout";
import { Container } from "react-bootstrap";
import AdBanner from "./components/AdBanner";
import ProductComponent from "./components/ProductComponent";
import Categories from "./components/Categories";
import Wishlist from "./components/Wishlist";
import Cart from "./components/CartPage";
import FooterAd from "./components/FooterAd";
import Footer from "./components/Footer";
import CheckoutPage from "./components/CheckOut";
import ContactPage from "./components/ContactPage";

function App() {
  const appRoutes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Container>
              <AdBanner />
              <Categories />
              <ProductComponent />
              <FooterAd />
              <Footer />
            </Container>
          ),
        },
        {
          path: '/products/:slug',
          element: <ProductDetails />
        },
        {
          path: '/wishlist',
          element: <Wishlist />
        },
        {
          path: '/cart',
          element: <Cart />
        },
         {
          path: '/CheckOut',
          element: <CheckoutPage />
        },
         {
          path: '/products',
          element: <ProductComponent />
        },
        {
          path: '/About',
          element: <FooterAd />
        },
         {
          path: '/categories',
          element: <Categories />
        },
        {
          path: '/contact',
          element: <ContactPage />
        }

      ]
    }
  ];

  const routes = createBrowserRouter(appRoutes);
  
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;