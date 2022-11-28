import axios from "axios";

const api = axios.create({
    baseURL: 'https://balancefy.ddns.net/api',
})

export default api;
