<template>
  <Header></Header>
  <div class="flex items-center justify-center h-screen bg-gray-100">
  <RouterView />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
