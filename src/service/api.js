import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-balancefy.ddns.net/api',
})

export default api;