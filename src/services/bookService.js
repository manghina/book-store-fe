import axios from './apiClient';
const route = '/book'

export default {
  getBooks() {
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

};
