import axios from './apiClient';

export default {
  login(email, password) {
    return axios.post('/login', {email, password});
  },

  // localStorage.clear()
  logout(data) {
    localStorage.removeItem('user');
    return axios.post('/api/logout', data);
  },

};
