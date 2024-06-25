<template>
  <header>
    <nav class="p-2 bg-red-700">
      <div class="flex justify-between text-white">
        <div class="flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="items-center px-3 py-2 rounded outline-none text-white"
          >
            <svg
              class="h-8 w-8 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z" />
            </svg>
          </button>
          <div class="">
            <a href="/" class="flex items-center">            
              <h4 class="text-xl font-bold">Bookstore</h4>
            </a>
          </div>
        </div>
        <div class="flex items-center gap-4">
            <div class="flex flex-col header-icon"><router-link :to="`#`"><i class="fa fa-star"></i> <br>Preferiti</router-link></div>
            <div class="flex flex-col header-icon"><router-link :to="`/profile`"><i class="fa fa-user"></i> <br>Profilo</router-link></div>
            <div v-if="isLogged" @click="logout()"  class="flex flex-col header-icon"><router-link :to="`#`"><i class="fa fa-sign-out"></i> <br>Logout</router-link></div>
            <div v-if="!isLogged" @click="login()"  class="flex flex-col header-icon"><router-link :to="`#`"><i class="fa fa-sign-in"></i> <br>Login</router-link></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import service from '../services/authService';
import router from '../router'
//import HamburgerMenu from './common/HamburgerMenu'

export default {
  name: 'AppHeader',
  components : { /*HamburgerMenu*/ },
  data() {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
      isAdmin : user && user.role === 'admin',
      isLogged : user !== null
    }
  },
  computed : {
    user() {
      return this.user
    }    
  },
  methods : {
    logout() {
      service.logout()
    },
    login() {
          router.replace("/login")
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
