import {  createBrowserRouter, RouterProvider } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// import Header from "./components/Header";
import Layout from "./Layout";
import { Container } from "react-bootstrap";
import AdBanner from "./components/AdBanner";
import Banners from "./components/Banners";
import ProductCategories from "./components/ProductCategories";
import FooterAd from "./components/FooterAd";
import Footer from "./components/Footer";
import ProductComponent from "./components/ProductComponent";
import Categories from "./components/Categories";


type Props = {}

function App({}: Props) {
  const appRoutes = [  
    {
        path: '/',
        element: <Layout />,
        children: [  
          {
          path: '/',
          element: (
            <Container>
              
               <Banners />

              <AdBanner />
              <Categories/>
              <ProductComponent /> 
              {/* <ProductCategories /> */}
               <FooterAd />
              <Footer />
              
            </Container>
          ),
        },

            {
                path: '/',
                element: <Home />
            },
           
            {
              path: '/products/:slug',
              element: <ProductDetails />
          },
        
      
           
        ]
    }
  ]
  const routes = createBrowserRouter(appRoutes)
  return (
   

    <div>
    <RouterProvider router={routes} />
</div>
  )
}

export default App