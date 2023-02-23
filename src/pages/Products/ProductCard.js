import React from 'react'
import { Link } from 'react-router-dom'
import AddOrRemove from '../../components/AddOrRemove/AddOrRemove'
import styles from './Product.module.css'
import Button from '../../components/Button/Button'


const ProductCard = ({ data}) => {

  return (
    
    <div className={styles.card}>
      <div className={styles.productImg}>
        <img src={data.imgLink} alt="product image"></img>
      </div>
      
      <div className={styles.description}>
        <Link state={{data}} to={`/details/${data.id}`}>
          <div>
            <p >{data.name}</p>
          </div>
        </Link>
        <div><p>{data.shortD}</p></div>
        <div><p>Rs: {data.price}</p></div>
      </div>

      <div className={styles.buttons}>
        <Link to="/cart">
        <Button title={"Add to Cart"} func ={"addToCart"} id={data.id} price={data.price}></Button>
        </Link>
        <AddOrRemove id={data.id} price={data.price} page={"shop"}></AddOrRemove>
      </div>
      
    </div>
  )
}

export default ProductCard