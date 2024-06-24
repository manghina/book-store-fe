<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Profilo utente</h2>
    <form @submit.prevent="handleSubmit">

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Username</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Nome</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="surname" class="block text-gray-700">Cognome</label>
        <input
          type="text"
          id="surname"
          v-model="form.surname"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="age" class="block text-gray-700">Età</label>
        <input
          type="number" min="18"
          id="age"
          v-model="form.age"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label for="sex" class="block text-gray-700">Sesso</label>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" v-model="form.sex" value="M" class="form-radio text-green-600" />
            <span class="ml-2">Maschio</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="radio" v-model="form.sex" value="F" class="form-radio text-green-600" />
            <span class="ml-2">Femmina</span>
          </label>
        </div>
        <p> No, non sono previste altre opzioni </p>
      </div>

      <button
        type="submit"
        :disabled="false"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Aggiorna
      </button>
    </form>
  </div>
</template>
<script>

import service from '../../services/userService'

export default {
  name: 'app-book-form',
  setup() {
    const id = JSON.parse(localStorage.getItem("user")).id
    return { id };
  },  
  data() {
    return {
      form: {
        id : 0,
        email: '1',
        password: '1',
        name: '1',
        surname: '1',
        role: '1',
        age: '1',
        sex: '1'
      },
    };
  },
  mounted() {
      this.fetchUser(this.id);
  },  
  methods: {
   async fetchUser(id) {
    try {
      const response = await service.get(id);
      const user = response.data.data

      this.form.id = id
      this.form.email = user.email
      this.form.password = user.password
      this.form.name = user.name
      this.form.surname = user.surname
      this.form.age = user.age
      this.form.sex = user.sex
      this.form.role = user.role

    } catch (error) {
      console.error('Error fetching user:', error);
    }
    },
      handleSubmit() {

        service.update(this.form)
        .then(response => {
          const user = response.data.data
          localStorage.setItem("user", JSON.stringify(user))
          alert("aggiornato")
        })

      },
    },
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>
