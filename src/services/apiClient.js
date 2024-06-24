import axios from 'axios';
import { baseURL } from '../config/baseUrl';

const axiosInstance = axios.create({
    baseURL: baseURL, // Your Laravel API endpoint
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export default axiosInstance;