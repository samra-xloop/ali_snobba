import { React, useState, useEffect } from 'react';
import CardForCart from './CardForCart';
import styles from './ShoppingCart.module.css'
import data  from '../../data/data'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom'

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/alisnobba/products")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
  }, [])

  useEffect(() => {
    fetch('http://localhost:8000/api/cart')
      .then(response => response.json())
      .then(data => {setCartItems(data) })
      .catch(error => console.error(error));
  }, [cartItems]);

  return (
    <div>
      <div className={styles.shoppingCartContainer}>
        {cartItems.map((data) => {
          return (<CardForCart key={data.id} data={data}></CardForCart>)
        })}
      </div>
      <div className={styles.totalPrice}>
        <div>
            Order Total: <span>{cartItems.map(cart => cart.totalPrice).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
        </span>

        </div>
        
      </div>
      <div className={styles.buttonDiv}>
        <div>
          <Link to='/'><Button title={"Return To Shopping"} func ={""} id={data.id} price={data.price}></Button></Link>
        </div>
        <div>
          <Link to='/thanks'> <Button title={"Checkout"} func ={"checkout"} id={data.id} price={data.price}></Button></Link>
        </div>
      </div>
    </div>

  )
}

export default ShoppingCart