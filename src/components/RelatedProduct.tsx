import React from 'react'

import ProductComponent from './ProductComponent'

type Props = {}

const RelatedProduct = (props: Props) => {
  return (
    <>
    <h3>Related Items</h3>
    <ProductComponent />
    </>
  )
}

export default RelatedProduct