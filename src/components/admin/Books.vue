<template>
  <div class="bookstore pt-4">
    <div class="flex flex-row justify-between">
      <h1 class="text-3xl font-bold mb-4">Bookstore</h1>

      <!-- Button to open Add Book modal -->
      <button
        @click="showModal('add')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Add Book
      </button>
    </div>

    <!-- Add Book Modal -->
    <transition name="modal">
      <div
        v-if="isModalOpen.add"
        class="fixed inset-0 flex items-center justify-center z-50"
      >
        <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>

        <div
          class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
        >
          <div class="modal-content py-4 text-left px-6">
            <h3 class="text-lg font-bold mb-4">Add New Book</h3>

            <form @submit.prevent="addBook">
              <label for="name" class="block mb-2">Name:</label>
              <input
                type="text"
                id="name"
                v-model="newBook.name"
                required
                class="border border-gray-300 rounded px-3 py-2 w-full"
              />

              <label for="description" class="block mb-2 mt-2"
                >Description:</label
              >
              <textarea
                id="description"
                v-model="newBook.description"
                class="border border-gray-300 rounded px-3 py-2 w-full"
              ></textarea>

              <label for="author" class="block mb-2 mt-2">Author:</label>
              <input
                type="text"
                id="author"
                v-model="newBook.author"
                class="border border-gray-300 rounded px-3 py-2 w-full"
              />

              <label for="price" class="block mb-2 mt-2">Price:</label>
              <input
                type="number"
                id="price"
                v-model.number="newBook.price"
                required
                class="border border-gray-300 rounded px-3 py-2 w-full"
              />

              <div class="mt-4 flex justify-end">
                <button
                  type="button"
                  @click="closeModal('add')"
                  class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>

    <!-- Edit Book Modal -->
    <transition name="modal">
      <div
        v-if="isModalOpen.edit"
        class="fixed inset-0 flex items-center justify-center z-50"
      >
        <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>

        <div
          class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
        >
          <div class="modal-content py-4 text-left px-6">
            <h3 class="text-lg font-bold mb-4">Edit Book</h3>

            <form @submit.prevent="updateBook">
              <label for="edit-name" class="block mb-2">Name:</label>
              <input
                type="text"
                id="edit-name"
                v-model="editedBook.name"
                required
                class="border border-gray-300 rounded px-3 py-2 w-full"
              />

              <label for="edit-description" class="block mb-2 mt-2"
                >Description:</label
              >
              <textarea
                id="edit-description"
                v-model="editedBook.description"
                class="border border-gray-300 rounded px-3 py-2 w-full"
              ></textarea>

              <label for="edit-author" class="block mb-2 mt-2">Author:</label>
              <input
                type="text"
                id="edit-author"
                v-model="editedBook.author"
                class="border border-gray-300 rounded px-3 py-2 w-full"
              />

              <label for="edit-price" class="block mb-2 mt-2">Price:</label>
              <input
                type="number"
                id="edit-price"
                v-model.number="editedBook.price"
                required
                class="border border-gray-300 rounded px-3 py-2 w-full"
              />

              <div class="mt-4 flex justify-end">
                <button
                  type="button"
                  @click="closeModal('edit')"
                  class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Update Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>

    <!-- Displaying existing books -->
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(book, index) in books" :key="index">
          <td class="px-6 py-4 whitespace-nowrap">{{ book.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ book.author }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ book.description }}</td>
          <td class="px-6 py-4 whitespace-nowrap">${{ book.price }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button @click="showModal('edit', index)" class="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">Edit</button>
            <button @click="deleteBook(book.id)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
import bookService from "@/services/bookService";

export default {
  name: "admin-book",
  data() {
    return {
      books: [], // Array to hold books
      newBook: { name: "", description: "", author: "", price: null }, // Object for new book form
      editedBook: { name: "", description: "", author: "", price: null }, // Object for editing book
      isModalOpen: {
        add: false, // Flag for Add Book modal
        edit: false, // Flag for Edit Book modal
      },
      modalMode: "", // Indicates current modal mode ('add' or 'edit')
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await bookService.getBooks();
        this.books = response.data.data;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    showModal(mode, index = null) {
      this.modalMode = mode;
      if (mode === "add") {
        this.newBook = { name: "", description: "", author: "", price: null };
        this.isModalOpen.add = true;
      } else if (mode === "edit" && index !== null) {
        this.editedBook = { ...this.books[index] };
        this.isModalOpen.edit = true;
      }
    },
    closeModal(mode) {
      if (mode === "add") {
        this.isModalOpen.add = false;
      } else if (mode === "edit") {
        this.isModalOpen.edit = false;
      }
    },
    addBook() {
      bookService.addbook(this.newBook);
      // Close modal after adding book
      this.closeModal("add");
    },
    updateBook() {
      // Update the book in the books array
      bookService.editbook(this.editedBook);
      // Close modal after updating book
      this.closeModal("edit");
    },
    deleteBook(id) {
      bookService.deletebook(id);
    },
  },
};
</script>
  
  <style scoped>
/* Optional: You can add custom scoped styles here */
.bookstore {
  max-width: 800px;
  margin: 0 auto;
}

.modal {
  transition: opacity 0.3s ease;
}
.modal-enter {
  opacity: 0;
}
.modal-enter-active {
  opacity: 1;
}
.modal-leave {
  opacity: 1;
}
.modal-leave-active {
  opacity: 0;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal-container {
  max-height: 80vh;
}
</style>
  