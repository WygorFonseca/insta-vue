import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import ProfileOptions from "../views/ProfileOptions.vue";
import ViewPost from "../views/ViewPost.vue";
import Stories from "../views/Stories.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login"
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
    name: "ViewPost",
    path: "/post/:id",
    component: ViewPost,
    meta: {
      auth: true
    },
    props: true
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      auth: false,
      authHidden: true // true => não pode ser vista por um usuário logado
    }
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    meta: {
      auth: false,
      authHidden: true // true => não pode ser vista por um usuário logado
    }
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
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(toRoute => toRoute.meta.auth);

  const checkAuth = () => {
    console.log("CHECK AUTH CALLED");

    // Verifica se esta autenticado através do estado da aplicação
    if (store.state.user != null) return true;

    console.log("NÂO AUTENTICADO VIA STORE");

    // Verifica se esta autenticado através do localStorage e seta o estado
    const authUserInfo = localStorage.getItem("auth_user");

    if (authUserInfo) {
      store.commit("USER_SET_STATE", JSON.parse(authUserInfo));
    }

    return authUserInfo != null;
  };

  const isAuthenticated = checkAuth();

  if (authRequired) {
    // Verifica se a rota precisa de autenticação
    isAuthenticated ? next() : next({ path: "/login" });
  } else {
    // Caso não precise de autenticação continua normalmente
    if (
      to.matched.some(toRoute => toRoute.meta.authHidden) &&
      isAuthenticated
    ) {
      next({ path: "/" }); // Redireciona para home caso a página seja apenas para "guests" e não para autenticados
    } else {
      next(); // Procede
    }
  }
});

export default router;
