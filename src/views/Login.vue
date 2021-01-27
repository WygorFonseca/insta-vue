<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-9 col-md-6 col-lg-4 text-center">
        <img src="../assets/logo-instagram.png" alt="logo" width="180" />
        <div class="mt-5">
          <!-- <button class="btn btn-primary btn-sm w-100">
            <i class="fab fa-facebook mr-1"></i> Continuar com o facebook
          </button> -->
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
            <input
              type="text"
              class="form-control bg-light-2"
              :class="formError.email ? 'is-invalid' : ''"
              id="input-username"
              aria-describedby="input-username"
              v-model="username"
              placeholder="E-mail"
            />
            <div id="input-username" class="invalid-feedback text-left">
              {{ formError.email }}
            </div>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control bg-light-2"
              :class="formError.password ? 'is-invalid' : ''"
              id="input-password"
              aria-describedby="input-password"
              v-model="password"
              placeholder="Senha"
            />
            <div id="input-password" class="invalid-feedback text-left">
              {{ formError.password }}
            </div>
          </div>
          <div class="text-right">
            <a href="#" class="disabled">
              Esqueceu sua senha?
            </a>
          </div>
          <button
            type="button"
            class="btn btn-primary w-100 btn-sm mt-3"
            @click="doLogin()"
            :disabled="loginButtonDisabled"
          >
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
import { mapState, mapMutations } from "vuex";

// @ is an alias to /src
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      formError: {
        email: "",
        password: ""
      },
      errorMessages: {
        "auth/invalid-email": {
          field: "email",
          message: "O E-mail informado não é valido."
        },
        "auth/weak-password": {
          field: "password",
          message: "A senha informada deve conter no mínimo 6 caractéres"
        },
        "auth/user-not-found": {
          field: "email",
          message: "Usuário não encontrado."
        },
        "auth/wrong-password": {
          field: "password",
          message: "A Senha está incorreta."
        },
        "auth/too-many-requests": {
          field: "email",
          message:
            "Acesso bloqueado por muitas tentativas. Tente-novamente mais tarde."
        }
      },
      isLoadingLogin: false
    };
  },
  methods: {
    ...mapMutations(["USER_SET_STATE"]),
    doLogin() {
      this.isLoadingLogin = true;
      this.formError.email = "";
      this.formError.password = "";

      this.$fireBase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(({ user }) => {
          const userInfo = {
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            emailVerified: user.emailVerified
          };

          this.USER_SET_STATE(userInfo);

          localStorage.setItem("auth_user", JSON.stringify(userInfo));

          this.$router.replace("/");
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          if (this.errorMessages[errorCode]) {
            this.formError[
              this.errorMessages[errorCode].field
            ] = this.errorMessages[errorCode].message;
          } else {
            this.formError.email = errorMessage;
          }

          console.log(errorCode, errorMessage);
        })
        .then(() => (this.isLoadingLogin = false));
    }
  },
  computed: {
    ...mapState({
      user: "user"
    }),
    loginButtonDisabled() {
      return this.password == "" || this.username == "" || this.isLoadingLogin;
    }
  }
};
</script>
