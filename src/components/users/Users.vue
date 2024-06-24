<template>
  <div class="overflow-x-auto">

    <table class="min-w-full bg-white border" v-if="users.length">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b"></th>
          <th class="py-2 px-4 border-b">Username</th>
          <th class="py-2 px-4 border-b">Password</th>
          <th class="py-2 px-4 border-b">Nome</th>
          <th class="py-2 px-4 border-b">Cognome</th>
          <th class="py-2 px-4 border-b"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">{{ user.id }}</td>
          <td class="py-2 px-4 border-b">{{ user.email }}</td>
          <td class="py-2 px-4 border-b">{{ user.password }}</td>
          <td class="py-2 px-4 border-b">{{ user.name }}</td>
          <td class="py-2 px-4 border-b">{{ user.surname }}</td>
          <td class="py-2 px-4 border-b">
            <router-link :to="`/add-user/${user.id}`">
              <i class="fa fa-edit ml-2 mr-2 cursor-pointer hover:text-blue-500"></i>
            </router-link>

            <i v-if="user.id != 1" @click="deleteUser(user)" class="fa fa-trash ml-2 mr-2 cursor-pointer hover:text-blue-500"></i>
            <i v-if="user.id == 1" @click="cantdeleteUser()" class="fa fa-trash ml-2 mr-2 text-gray-500"></i>

          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="users.length">
      <p>Per inserire un nuovo utente premi <a class="text-blue-500 hover:text-blue-700 focus:text-blue-700 active:text-blue-800" href="add-book">qui</a></p>
    </div>
    <div v-if="!users.length">
      <p>Non sono presenti utenti in memoria, per inserire un nuovo utente premi <a class="text-blue-500 hover:text-blue-700 focus:text-blue-700 active:text-blue-800" href="add-book">qui</a></p>
    </div>
  </div>
</template>
<script>
import service from '../../services/userService';

export default {
  name: 'app-user-table',
  data() {
    return {
      users: [ ]
    }
  },
  mounted() {
    this.fetchUsers();

  },
  methods: {
    async fetchUsers() {
      try {
        const response = await service.all();
        this.users = response.data.data; 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    deleteUser(book) {
      if(confirm("Confermi di voler eliminare l'utente?")) {
        service.delete(book)
        .then(() => {
          alert("deleted")
          this.users = this.books.filter((e) => e.id !=book.id)
        })          
      }
    },
    cantdeleteUser() {
      alert("Non è possibile rimuovere l'amministratore principale del sistema")
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
