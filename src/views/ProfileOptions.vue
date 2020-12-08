<template>
  <div class="home">
    <nav class="navbar navbar-expand navbar-light bg-white sticky-top border-bottom border-gray">
      <button class="btn">
        <i class="fas fa-times fa-lg"></i>
      </button>
      <a href="#" class="col-xs-4 p-0 navbar-brand">
        <h6 class="mb-0">Opções</h6>
      </a>
    </nav>
    <button @click="logout()" class="btn py-3 text-danger btn-lg bg-white text-left w-100 rounded-0">
      <div class="d-flex flex-row">
        <h6 class="mb-0 flex-fill">Sair</h6>
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "Profile Options",
  methods: {
    ...mapMutations(["USER_SET_STATE"]),
    logout () {
      this.USER_SET_STATE(null)

      localStorage.removeItem("auth_user")

      this.$router.replace('/login')
    }
  }
};
</script>
