import apiClient from './apiClient';

export default {
<<<<<<< HEAD
  login(email, password, router) {
    return apiClient.post('/login', {email, password}).then(res => {
      const token = res.data.token; // Assuming the server sends back a token
      localStorage.setItem("token", token); // Store token in localStorage
      router.push('/')
    });
=======
  async login(email, password) {
    return axios.post('/login', {email, password});
>>>>>>> 7364d9715d2a73ba3e3443a3e756de7d27316c01
  },

  // localStorage.clear()
  logout(data) {
    localStorage.removeItem('token');
    return apiClient.post('/api/logout', data);
  },
};
