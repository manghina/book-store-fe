<template>
    <div class="book-item container">
      <img :src="book.photo" alt="Book cover" class="mb-2 m-auto">
      <div class="flex justify-center items-center">
        <h6 class="font-semibold m-2">{{ book.name }}</h6>   <p class=" m-2">di {{ book.author }}</p>
      </div>
      <b>Trama:</b>
      <p>{{ book.description }}</p>
      <p class="flex justify-between items-center mt-2">

        <span class="font-bold text-red-500">{{ book.price }} €</span> &nbsp;
        <router-link :to="`/view-book/${book.id}`">
          <button class="px-3 py-1 text-white bg-red-500">Aggiungi ai preferiti <i class="fa-heart-o fa"></i></button>
          <button class="px-3 py-1 text-white bg-red-500">Rimuovi ai preferiti <i class="fa-heart fa"></i></button>
        </router-link>
      </p>
    </div>
</template>
<script>
import service from '../../services/bookService'
import { useRoute } from 'vue-router';

export default {
  name: 'app-book-view',
  setup() {
    const route = useRoute();
    const id = route.params.id;
    return { id };
  },  
  data() {
    return {
      book: {
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
      this.book = response.data.data
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    }

    },
}
</script>
