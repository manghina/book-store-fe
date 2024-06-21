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
</template>

<script>
import Card from './common/Card.vue'

export default {
  name: 'app-dashboard',
    components: {
    Card
  }
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
