<template>
    <div class="book-item">
      <img :src="book.photo" alt="Book cover" class="m-2 m-auto">
      <div class="pt-4 text-center m-auto">
      <div class="text-center">
        <h6 class="font-semibold">{{ book.name }}</h6>
      </div>
      <p>di {{ book.author }}</p>
      <p class="">
        <span class="font-bold text-red-500">{{ book.price }} €</span> &nbsp;
      </p>
      <router-link :to="`/view-book/${book.id}`">
        <button class="px-3 py-1 text-white bg-red-500">Scopri di più <i class="fa-search fa"></i></button>
      </router-link>      
      </div>
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
