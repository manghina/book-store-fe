<template>
  <div class="overflow-x-auto">

    <table class="min-w-full bg-white border" v-if="books.length">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b"></th>
          <th class="py-2 px-4 border-b">Titolo</th>
          <th class="py-2 px-4 border-b">Prezzo</th>
          <th class="py-2 px-4 border-b"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b"><img :src="book.photo" class="featured-icon" alt="Dynamic Image" /></td>
          <td class="py-2 px-4 border-b">{{ book.name }}</td>
          <td class="py-2 px-4 border-b">{{ book.price }}</td>
          <td class="py-2 px-4 border-b">
            <router-link :to="`/add-book/${book.id}`">
              <i class="fa fa-edit ml-2 mr-2 cursor-pointer hover:text-blue-500"></i>
            </router-link>
            <i @click="deleteBook(book)"  class="fa fa-trash ml-2 mr-2 cursor-pointer hover:text-blue-500"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="books.length">
      <p>Per inserire un nuovo libro premi <a class="text-blue-500 hover:text-blue-700 focus:text-blue-700 active:text-blue-800" href="add-book">qui</a></p>
    </div>
    <div v-if="!books.length">
      <p>Non sono presenti libri in memoria, per inserire un nuovo libro premi <a class="text-blue-500 hover:text-blue-700 focus:text-blue-700 active:text-blue-800" href="add-book">qui</a></p>
    </div>
  </div>
</template>
<script>
import service from '../../services/bookService';

export default {
  name: 'app-book-table',
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
        const response = await service.getBooks();
        this.books = response.data.data; 
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
    deleteBook(book) {
      if(confirm("Confermi di voler eliminare il libro?")) {
        service.delete(book)
        .then(() => {
          alert("deleted")
          this.books = this.books.filter((e) => e.id !=book.id)
        })          
      }
    },
    update(book){
      service.update(book)
      .then(() => {
        alert("updated")
      })
    }
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
