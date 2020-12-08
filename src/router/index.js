import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import ProfileOptions from "../views/ProfileOptions.vue";
import Stories from "../views/Stories.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login",
  },
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      auth: false,
      authHidden: true, // true => não pode ser vista por um usuário logado
    },
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    meta: {
      auth: false,
      authHidden: true, // true => não pode ser vista por um usuário logado
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      auth: true
    }
  },
  {
    path: "/profile/options",
    name: "Profile Options",
    component: ProfileOptions,
    meta: {
      auth: true
    }
  },
  {
    path: "/stories/:storyId",
    name: "Stories",
    component: Stories,
    meta: {
      auth: true
    },
    props: true
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(toRoute => toRoute.meta.auth)

  const checkAuth = () => {
    console.log("CHECK AUTH CALLED");

    // Verifica se esta autenticado através do estado da aplicação
    if(store.state.user != null) return true;

    console.log("NÂO AUTENTICADO VIA STORE");

    // Verifica se esta autenticado através do localStorage e seta o estado
    const authUserInfo = localStorage.getItem("auth_user")

    if(authUserInfo) {
      store.commit("USER_SET_STATE", JSON.parse(authUserInfo))
    }

    return authUserInfo != null;
  }

  const isAuthenticated = checkAuth();

  if(authRequired){ // Verifica se a rota precisa de autenticação
    isAuthenticated ? next() : next({ path: '/login' })
  } else { // Caso não precise de autenticação continua normalmente
    if (to.matched.some(toRoute => toRoute.meta.authHidden) && isAuthenticated) {
      next({ path: '/' }) // Redireciona para home caso a página seja apenas para "guests" e não para autenticados
    } else {
      next() // Procede
    }
  }

  // if (!to.meta.auth) { // Verifica se a rota pode ser acessada por um usuário nao autenticado
  //   next()
  // } else { // Caso contrario verifica se ele está devidamente autenticado
  //   const token = localStorage.getItem("token"); // Verifica se possui um token
    
  //   if(!token) next({ path: '/login' }) // Redireciona para login
  //   else next() // Autoriza acesso à rota
  // }
  // console.log(store);
})


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.authRequired)) {
//     if (store.state.user.sessionToken === undefined) {
//       const sessionToken = localStorage.getItem('sessionToken')
//       const paginas = localStorage.getItem('paginas')
//       const permissions = localStorage.getItem('permissions')
//       const profile = localStorage.getItem('profile')
//       if (sessionToken !== undefined && sessionToken !== '' && sessionToken !== null) {
//         store.commit('user/SET_STATE', {
//           sessionToken,
//           loading: false,
//           authorized: true,
//           profile: JSON.parse(profile),
//           permissions: JSON.parse(permissions),
//           paginas: JSON.parse(paginas),
//         })
//       }
//     }
//     if (!store.state.user.authorized || store.state.user.sessionToken === undefined) {
//       // Se não estiver autorizado, é redirecionado para a tela de login
//       next({
//         path: '/authentication/login',
//         query: { redirect: to.fullPath },
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })


export default router;
