import Dashboard from './components/Dashboard.vue'
import Users from './components/users/Users.vue'
import BooksTable from './components/books/BookTable.vue'
import BookForm from './components/books/BookForm.vue'
import Login from './components/Login.vue'

    import { createRouter, createWebHistory } from "vue-router"
    const routeInfos = [
        {
            path : "/",
            name: 'Dashboard',
            component : Dashboard
        },
        {
            path : "/users",
            component : Users
        },
        {
            path : "/books-table",
            component : BooksTable
        },
        {
            path : "/add-book",
            component : BookForm
        },
        {
            path : "/add-book/:id",
            component : BookForm
        },
        {
            path : "/login",
            component : Login
        }
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;