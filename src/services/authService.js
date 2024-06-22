import { baseURL } from '../config/baseUrl';
import axios from 'axios';

const apiClient = await axios.create({
  baseURL: baseURL,
});


export default {
  login(email, password) {
    return apiClient.post(baseURL + '/login', {email, password});
  },

  // localStorage.clear()
  logout(data) {
    return apiClient.post('/api/logout', data);
  },

};
