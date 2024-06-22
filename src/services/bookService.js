import axios from './apiClient';

export default {
  getBooks() {
    // 127.0.0.1:8000/api/books
    return axios.get('/books');
  },

  postMessage(data) {
    return axios.post('/api/message', data);
  },

};
