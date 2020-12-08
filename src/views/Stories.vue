<template>
  <div class="storie h-100">
    <div class="container-fluid bg-dark-2 h-100">
      <div class="row justify-content-center h-100">
        <div class="col d-none d-sm-block"></div>
        <div class="p-0 rounded-075 col-lg-3" style="background: #000">
          <div class="h-100 text-center">
            <div class="pause w-100">
              <div class="progress-container px-2 w-100"  :key="'progress_' + storyId + story">
                <div
                  v-for="n in count"
                  :style="`animation-duration: ${vtime}ms`"
                  :class="story == n ? (vtime_started ? 'active' : '') : (story > n ? 'passed' : '')"
                  :key="'storyprogress_' + storyId + n"
                  class="progress"
                ></div>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center h-100">
              <div class="flex-fill"
                v-for="n in count"
                :key="storyId + n"
                v-show="n == story"
              >
                <i v-if="!imagesLoaded.includes(n) && !imagesError.includes(n)" class="fas fa-spinner fa-spin text-light fa-lg flex-fill"></i>
                <div v-else-if="imagesError.includes(n) && !imagesLoaded.includes(n)" class="text-danger col-8 mx-auto">
                  <i class="fas fa-times fa-lg flex-fill mr-2"></i> Não foi possível carregar este story
                </div>
                <img
                  :src="`https://picsum.photos/800/1400?ramdon=${parseInt(storyId) + (n * storyId)}`"
                  @load="storyImageLoad(n, storyId)"
                  @error="storyImageError(n, storyId)"
                  v-show="imagesLoaded.includes(n)"
                  width="100%" max-height="100%" alt="Story" class="rounded-075"
                >
              </div>
            </div>
            <div class="floating-story-btn-container f-story-btn-left d-flex flex-row align-items-center">
              <button @click="prevStory()" class="btn btn-light my-auto text-dark shadow rounded-circle">
                <i class="fas fa-chevron-left"></i>
              </button>
            </div>
            <div class="floating-story-btn-container f-story-btn-right d-flex flex-row align-items-center">
              <button @click="nextStory()" class="btn btn-light my-auto text-dark shadow rounded-circle">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col d-none d-sm-block text-right mt-3">
          <button @click="$router.push('/')" class="btn btn-sm text-white">
            <i class="fas fa-lg fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  cursor: pointer;
}

.progress {
  height: 3px;
  flex-grow: 1;
  border-radius: 4px;
  margin: 0 5px;
  display: flex;
  background-image: -webkit-linear-gradient(left, 
    rgba(255,255,255,.5) 0%,
    rgba(255,255,255,.5) 50%,
    rgba(88, 89, 104,.5) 50.001%,
    rgba(88, 89, 104,.5) 100%
  );
  background-repeat: no-repeat;
  background-size: 200%;
  background-color: #666;
  background-position: 100% 50%;
  animation-timing-function: linear;
  animation-delay: .2s;
}

.progress.active {
  animation-name: Loader;
}

.progress.passed {
    background-position: 0 0; 
}

@keyframes Loader {
  0%   { background-position: 100% 0; }
  100% { background-position: 0 0; }
}
.floating-story-btn-container{
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
}
.f-story-btn-left > button, .f-story-btn-right > button {
  width: 35px;
  height: 35px;
}
.f-story-btn-left {
  left: 15px;
}
.f-story-btn-right {
  right: 15px;
}
.rounded-075 {
  border-radius: 0.75em;
}
</style>

<script>
// @ is an alias to /src
// import Navbar from "@/components/layout/Navbar.vue";
// import Footer from "@/components/layout/FooterNav.vue";
// import Stories from "@/components/Stories.vue";
// import Post from "@/components/Post.vue";

const defaultConfigs = () => {
  return {
    story: 1, // Número do story
    count: 2, // Quantidade de stories
    loaded: 0,
    vtime: 5000, // Tempo de visualização
    vtime_started: false, // Se o tempo de visualização já está sendo contado
    imagesLoaded: [],
    imagesError: []
  }
}

export default {
  name: "Stories",
  props: ['storyId'],
  data () {
    return defaultConfigs()
  },
  mounted () {
    if(document.fullscreenEnabled){
      if(this.$appDevice == "mobile") document.body.requestFullscreen()
      document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
          // fullscreen is canceled
          this.$router.replace('/')
        }
      });
    }
  },
  watch: {
    '$route': function (){
      const defaultConf = defaultConfigs();

      Object.keys(defaultConf).forEach(el => {
        this[el] = defaultConf[el]
      })

      this.count = this.storyId % 4 + 1;

      // TODO: Cancelar carregamento de imagens ao trocar de rota!
    }
  },
  methods: {
    nextStory () {
      if(this.hasMoreStories.next){
        this.story++
      } else {
        this.nextStoryPage()
      }
    },
    prevStory () {
      if (this.hasMoreStories.prev) {
        this.story--
      } else {
        this.prevStoryPage()
      }
    },
    nextStoryPage () {
      this.$router.replace(`/stories/${parseInt(this.storyId) + 1}`)
    },
    prevStoryPage () {
      this.$router.replace(`/stories/${this.storyId != 1 ? (parseInt(this.storyId) - 1) : 50}`)
    },
    storyImageError (image, storyId) {
      if(image == 1 && storyId == this.storyId) this.startTimeCount()
      console.log("Image Error", image);
      this.imagesError.push(image)
    },
    storyImageLoad (image, storyId) {
      if(image == 1 && storyId == this.storyId) this.startTimeCount()
      console.log("Image Loaded", image);
      this.imagesLoaded.push(image)
    },
    startTimeCount () {
      this.vtime_started = true
    },
    pauseTimeCount () {

    },
    // resetStories () {
    //   this.story = 1;
    //   this.loaded = 0
    //   this.vtime_started = false;
    //   clearInterval(nextStoryInterval);
    // },
    // prevStory () {

    // },
    // nextStory () {
    //   clearInterval(nextStoryInterval)
    //   nextStoryInterval = setInterval(() => {
    //     this.nextStory()
    //   }, this.vtime)

    //   if(this.story == this.count){
    //     this.resetStories()  
    //     clearInterval(nextStoryInterval);
    //     this.$router.push(`/stories/${parseInt(this.storyId) + 1}`)
    //     return;
    //   }
    //   // } else if (this.story + 1 != this.count && this.story + 1 != this.count) {
    //   //   this.startViewCount()
    //   // } else {

    //   // }

    //   this.story++;
    // },
    // storyImageError (image) {
    //   console.error(image);
    //   this.loaded++
    //   // if(this.loaded == this.count) this.startViewCount()
    //   if(!this.vtime_started) this.startViewCount()
    // },
    // storyImageLoad (image) {
    //   console.log(image);
    //   this.loaded++
    //   // if(this.loaded == this.count) this.startViewCount()
    //   if(!this.vtime_started) this.startViewCount()
    //   // if(image == 1) this.startViewCount()
    // },
    // startViewCount () {
    //   // alert(1)
    //   console.log("aa", this.storyId, this.story, this.vtime_started)
    //   // Inicia o timeout para mudar de story
    //   this.vtime_started = true;

    //   nextStoryInterval = setInterval(() => {
    //     this.nextStory()
    //   }, this.vtime)
    // }
  },
  computed: {
    hasMoreStories () {
      return { 
        next: this.story != this.count,
        prev: this.story != 1,
      }
    }
    // hasPrevStory () {
    //   return this.storyId > 0
    // }
  }
  // components: { Navbar, Footer, Post, Stories }
};
</script>
