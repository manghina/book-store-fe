<template>
  <div>
    <!-- Hamburger Icon -->
    <button @click="isOpen = !isOpen"
            class="block text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path v-if="!isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm18 6H3v-2h18v2z"/>
        <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M1.414 3.414l21 21-1.414 1.414-21-21 1.414-1.414zm21 0l-21 21 1.414 1.414 21-21-1.414-1.414z"/>
      </svg>
    </button>

    <!-- Navigation Links -->
    <nav :class="isOpen ? 'block' : 'hidden'" class="lg:flex lg:items-center lg:w-auto">
      <div class="flex flex-col lg:flex-row">
        <a href="/books-table" class="text-white">Books</a>
        <a href="/users" class="text-white">Users</a>
      </div>
    </nav>
  </div>    
</template>