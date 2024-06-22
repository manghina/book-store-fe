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

export default {
  name: 'app-dashboard',
  components: {
    BooksList,
  },
  data() {
    return {
      books: [
        { id: 1, title: "Don't Make Me Think", author: 'Steve Krug', is_in_wishlist:false, price: 1500, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 2, title: 'The Dark Tower', author: 'Stephen King', is_in_wishlist:true, price: 999, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 3, title: 'The Night Shift', author: 'Stephen King', price: 1999, is_in_wishlist:false, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 4, title: 'The Origin', author: 'Dan Brown', price: 170, is_in_wishlist:false, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 5, title: 'The Girl in Room 105', author: 'Chetan Bhagat', is_in_wishlist:true, price: 199, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 6, title: 'Just After Sunset', author: 'Stephen King', price: 500, is_in_wishlist:false, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 7, title: 'Angels and Demons', author: 'Dan Brown', price: 300, originalPrice: 2000, is_in_wishlist:false, image: 'https://placehold.co/334x200' },
        { id: 8, title: 'Angels and Demons', author: 'Dan Brown', price: 300, originalPrice: 2000, is_in_wishlist:false, image: 'https://placehold.co/334x200' }
      ]
    }
  },
  mounted() {
    // this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await service.getBooks();
        this.books = response.data.data; // Adjust if your API response structure is different
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
