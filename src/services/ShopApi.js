import axios from "axios";

export const getProducts = () =>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://54.161.156.138:8010/api/products',
        headers: { }
      };

      return axios.request(config)     
}

export const sellProducts = (cart, clientDocument) =>{
  const newCart= cart.map((product)=>{return {code: product.id, unitsToSell: product.quantity}});
  const cartProducts = JSON.stringify({
    "products": newCart,
    "clientDocument": clientDocument
  })
  
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://54.161.156.138:8010/api/sellProducts',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : cartProducts
  };
  
  return axios.request(config);
}

export const addProduct = (product) =>{
  let data = JSON.stringify({
    "name": product.name,
    "value": product.value,
    "quantity": product.quantity,
    "id": product.id
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://54.161.156.138:8010/api/product',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  return axios.request(config)
}

export const addStockToProduct = (product) =>{
  let data = JSON.stringify({
    "id": product.id,
    "quantityToAdd": product.quantity
  });
  
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'http://54.161.156.138:8010/api/productStock',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  return axios.request(config)
}

export const getSales = () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://54.161.156.138:8010/api/sale',
    headers: { }
  };
  
  return axios.request(config)
}

export const getSalesById = (userDocument) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://54.161.156.138:8010/api/userSaleHistory/${userDocument}`,
    headers: { }
  };
  
  return axios.request(config);
}