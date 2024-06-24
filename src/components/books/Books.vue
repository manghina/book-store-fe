<!-- BooksList.vue -->
<template>
  <div class="pt-2">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold">Books</h2>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="book in books" :key="book.id" class="p-2 text-left border">
        <Book :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'BooksList',
  components: {
    Book,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
};
</script>
