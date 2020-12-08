<template>
  <div class="home">
    <Navbar class="mb-3" />
    <div class="container col-12 col-md-7 col-lg-8 p-0">
      <div class="px-3">
        <header class="d-flex flex-row align-items-center">
          <img src="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png" width="80" class="rounded-circle" alt="Foto de perfil">
          <div class="ml-2">
            <h5>Seu perfil <i class="fas text-info fa-check-circle"></i></h5>
            <button class="btn py-0 px-3 bg-white border-secondary">
              <small>Enviar mensagem</small>
            </button>
            <button class="btn ml-2 py-0 px-3 bg-white border-secondary">
              <small>Seguir</small>
            </button>
          </div>
        </header>
        <section class="mt-3">
          <h6 class="mb-0">Wygor Fonseca</h6>
          <small>Descrição do perfil...</small>
        </section>
      </div>
      <section class="mt-3 bg-white border-top border-bottom border-gray p-2 d-flex flex-row justify-content-around">
        <div class="text-center">
          <strong>10</strong>
          <p class="mb-0 text-muted"><small>Publicações</small></p>
        </div>
        <div class="text-center">
          <strong>1,8 milhões</strong>
          <p class="mb-0 text-muted"><small>Seguidores</small></p>
        </div>
        <div class="text-center">
          <strong>10</strong>
          <p class="mb-0 text-muted"><small>Seguindo</small></p>
        </div>
      </section>
      <div class="row no-gutters">
        <div class="col-4 p-01" v-for="n in 15" :key="n">
          <img :src="`https://picsum.photos/id/${n+210}/1200/1200`" width="100%" alt="a">
        </div>
        <div class="col-4 p-01">
          <img src="https://picsum.photos/id/40/1200/1200" width="100%" alt="a">
        </div>
        <div class="col-4 p-01">
          <img src="https://picsum.photos/id/864/1200/1200" width="100%" alt="a">
        </div>
        <div class="col-4 p-01">
          <img src="https://picsum.photos/id/648/1200/1200" width="100%" alt="a">
        </div>
      </div>
    </div>
    <Footer class="d-block d-sm-none" v-if="$appDevice == 'mobile'"/>
  </div>
</template>

<style scoped>
.p-01 {
  padding: 0.1em !important;
}
</style>

<script>
// @ is an alias to /src
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/FooterNav.vue";

export default {
  name: "Profile",
  components: { Navbar, Footer }
};
</script>
