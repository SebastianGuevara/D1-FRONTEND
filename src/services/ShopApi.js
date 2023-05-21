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
