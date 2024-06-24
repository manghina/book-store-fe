<template>
  <header>
    <nav class="p-2 bg-red-700">
      <div class="container flex items-center justify-between mt-2 mb-1 text-white">
        <div class="col-3">
          <div class="flex items-center">
            <img src="https://placehold.co/40x40" alt="Logo" class="mr-2">
            <h4 class="text-xl font-bold">Bookstore</h4>
          </div>
        </div>
        <div class="col-6">
          <div class="flex items-center justify-between">
            <span class="search-icon"><i class="fa fa-search"></i></span>
            <input
              type="text"
              placeholder="Search..."
              class="p-2 pl-3 search-input border-radius-1 w-100"
            />
          </div>
        </div>
        <div class="col-3">
          <ul class="flex justify-end text-center text-right">
            <li class="flex flex-col"><a href="#" class="text-lg"><i class="fa fa-user"></i> <br>Profile</a></li>
            <li  class="flex flex-col"><a href="#" class="text-lg"><i class="fa fa-cart-plus"></i> <br>Cart</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HamburgerMenu from './common/HamburgerMenu'
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}
.search-icon {
  position: relative;
  left: 25px;
  color: #00000080;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
nav ul li a {
  font-size: 15px;
}
.search-input {
  padding-left: 36px !important;
}
</style>
