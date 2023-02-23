import { React, useContext } from 'react';
import styles from './Button.module.css';
import { ShopContext } from '../../context/ShopContextProvider';

const Button = ({ title, func, id, price }) => {
  const { addToCart, checkout } = useContext(ShopContext);

  const handleClick = () => {
    if (func === 'addToCart') {
      addToCart(id, price);
    } else if (func === 'checkout') {
      checkout();
    }
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.button}>
        {title}
      </button>
    </div>
  );
};

export default Button;
