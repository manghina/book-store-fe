import axios from './apiClient';
const route = '/wishlist'

export default {
  set(data) {
    return axios.post('/api' + route, data);
  }

};
