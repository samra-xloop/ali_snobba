import {React, useContext} from 'react'
import AddOrRemove from '../../components/AddOrRemove/AddOrRemove'
import styles from './DetailedProduct.module.css'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
const DetailedProduct = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.prodImage}>
        <img src={data.imgLink}></img>
      </div>
      <div>
        <div className={styles.detail}>
          <h2>{data.name}</h2>
          <p>{data.longD}</p>
          <p>RS:<span >{data.price}</span></p>
        </div>
        <div className={styles.btns}>
        <div className={styles.buttons}>
          <AddOrRemove id={data.id} price={data.price} page={"detail"}></AddOrRemove>
          <Link to="/cart">
          
          <Button title={"Add to Cart"} func ={"addToCart"} id={data.id} price={data.price}></Button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedProduct