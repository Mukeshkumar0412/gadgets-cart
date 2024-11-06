import React from 'react'
import Header from './components/Header'
import Banners from './components/Banners'
import ProductComponents from './components/ProductComponent'
import ProductCategories from './components/ProductCategories'





type Props = {}

export default function App({ }: Props) {
  return (
    <div>
    
     <Header />
      <Banners/>
      <ProductCategories/>
      <ProductComponents/>
    </div>
    
  )
}