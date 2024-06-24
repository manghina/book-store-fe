<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Nuovo libro</h2>
    <form @submit.prevent="handleSubmit">

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Titolo del libro</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Descrizione (max 500 caratteri)</label>
        <input
          type="text"
          id="description"
          v-model="form.description"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Autore</label>
        <input
          type="text"
          id="author"
          v-model="form.author"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Url della Foto di copertina</label>
        <input
          type="text"
          id="photo"
          v-model="form.photo"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="name" class="block text-gray-700">Prezzo al pubblico</label>
        <input
          type="number"
          id="price"
          v-model="form.price"
          class="mt-2 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        :disabled="false"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Aggiungi
      </button>
    </form>
  </div>
</template>
<script>
import service from '../../services/bookService'
import { useRoute } from 'vue-router';

export default {
  name: 'app-book-form',
  setup() {
    const route = useRoute();
    const id = route.params.id;
    return { id };
  },  
  data() {
    return {
      form: {
        id : 0,
        name: '1',
        description: '1',
        author: '1',
        photo: '1',
        price: '1',
      },
    };
  },
  mounted() {
    const route = useRoute();
    const itemId = route.params.id;
    if (itemId) {
      this.fetchBook(itemId);
    }
  },  
  methods: {
   async fetchBook(id) {
    try {
      const response = await service.get(id);
      this.form = response.data.data
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    },
      handleSubmit() {
        !this.id ? 
        service.create(this.form)
        .then(response => {
          this.form = response.data
          this.id = response.data.id
          console.log(response)
          alert("create")
        })
       :
        service.update(this.form)
        .then(response => {
          console.log(response)
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
