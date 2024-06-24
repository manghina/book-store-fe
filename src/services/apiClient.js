import axios from 'axios';
import { baseURL } from '../config/baseUrl';

const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL: baseURL, // Your Laravel API endpoint
    headers: {
=======
    baseURL: baseURL,
    headers: localStorage.getItem('token') ? {
>>>>>>> 7364d9715d2a73ba3e3443a3e756de7d27316c01
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    } : {}
});

export default axiosInstance;