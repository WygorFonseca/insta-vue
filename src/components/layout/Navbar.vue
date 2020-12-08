<template>
  <nav class="navbar navbar-expand navbar-light bg-white sticky-top border-bottom border-gray">
    <div class="container px-sm-5">
      <button class="btn btn-sm" v-if="$appDevice == 'mobile'">
        <i class="fas fa-lg fa-camera"></i>
      </button>
      <a href="#" class="col-xs-4 p-0 navbar-brand">
        <img src="@/assets/logo-instagram.png" alt="Instagram" width="100">
      </a>
      <button class="btn btn-sm" v-if="$appDevice == 'mobile'">
        <i class="fas fa-lg fa-paper-plane"></i>
      </button>
      <div class="d-none d-sm-block w-100 col-7 col-md-5">
        <!-- <form class="form-inline w-100 px-5">
          <div class="w-100">
            <v-select id="v-select-srch" class="v-select-search w-100" :class="selectedSearchOption ? 'vs--selected' : ''" size="sm" :options="searchOptions" v-model="selectedSearchOption">
              <template v-slot:option="option">
                <div class="d-flex flex-row align-items-center">
                  <img src="../../assets/wygor.jpg" class="rounded-circle" width="40" alt="">
                  <div class="ml-2">
                    <h6 class="mb-0">{{ option.label }}</h6>
                    <small>Desenvolvedor</small>
                  </div>
                </div>
              </template>
            </v-select>
            <label class="vssr" for="v-select-srch">Teste</label>
          </div>
        </form> -->
      </div>
      <ul class=" col-xs-4 navbar-nav" v-if="$appDevice == 'desktop'">
        <li class="nav-item">
          <router-link to="/" class="nav-link"><i class="fas fa-lg fa-home"></i></router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-paper-plane"></i></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-compass"></i></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-heart"></i></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" style="padding-top: 5px" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="../../assets/wygor.jpg" width="23" class="rounded-circle" alt="f">
          </a>
          <div class="dropdown-menu dropdown-menu-right shadow border-0 p-0 py-1" aria-labelledby="navbarDropdown">
            <router-link to="/profile" class="dropdown-item pl-3 pr-5 mr-5 py-2">
              <i style="width: 20px; position: relative; left: -2px" class="far fa-user-circle"></i><small> Perfil</small>
            </router-link>
            <a class="dropdown-item pl-3 pr-5 mr-5 py-2" href="#">
              <i style="width: 20px" class="far fa-bookmark"></i> <small>Salvos</small>
            </a>
            <a class="dropdown-item pl-3 pr-5 mr-5 py-2" href="#">
              <i style="width: 20px" class="fas fa-cog"></i> <small>Configurações</small>
            </a>
            <a class="dropdown-item pl-3 pr-5 mr-5 py-2" href="#">
              <i style="width: 20px" class="fas fa-sync"></i> <small>Trocar de conta</small>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item pl-3 pr-5 mr-5 py-2" @click="logout()">
              <small>Sair</small>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "Navbar",
  data () {
    return {
      searchOptions:[
        { code: 1, label: "Wygor Fonseca" },
        { code: 1, label: "Dev FullStack" },
        { code: 1, label: "Dev" },
      ],
      selectedSearchOption: null
    }
  },
  methods: {
    ...mapMutations(["USER_SET_STATE"]),
    logout () {
      this.USER_SET_STATE(null)

      localStorage.removeItem("auth_user")

      this.$router.replace('/login')
    }
  }
}
</script>

<style>
/* input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: 8px;
  bottom: 10px;
  left: 20px;
  font-size: 11px;
  opacity: 1;
}

.inputText {
  font-size: 14px;
  width: 200px;
  height: 35px;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
} */
/* #v-select-srch {
  transform: scale(0.75) translateY(-100%) translateX(-30px);
} */

/* .vs__search:focus + label {
  top: -100% !important;
  margin-bottom: 16px !important;
} */
</style>