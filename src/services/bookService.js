import { baseURL } from '../config/baseUrl';
import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L25ldy1ib29rLXN0b3JlL3B1YmxpYy9hcGkvbG9naW4iLCJpYXQiOjE3MTkwNjQ1MDQsImV4cCI6MTcxOTA5NjkwNCwibmJmIjoxNzE5MDY0NTA0LCJqdGkiOiJaNlYzSEpIbkZ2WXdudmJkIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.roAXimd6fhSprrZG3wp9L-vQg0-qTTh7L9u8OWS4NjY';
const apiClient = await axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization':'Bearer ' + token,
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
