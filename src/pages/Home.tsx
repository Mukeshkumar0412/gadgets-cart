import React from 'react'
import AdBanner from '../components/AdBanner'
import Footer from '../components/Footer'
import FooterAd from '../components/FooterAd'
import ProductComponent from '../components/ProductComponent'
import Header from '../components/Header'
import ProductDetails from './ProductDetails'
import LowerFoot from '../components/LowerFoot'

type Props = {}

export default function Home({ }: Props) {
  return (
    <div>
      
<Header/>
<AdBanner/>
<ProductComponent/>
<FooterAd/>
<Footer/>
<LowerFoot/>

    
    </div>
  )
}