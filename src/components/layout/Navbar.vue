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
      <div class="d-none d-sm-block w-100">
        <form class="form-inline mx-auto w-50 px-5">
          <v-select class="w-100" size="sm" placeholder="Pesquisar" :options="searchOptions">
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
          <!-- <input type="text" class="col-xs-4 form-control form-control-sm p-0 px-3" placeholder="Pesquisar"> -->
        </form>
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
            <a class="dropdown-item pl-3 pr-5 mr-5 py-2" href="#">
              <small>Sair</small>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {
      searchOptions:[
        { code: 1, label: "Wygor Fonseca" },
        { code: 1, label: "Dev FullStack" },
        { code: 1, label: "Dev" },
      ]
    }
  }
}
</script>