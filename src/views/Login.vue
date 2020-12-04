<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-9 col-md-6 col-lg-4 text-center">
        <img src="../assets/logo-instagram.png" alt="logo" width="180">
        <div class="mt-5">
          <button class="btn btn-primary btn-sm w-100">
            <i class="fab fa-facebook mr-1"></i> Continuar com o facebook
          </button>
        </div>
        <div class="row my-3">
          <div class="col-5"><hr /></div>
          <div class="col-2">
            <strong>OU</strong>
          </div>
          <div class="col-5"><hr /></div>
        </div>
        <form class="mb-4">
          <div class="form-group">
            <input type="text" class="form-control bg-light-2" v-model="username" placeholder="Nome de usuário">
          </div>
          <div class="form-group">
            <input type="password" class="form-control bg-light-2" v-model="password" placeholder="Senha">
          </div>
          <div class="text-right">
            <a href="">
              Esqueceu sua senha?
            </a>
          </div>
          <button type="button" class="btn btn-primary w-100 btn-sm mt-3" @click="doLogin()" :disabled="loginButtonDisabled">
            <i class="fas fa-spin fa-spinner" v-show="isLoadingLogin"></i>
            {{ isLoadingLogin ? "Entrando" : "Entrar" }}
          </button>
        </form>
        <router-link to="/register" class="text-muted">
          Não tem uma conta? <strong class="text-primary">Cadastre-se.</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-light-2 {
  background: #ededed;
}
</style>

<script>
import { mapState, mapMutations } from 'vuex'

// @ is an alias to /src
export default {
  name: "Login",
  data () {
    return {
      username: '',
      password: '',
      formError: {
        email: '',
        password: ''
      },
      errorMessages: {
        "auth/invalid-email": {
          field: 'email',
          message: "O E-mail informado não é valido."
        },
        "auth/weak-password": {
          field: 'password',
          message: "A senha informada deve conter no mínimo 6 caractéres"
        }
      },
      isLoadingLogin: false,
    }
  },
  methods: {
    ...mapMutations(["USER_SET_STATE"]),
    doLogin () {
      this.isLoadingLogin = true

      this.$fireBase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(({ user }) => {
        const userInfo = {
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        }

        this.USER_SET_STATE(userInfo)

        localStorage.setItem("auth_user", JSON.stringify(userInfo))
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        console.log(errorCode, errorMessage);
      })
      .then(() => this.isLoadingLogin = false);
    }
  },
  computed: {
    ...mapState({
      user: 'user'
    }),
    loginButtonDisabled () {
      return this.password == '' || this.username == '' || this.isLoadingLogin
    }
  }
};
</script>
