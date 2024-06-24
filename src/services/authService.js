import apiClient from './apiClient';

export default {
  login(email, password, router) {
    return apiClient.post('/login', {email, password}).then(res => {
      const token = res.data.token; // Assuming the server sends back a token
      localStorage.setItem("token", token); // Store token in localStorage
      router.push('/')
    });
  },

  // localStorage.clear()
  logout(data) {
    localStorage.removeItem('token');
    return apiClient.post('/api/logout', data);
  },
};
