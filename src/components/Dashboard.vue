<template>
  <h1>This is a dashboard</h1>
  <div class="md:container md:mx-auto h-100">
    <div class="grid gap-4 grid-cols-4 ">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>

  <p v-if="books">{{ books }}</p>
</template>

<script>
import Card from './common/Card.vue'
import service from '../services/bookService'

export default {
  name: 'app-dashboard',
    components: {
    Card
  },
  data() {
    return {
      books: null,
    };
  },
  mounted() {
    service.getBooks()
      .then(response => {
        this.books = response.data.books;
      })
      .catch(error => {
        console.error(error);
      });
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
