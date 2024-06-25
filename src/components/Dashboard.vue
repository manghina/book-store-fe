// Dashboard.vue
<template>
  <div class="md:container md:mx-auto h-100">
    <div class="m-auto mt-4">
      <div class="flex items-center justify-center ">
        <AutoComplete :items="books"/>
            
      </div>
      </div>
    <div class="container grid gap-4">
      <BooksList :books="books"></BooksList>
    </div>
  </div>
</template>

<script>
import AutoComplete from './../components/common/AutoComplete.vue';
import BooksList from './../components/books/BooksList.vue';
import service from '../services/bookService';

export default {
  name: 'app-dashboard',
  components: {
    BooksList,AutoComplete
  },
  data() {
    return {
      books: [ ]
    }
  },
  mounted() {
    this.fetchBooks();

  },
  methods: {
    async fetchBooks() {
      try {
        const response = await service.all();
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
