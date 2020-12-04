<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-9 col-md-6 col-lg-4 text-center">
        <img src="../assets/logo-instagram.png" alt="logo" width="180">
        <div class="row my-3">
          <div class="col p-0"><hr /></div>
          <div class="col-6 p-0 pt-1">
            <strong>Crie uma conta</strong>
          </div>
          <div class="col p-0"><hr /></div>
        </div>
        <form class="mb-4">
          <div class="form-group">
            <input type="text" class="form-control bg-light-2" :class="formError.email ? 'is-invalid' : ''" id="input-username" aria-describedby="input-username" v-model="username" placeholder="Nome de usuário">
            <div id="input-username" class="invalid-feedback text-left">
              {{ formError.email }}
            </div>
          </div>
          <div class="form-group">
            <input type="password" class="form-control bg-light-2" :class="formError.password ? 'is-invalid' : ''" id="input-password" aria-describedby="input-password"  v-model="password" placeholder="Senha">
            <div id="input-password" class="invalid-feedback text-left">
              {{ formError.password }}
            </div>
          </div>
          <button type="button" class="btn btn-primary w-100 btn-sm mt-3" @click="doRegister()" :disabled="registerButtonDisabled">
            <i class="fas fa-spin fa-spinner" v-show="isLoadingRegister"></i>
            {{ isLoadingRegister ? "Criando conta" : "Criar conta" }}
          </button>
        </form>
        <router-link to="/login" class="text-muted">
          Ja tem uma conta? <strong class="text-primary">Faça login.</strong>
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
import { mapMutations } from 'vuex'

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
      isLoadingRegister: false,
    }
  },
  methods: {
    ...mapMutations(["USER_SET_STATE"]),
    doRegister () {
      this.isLoadingRegister = true
      this.formError.email = ''
      this.formError.password = ''

      this.$fireBase.auth().createUserWithEmailAndPassword(this.username, this.password)
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

        this.$router.push('/')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(this.errorMessages[errorCode]){
          this.formError[this.errorMessages[errorCode].field] = this.errorMessages[errorCode].message
        }
        console.log(errorMessage);
        console.log(error, errorCode, errorMessage);
      })
      .then(() => this.isLoadingRegister = false);
    }
  },
  computed: {
    registerButtonDisabled () {
      return this.password == '' || this.username == '' || this.isLoadingRegister
    }
  }
};
</script>
