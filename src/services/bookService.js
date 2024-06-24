<<<<<<< HEAD
import apiClient from './apiClient';
=======
import axios from './apiClient';
const route = '/book'
>>>>>>> 7364d9715d2a73ba3e3443a3e756de7d27316c01

export default {
  
  getBooks() {
<<<<<<< HEAD
    return apiClient.get('/books');
  },
  addbook(data) {
    return apiClient.put('/api/book', data);
  },
  getbook(id) {
    return apiClient.get(`/api/book/${id}`)
  },
  editbook(data) {
    return apiClient.post('/api/book', data);
  },

  deletebook(id) {
    return apiClient.delete(`/api/book/${id}`);
  },
=======
    return axios.get('/books');
  },

  getBook(id) {
    return axios.get('/book/' + id);
  },

  create(data) {
    return axios.put('/api' + route, data);
  },

  update(data) {
    return axios.post('/api' + route, data);
  },

  delete(data) {
    return axios.delete('/api' + route + '/' + data.id);
  }

>>>>>>> 7364d9715d2a73ba3e3443a3e756de7d27316c01
};
