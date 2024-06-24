import axios from './apiClient';
const route = '/user'

export default {
  all() {
    return axios.get('api' + '/users');
  },

  get(id) {
    return axios.get('api' + route + '/' + id);
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
