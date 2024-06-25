<template>
  <div>
    <input type="text"
           v-model="inputValue"
           @input="handleInput"
           @keydown.down="highlightNext"
           @keydown.up="highlightPrevious"
           @keydown.enter="selectItem"
           class="border rounded p-2 search-bar"
           placeholder="Type to search...">
           
    <ul v-if="filteredItems.length > 0"
        class="border rounded-b mt-1 bg-white shadow-md absolute z-50 search-bar-results">

      <li v-for="(item, index) in filteredItems"
          :key="item.id"
          :class="{ 'bg-blue-200': index === highlightedIndex }"
          @click="selectItem(item)"
          class="cursor-pointer p-2">
              <router-link :to="`/view-book/${item.id}`">
        {{ item.name }}
    </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },    
  data() {
    return {
      inputValue: '',
      filteredItems: [],
      highlightedIndex: -1,
    };
  },
  methods: {
    handleInput() {
    
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().includes(this.inputValue.toLowerCase())
      );
      if(!this.inputValue)
        this.filteredItems = []
      this.highlightedIndex = -1;
    },
    selectItem(item) {
      this.inputValue = item.name;
      this.filteredItems = [];
    },
    highlightNext() {
      if (this.highlightedIndex < this.filteredItems.length - 1) {
        this.highlightedIndex++;
      }
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--;
      }
    },
  },
};
</script>

<style scoped>
.search-bar, .search-bar-results {
    width: 250px;
}
</style>
