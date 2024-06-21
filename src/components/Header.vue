<template>
  <header>
    <nav class="bg-red-700">
      <ul>
        <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
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
