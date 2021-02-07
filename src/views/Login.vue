<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-9 col-md-6 col-lg-4 text-center">
        <img
          src="../assets/logo-instagram.png"
          alt="logo"
          width="180"
          height="64"
        />
        <div class="mt-5">
          <button
            class="btn btn-primary btn-sm w-100"
            data-toggle="modal"
            data-target="#facebookLoginModal"
          >
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
        <form v-on:submit.prevent="doLogin()" class="mb-4">
          <div class="form-group">
            <label for="input-username" class="lh-fix">E-Mail</label>
            <input
              type="text"
              class="form-control bg-light-2"
              :class="formError.email ? 'is-invalid' : ''"
              id="input-username"
              aria-describedby="error-input-username"
              v-model="username"
              placeholder="E-mail"
              required
            />
            <div id="error-input-username" class="invalid-feedback text-left">
              {{ formError.email }}
            </div>
          </div>
          <div class="form-group">
            <label for="input-password" class="lh-fix">Senha</label>
            <input
              type="password"
              class="form-control bg-light-2"
              :class="formError.password ? 'is-invalid' : ''"
              id="input-password"
              aria-describedby="error-input-password"
              v-model="password"
              placeholder="Senha"
              @enter="doLogin()"
              required
            />
            <div id="error-input-password" class="invalid-feedback text-left">
              {{ formError.password }}
            </div>
          </div>
          <div class="text-right">
            <a href="#" class="disabled">
              Esqueceu sua senha?
            </a>
          </div>
          <button
            type="submit"
            class="btn btn-primary w-100 btn-sm mt-3"
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
    <!-- Modal de login via facebook -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="facebookLoginModal"
      tabindex="-1"
      aria-labelledby="facebookLoginModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 class="modal-title" id="facebookLoginModalTitle">Oops!</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Este site foi feito apenas para fins de demonstração, portanto, o
              login via facebook não foi implementado.
            </p>
            <p>
              De qualquer forma, você pode fazer login usando as credenciais de
              teste, ou até mesmo criar uma conta.
            </p>
            <div class="text-center border-top border-gray pt-3">
              <h6 class="text-center">Usuário e senha para testes</h6>
              <p class="mb-0">teste@insta.com</p>
              <p>123456</p>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-light shadow-sm btn-sm px-4"
              data-dismiss="modal"
              @click="fillTestCredentials()"
            >
              Usar credenciais
            </button>
          </div>
        </div>
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
    },
    fillTestCredentials() {
      this.username = "teste@insta.com";
      this.password = "123456";
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
