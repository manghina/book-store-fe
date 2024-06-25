// Dashboard.vue
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" v-model="email" id="email" class="mt-2 p-2 w-full border rounded-lg" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" v-model="password" id="password" class="mt-2 p-2 w-full border rounded-lg" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import authService from '../services/authService';

export default {
  name: 'app-dashboard',
  components: {
  },
  data() {
    return {
      email: 'manghina.dario@gmail.com',
      password: '12341234',
    };
  },
  mounted() {

  },
  methods: {
    handleSubmit() {
     authService.login(this.email, this.password)
       .then(response => {
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('token', response.data.access_token)
          localStorage.setItem('expires_in', response.data.expires_in)
          localStorage.setItem('expires_from', new Date())
          // this.$router.push({ name: 'Dashboard' });
          window.location.href = '/';
      })
    },
  },
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
