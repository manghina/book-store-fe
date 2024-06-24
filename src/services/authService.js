import axios from './apiClient';
import router from '../router'

export default {
  async login(email, password) {
    return axios.post('/login', {email, password});
  },

  logout(data) {
    localStorage.removeItem('user');
    return axios.post('/api/logout', data)
    .then(() => {
      router.replace("/")
    })  
  },

};
