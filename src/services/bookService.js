import { baseURL } from '../config/baseUrl';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});
/*
apiClient.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});
*/
export default {
  getBooks() {
    return apiClient.get('/books');
  },

  postMessage(data) {
    return apiClient.post('/api/message', data);
  },

};
