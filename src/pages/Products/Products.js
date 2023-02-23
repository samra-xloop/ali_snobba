import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [data, setData] = useState([])
  fetch("http://localhost:5000/api/alisnobba/products")
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(e => {
      console.log('I caught this', e)
    })
    
  return (
    <div>
      {data.map((data) => {
        return (
          <ProductCard key={data.id} data={data}></ProductCard>
        );
      })}
    </div>
  )
}

export default Products