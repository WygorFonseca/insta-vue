<template>
  <div class="home">
    <Navbar class="mb-4" />
    <div class="container px-sm-5">
      <div class="row mb-3">
        <div class="col-sm-12 col-md-8 col-lg-7 col-12">
          <Stories />
          <Post class="mt-3" v-for="n in 10" :key="n" />
        </div>
        <div class="col-md-4 col-lg-5 d-none d-sm-block">
          <h6 class="bg-white border border-gray rounded px-3 py-3 mb-2">Sobre o insta-vue</h6>
          <div class="d-flex flex-row align-items-center">
            <img src="../assets/wygor.jpg" width="60" class="rounded-circle" alt="">
            <div class="ml-2">
              <h6 class="mb-0">Wygor Fonseca</h6>
              <small>Desenvolvedor fullstack.</small>
            </div>
          </div>
          <div class="text-justify mt-2">
            <p>Este projeto foi desenvolvido utilizando vue, vue-router, vuex, firebase, bootstrap e lazysizes. Desenvolvido
              apenas para fins de aprendizado e com um layout próximo ao do instagram web contando com leves mudanças.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="d-block d-sm-none" v-if="$appDevice == 'mobile'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/FooterNav.vue";
import Stories from "@/components/Stories.vue";
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: { Navbar, Footer, Post, Stories }
};
</script>
