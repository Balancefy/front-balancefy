import axios from "axios";

const api = axios.create({
    baseURL: 'http://api-balancefy.ddns.net:8080',
})

export default api;