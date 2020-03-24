import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.29.4.27:3333',
});



export default api;