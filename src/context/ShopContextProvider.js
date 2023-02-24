import React, { createContext, useState ,useEffect} from 'react'
import useData from '../data/useData';

export const ShopContext=createContext(null)

const defaultCart=(data)=>{
  let cart={};

  for (let i=1 ; i < data.length+1 ; i++){
    cart[i]=1;
  }
  return cart;
};


const ShopContextProvider = (props) => {

  const data = useData('http://localhost:5000/api/alisnobba/products');
const [cartItems, setCartItems] = useState(defaultCart([])); 
const [qtn, setQtn] = useState(defaultCart([]));

useEffect(() => {
  if (data) {
    setCartItems(defaultCart(data));
    setQtn(defaultCart(data));
  }
}, [data]);


  

  const qtnInc=(itemId)=>{
    console.log(qtn)
    setQtn((prev)=>({...prev, [itemId]:prev[itemId]+1}))
  }  

  const qtnDec=(itemId)=>{
    console.log(qtn) 
    if (qtn[itemId]>1){
      console.log(qtn)
      setQtn((prev)=>({...prev, [itemId]:prev[itemId]-1}))
     }
  } 

  // const removeFromCart=(itemId,price)=>{
  //   if(qtn[itemId]>1){
  //     const prod={
  //       "id":itemId,
  //       "price":price,
  //       "prdQtn":qtn[itemId],
  //       "totalPrice":price*qtn[itemId]
  //     }
  //     console.log(prod)
  
  //     fetch("http://localhost:8000/api/cart", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(prod)
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       setQtn((prev)=>({...prev, [itemId]:prev[itemId]-1}))
   
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   }
  // }
  const addToCart=(itemId,price)=>{
    const prod={
      "id":itemId,
      "price":price,
      "prdQtn":qtn[itemId],
      "totalPrice":price*qtn[itemId]
    }

    fetch("http://localhost:8000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(prod)
    })
    .catch(error => {
      console.error(error);
    });
  }

  const deleteFromCart=(itemId)=>{
    fetch(`http://localhost:8000/api/cart/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log("deleted succefully")
      } else {
        throw new Error('Delete request failed.');
      }
    })
    .catch(error => {
      console.error(error);
    });

    
  }
  const checkout = () => {
    fetch('http://localhost:8000/api/cart', {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        console.log('All items deleted from the cart.');
      } else {
        throw new Error('Failed to delete items from the cart.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
  const contextValue={checkout,deleteFromCart,qtn, qtnInc,qtnDec, cartItems,addToCart,deleteFromCart}
  return (
       
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider