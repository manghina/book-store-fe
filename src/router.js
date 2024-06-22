import Dashboard from './components/Dashboard.vue'
import Users from './components/users/Users.vue'
import Books from './components/books/Books.vue'

    import { createRouter, createWebHistory } from "vue-router"
    const routeInfos = [
        {
            path : "/",
            component : Dashboard
        },
        {
            path : "/users",
            component : Users
        },
        {
            path : "/books",
            component : Books
        }
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;