import apiClient from './apiClient';

export default {
  
  getBooks() {
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
};
