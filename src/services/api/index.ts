import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.10.111:3005',
});

export default api;