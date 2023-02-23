import { React, useContext , useEffect} from 'react'
import { Minus, Plus, TrashSimple } from "phosphor-react";
import styles from './AddOrRemove.module.css'
import { ShopContext } from '../../context/ShopContextProvider';


const AddOrRemove = ({ id ,page="shop" }) => {

  const { qtn, qtnInc,qtnDec, deleteFromCart } = useContext(ShopContext);
  useEffect(() => {
    console.log("rerender");
  }, [qtn[id]]);
  return (
    <div className={styles.addRemove}>
    {page==="shop" || page==="detail" ? (
      <Minus onClick={() => qtnDec(id)} size={32} className={styles.minus}></Minus>
    ) : qtn[id] > 1 ? (
      <Minus onClick={() => qtnDec(id)} size={32} className={styles.minus}></Minus>
    ) : (
      <TrashSimple size={32} onClick={() => deleteFromCart(id)} className={styles.trash} />
    )}

    <span className={styles.quantity}>{qtn[id]}</span>
    <Plus onClick={() => qtnInc(id)} size={32} className={styles.plus}></Plus>
  </div>
  )
}

export default AddOrRemove
