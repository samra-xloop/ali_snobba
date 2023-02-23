import React from 'react';
import {Link} from 'react-router-dom'
import Button from '../../components/Button/Button';
import styles from './Thanks.module.css'
const Thanks = () => {
  return (
    <div className={styles.container}>
      <div>Thank You</div>
      <p>You will soon recieve your items</p>
      <Link to="/"><Button title={"Return To Shopping"} func ={""}></Button></Link>
    </div>
  )
}

export default Thanks