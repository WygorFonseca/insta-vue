<template>
  <div class="w-100 bg-white border border-gray rounded pt-3 pb-2 stories">
    <div class="d-flex flex-row mx-2" style="overflow-x: scroll">
      <div v-for="n in 25" :key="n" class="text-center">
        <div class="mx-1 story">
          <img class="rounded-circle" src="https://img1.gratispng.com/20180623/vr/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c3c1e473.3568135015297806757942.jpg" width="50" height="50" alt="Foto">
        </div>
        <small>nome</small>
      </div>
    </div>
    <div class="floating-story-btn-container f-story-btn-left d-flex flex-row align-items-center">
      <button class="btn btn-light my-auto text-dark shadow">
        <i class="fas fa-chevron-left"></i>
      </button>
    </div>
    <div class="floating-story-btn-container f-story-btn-right d-flex flex-row align-items-center">
      <button class="btn btn-light my-auto text-dark shadow">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.stories{
  position: relative;
}
.floating-story-btn-container{
  top: 0;
  bottom: 15px;
  position: absolute;
  margin: auto;
}
.f-story-btn-left {
  left: 15px;
}
.f-story-btn-right {
  right: 15px;
}
.floating-story-btn-container > button {
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 25px;
}
.story {
  padding: 2px;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);;
  border-radius: 50%;
  height: 54px;
  width: 54px;
}
</style>

<script>
export default {
  name: "Stories",
  // data () {
  //   return {
  //     user: {
  //       name: "Nome do usuário",
  //       description: "Detalhes..."
  //     },
  //     isLiked: false,
  //   }
  // }
};
</script>