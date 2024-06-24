<<<<<<< HEAD
import Login from "./components/auth/Login.vue";

import { createRouter, createWebHistory } from "vue-router";
const routeInfos = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: () => import("@/components/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/users",
    component: import("@/components/users/Users.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/books",
    component: import("@/components/admin/Books.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists in localStorage

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // If route requires authentication and user is not authenticated, redirect to login page
    if (!isAuthenticated) {
      next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
      next(); // Proceed to the requested route
    }
  } else {
    next(); // For routes that do not require authentication, proceed normally
  }
});

export default router;
=======
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
>>>>>>> 7364d9715d2a73ba3e3443a3e756de7d27316c01
