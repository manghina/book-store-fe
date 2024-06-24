// Dashboard.vue
<template>
  <div class="md:container md:mx-auto h-100">
    <div class="container grid gap-4">
      <BooksList :books="books"></BooksList>
    </div>
  </div>
</template>

<script>
import BooksList from './../components/books/Books.vue';
import service from '../services/bookService';
import authService from '../services/authService';

export default {
  name: 'app-dashboard',
  components: {
    BooksList,
  },
  data() {
    return {
      books: [ ]
    }
  },
  mounted() {
    this.fetchBooks();
     const response = authService.login('manghina.dario@gmail.com', '12341234')
     localStorage.setItem(response.user)
     console.log("output", response)
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await service.getBooks();
        this.books = response.data.data; 
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
  },
};
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
