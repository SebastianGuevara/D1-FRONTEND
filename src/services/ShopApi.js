import axios from "axios";

export const getProducts = () =>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8010/api/products',
        headers: { }
      };

      return axios.request(config)     
}

export const sellProducts = (cart) =>{
  const newCart= cart.map((product)=>{return {code: product.id, unitsToSell: product.quantity}});
  const cartProducts = JSON.stringify({
    "products": newCart,
    "clientDocument": 4324
  })
  
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://localhost:8010/api/sellProducts',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : cartProducts
  };
  
  return axios.request(config);
}