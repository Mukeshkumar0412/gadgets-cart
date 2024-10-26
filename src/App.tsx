import React from 'react'
import Header from './components/Header'
import ProductCard from './components/Product'
import Slider from 'react-slick'
import { Container } from 'react-bootstrap'
import Banners from './components/Banners'


type Props = {}

export default function App({ }: Props) {
  return (
    <div>
      <Header />
      <Banners/>
    </div>
  )
}