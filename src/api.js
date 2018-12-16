import axios from 'axios';

/**
 * Api
 */
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;