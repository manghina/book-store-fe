import axios from './apiClient';
import router from '../router'

export default {
  async login(email, password) {
    return axios.post('/login', {email, password});
  },

  logout(data) {
    localStorage.removeItem('user');
    localStorage.removeItem('expires_from');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('token');
    return axios.post('/api/logout', data)
    .then(() => {
      router.replace("/")
    })  
  },

};
