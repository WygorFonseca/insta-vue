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
          <Post class="mb-4"/>
          <Post class="mb-4"/>
          <Post class="mb-4"/>
        </div>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layout/Navbar.vue";
import Stories from "@/components/Stories.vue";
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    Navbar, Post, Stories
  }
};
</script>
