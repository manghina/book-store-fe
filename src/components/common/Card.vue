<template>
  <div class="pt-2">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold">Books</h2>
      <select class="p-2 border rounded">
        <option value="high-to-low">Price: High to Low</option>
        <option value="low-to-high">Price: Low to High</option>
      </select>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="book in books" :key="book.id" class="p-0 p-2 text-left border">
        <img :src="book.image" alt="Book cover" class="mb-2">
        <h6 class="font-semibold">{{ book.title }}</h6>
        <p>by {{ book.author }}</p>
        <p class="flex">
          Rs.&nbsp;
          <span class="line-through">({{ book.originalPrice }})</span> &nbsp;
          <span class="font-bold text-red-500">{{ book.price }}.00</span> &nbsp;
        </p>
        <div class="flex justify-between mt-2">
          <button class="px-3 py-1 text-white bg-red-500">Add to Bag</button>
          <button class="px-3 py-1 border">Wishlist</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      books: [
        { id: 1, title: "Don't Make Me Think", author: 'Steve Krug', price: 1500, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 2, title: 'The Dark Tower', author: 'Stephen King', price: 999, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 3, title: 'The Night Shift', author: 'Stephen King', price: 1999, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 4, title: 'The Origin', author: 'Dan Brown', price: 170, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 5, title: 'The Girl in Room 105', author: 'Chetan Bhagat', price: 199, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 6, title: 'Just After Sunset', author: 'Stephen King', price: 500, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 7, title: 'Angels and Demons', author: 'Dan Brown', price: 300, originalPrice: 2000, image: 'https://placehold.co/334x200' },
        { id: 8, title: 'Angels and Demons', author: 'Dan Brown', price: 300, originalPrice: 2000, image: 'https://placehold.co/334x200' }
      ]
    }
  }
}
</script>