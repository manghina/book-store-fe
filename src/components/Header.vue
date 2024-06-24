<template>
  <header>
    <nav class="p-2 bg-red-700 flex flex-row">
      <button
        @click="isOpen = !isOpen"
        class="items-center px-3 py-2 rounded outline-none md:hidden flex text-white"
      >
        <svg
          class="h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z" />
        </svg>
      </button>
      <div
        class="container flex items-center justify-between mt-2 mb-1 text-white"
      >
        <div class="col-3">
          <div class="flex items-center">
            <img src="https://placehold.co/40x40" alt="Logo" class="mr-2" />
            <router-link to="/"
              ><h4 class="text-xl font-bold">Bookstore</h4></router-link
            >
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
          <ul class="flex justify-end">
            <router-link to="/books"
              ><li class="flex flex-col">
                <a href="#" class="text-lg"
                  ><i class="fa fa-book"></i> <br />Books</a
                >
              </li></router-link
            >
            <router-link to="/users"
              ><li class="flex flex-col">
                <a href="#" class="text-lg"
                  ><i class="fa fa-users"></i> <br />Users</a
                >
              </li></router-link
            >
            <router-link to="/profile"
              ><li class="flex flex-col">
                <a href="#" class="text-lg"
                  ><i class="fa fa-user"></i> <br />Profile</a
                >
              </li></router-link
            >
            <router-link to="/cart"
              ><li class="flex flex-col">
                <a href="#" class="text-lg"
                  ><i class="fa fa-cart-plus"></i> <br />Cart</a
                >
              </li></router-link
            >
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isOpen: true,
    };
  },
};
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
