<template>
  <header>
    <nav class="p-2 bg-red-700">
      <div class="flex items-center justify-between mt-2 mb-1 text-white">
        <div class="col-2">
          <HamburgerMenu />
        </div>
        <div class="col-2">
          <div class="flex items-center">
            <a href="/">
              <img src="https://placehold.co/40x40" alt="Logo" class="mr-2">
              <h4 class="text-xl font-bold">Bookstore</h4>
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="flex items-center justify-between ">
            <span class="search-icon"><i class="fa fa-search"></i></span>
            <input type="text" placeholder="Search..." class="p-2 pl-3 search-input border-radius-1 w-100">
          </div>
        </div>
        <div class="col-2">
          <ul class="flex flex-row">
            <router-link :to="`/profile`">
              <li class="flex flex-col header-icon"><a href="#" class="text-lg"><i class="fa fa-star"></i> <br>Preferiti</a></li>
              <li class="flex flex-col header-icon"><a href="#" class="text-lg"><i class="fa fa-user"></i> <br>Profilo</a></li>
            </router-link>
              <li v-if="isLogged()" @click="logout()"  class="flex flex-col header-icon"><a href="#" class="text-lg"><i class="fa fa-sign-out"></i> <br>Logout</a></li>
              <li v-if="!isLogged()" @click="login()"  class="flex flex-col header-icon"><a href="#" class="text-lg"><i class="fa fa-sign-in"></i> <br>Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HamburgerMenu from './common/HamburgerMenu'
import service from '../services/authService';
import router from '../router'

export default {
  name: 'AppHeader',
  components : { HamburgerMenu },
  data() {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
      isAdmin : user && user.role === 'admin'
    }
  },
  methods : {
    logout() {
      service.logout()
    },
    login() {
          router.replace("/login")
    },
    isLogged() {
      return localStorage.getItem("user") !== null
    }
  }
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}
.search-icon {
    position: relative;
    left: 25px;
    color: #00000080
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
nav ul li a{
  font-size: 15px;
}
.search-input {
  padding-left: 36px !important;
}
</style>
