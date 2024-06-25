<template>
    <div class="book-item container">
      <img :src="book.photo" alt="Book cover" class="mb-2 m-auto">
      <div class="flex flex-column justify-center items-center">
      <div><b>Titolo:</b> <h6 class="font-semibold m-2">{{ book.name }}</h6>   </div>
      <div><b>Di:</b> <p class=" m-2">di {{ book.author }}</p></div>
      <div><b>Trama:</b></div>
      <div> <p>{{ book.description }}</p></div>
      <div><b>Prezzo:</b> <span class="font-bold text-red-500">{{ book.price }} €</span> &nbsp;</div>
      <router-link :to="`/view-book/${book.id}`">
        <button @click="toggleIcon" class="px-3 py-1 text-white bg-red-500">{{label}}<i :class="currentIcon"></i></button>
      </router-link>
    </div>

    </div>
</template>
<script>
import service from '../../services/bookService'
import wishService from '../../services/wishService'
import { useRoute } from 'vue-router';

export default {
  name: 'app-book-view',

  data() {

    const route = useRoute();
    const book_id = route.params.id;
    let user_id = 0
    let user = localStorage.getItem("user")
    if(user) {
      user = JSON.parse(user)
      user_id = user.id
    }  
    return {
      book_id : book_id,
      user_id : user_id,
      book: {
        id : 0,
        name: '1',
        description: '1',
        author: '1',
        photo: '1',
        price: '1',
        isWish : true,
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
  computed: {
    currentIcon() {
      return this.book.isWish ? 'fa-heart-o fa' : 'fa-heart fa';
    },
    label() {
      return this.book.isWish ? 'Aggiungi ai preferiti ' : 'Rimuovi dai preferiti ';
    },
  },  
  methods: {
    toggleIcon() {
      const book_id = this.book_id
      const user_id = this.user_id
      const data= { book_id, user_id }
        wishService.set(data)
        .then(() => {
          this.book.isWish = !this.book.isWish
        }) 
    },    
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
