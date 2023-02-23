import { TrashSimple } from 'phosphor-react'
import React, { useContext , useState, useEffect} from 'react'
import AddOrRemove from '../../components/AddOrRemove/AddOrRemove'
import { ShopContext } from '../../context/ShopContextProvider'
import styles from './CardForCart.module.css'

const CardForCart = ({data}) => {
    const {qtn, deleteFromCart}=useContext(ShopContext)
    const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/alisnobba/products/${data.id}`)
      .then(response => response.json())
      .then(data => {setDetail(data)})
      .catch(error => console.error(error));
  }, []);
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
        </div>
        <div className={styles.row}>
            <div className={styles.productContainer}>
                <div className={styles.productImage}>
                    <img src={detail.imgLink}></img>
                </div>
                <div className={styles.prodNameAndTrash}>
                    <div>{detail.name}</div>
                    <div><TrashSimple id={data.id} size={32} onClick={()=>{deleteFromCart(data.id)}}></TrashSimple></div>
                </div>
            </div>
            <div>Rs: {data.price}</div>
            <div>
                <AddOrRemove id={data.id} price={data.price} page="cart"></AddOrRemove>
            </div>
            <div>{data.price * qtn[data.id]}</div>
        </div>
        
    </div>
  )
}

export default CardForCart