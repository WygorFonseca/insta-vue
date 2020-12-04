<template>
  <div class="home">
    <Navbar class="mb-4" />
    <div class="container px-sm-5">
      <div class="row mb-3">
        <div class="col-sm-12 col-md-8 col-lg-7 col-12">
          <Stories />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-8 col-lg-7 col-12">
          <Post class="mb-4" v-for="n in 10" :key="n" />
          <Post class="mb-4"/>
          <Post class="mb-4"/>
        </div>
      </div>
    </div>
    <Footer class="d-block d-sm-none" v-if="$appDevice == 'mobile'"/>
    <Footer class="d-block d-md-none" v-if="$appDevice == 'desktop'"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
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
