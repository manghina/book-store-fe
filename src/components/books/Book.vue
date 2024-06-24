<template>
    <div class="book-item">
      <img :src="book.photo" alt="Book cover" class="mb-2">
      <div class="flex justify-between items-center">
        <h6 class="font-semibold">{{ book.name }}</h6>
      </div>
      <p>di {{ book.author }}</p>
      <p class="flex justify-between items-center mt-2">
        <span class="font-bold text-red-500">{{ book.price }} €</span> &nbsp;
        <router-link :to="`/view-book/${book.id}`">
          <button class="px-3 py-1 text-white bg-red-500">Scopri di più <i class="fa-search fa"></i></button>
        </router-link>
      </p>
    </div>
</template>
<script>
export default {
  name: 'app-book',
  props: {
    book: {
      type: Object,
      required: true,
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
