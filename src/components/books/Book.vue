<template>
    <div class="book-item">
      <img :src="book.image" alt="Book cover" class="mb-2">
      <h6 class="font-semibold">{{ book.title }}</h6>
      <p>by {{ book.author }}</p>
      <p class="flex">
        Rs.&nbsp;
        <span class="line-through">({{ book.originalPrice }})</span> &nbsp;
        <span class="font-bold text-red-500">{{ book.price }}.00</span> &nbsp;
      </p>
      <div class="flex justify-between mt-2">
        <button class="px-3 py-1 text-white bg-red-500"><i class="fa-cart-plus fa"></i> Add to Bag</button>
        <button class="px-3 py-1 border"><i :class="book.is_in_wishlist ? 'fa fa-heart' : 'fa fa-heart-o'"></i> Wishlist</button>
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
