import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DetailedProduct from './DetailedProduct'

const ProductDetail = () => {
  // const { id } = useParams()
  const { state } = useLocation()
  const { data } = state
  return (
    <>
      <div><DetailedProduct data={data} type={'list'}></DetailedProduct></div>

    </>
  )
}

export default ProductDetail