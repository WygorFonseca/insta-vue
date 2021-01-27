<template>
  <div class="home">
    <Navbar class="mb-4" />
    <div class="container px-sm-5">
      <div class="row justify-content-center mb-3">
        <div class="col-sm-12 col-md-12 col-lg-12 col-12">
          <PostExpanded :picture_id="id" />
        </div>
      </div>
    </div>
    <Footer class="d-block d-sm-none" v-if="$appDevice == 'mobile'" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/FooterNav.vue";
import PostExpanded from "@/components/PostExpanded.vue";

export default {
  name: "Home",
  components: { Navbar, Footer, PostExpanded },
  props: ["id"]
};
</script>
