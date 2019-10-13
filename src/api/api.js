import * as axios from 'axios';


export  const getProducts = () => {
    return axios
        .get(`https://api.myjson.com/bins/a5tj6`)
        .then(response => {
            return response.data
        })
}