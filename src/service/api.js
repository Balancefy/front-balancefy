import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-balancefy.herokuapp.com',
})

export default api;