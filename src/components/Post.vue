<template>
  <div class="post">
    <div class="w-100 bg-white border border-gray rounded">
      <!-- Cabeçalho contendo foto do usuário, nome, outros detalhes e botão de mais opções -->
      <header class="d-flex flex-row align-items-center py-2 px-3">
        <img class="rounded-circle" src="../assets/wygor.jpg" width="40" height="40" alt="Foto">
        <div class="ml-2 flex-fill">
          <h6 class="mb-0">{{ user.name }}</h6>
          <small>{{ user.description }}</small>
        </div>
        <button class="btn btn-sm px-0">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </header>
      <!-- Mídia que foi publicada -->
      <section class="post-image-container">
        <img :data-src="`https://picsum.photos/800/800?random=${imageId}`" :class="imageLoading ? 'loadingImage' : 'loadedImage'" class="lazyload" @load='imageLoaded()' @error="imageLoadError()" width="100%" alt="Foto">
      </section>
      <footer class="py-2 px-3">
        <!-- Botões de curtir, comentar, compartilhar e salvar -->
        <div class="d-flex flex-row mb-2">
          <div class="flex-fill">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="isLiked = !isLiked" type="button" class="btn p-0 mr-3">
                <i class="fa-lg fa-heart" :class="isLiked ? 'fas text-danger heart-pulse' : 'far'"></i>
              </button>
              <button type="button" class="btn p-0 mr-3"><i class="far fa-lg fa-comment"></i></button>
              <button type="button" class="btn p-0"><i class="far fa-lg fa-paper-plane"></i></button>
            </div>
          </div>
          <button class="btn p-0">
            <i class="far fa-bookmark fa-lg"></i>
          </button>
        </div>
        <!-- Quem curtiu -->
        <div class="mb-2">
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" width="20" height="20" alt="" class="mr-2">
          <small>Curtido por <b>insta-vue</b> e <b>outras 234.000 pessoas</b></small>
        </div>
        <!-- Comentarios -->
        <!-- TODO: Lista de comentários -->
        <small class="text-muted">HÁ 2 HORAS</small>
      </footer>
      <!-- Campo para escrever comentário -->
      <div class="input-group border-top border-gray">
        <input type="text" class="form-control py-4 border-0" placeholder="Escreva um comentário..." aria-label="Recipient's username" aria-describedby="Campo de comentário">
        <div class="input-group-append">
          <button class="btn btn-sm text-primary">
            <strong>Publicar</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.post-image-container {
  /* height: 100vw; */
  position: relative;
  padding-top: 100%;
  background: linear-gradient(270deg, #f3f3f3, #e1e1e1);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 2s ease infinite;
    -moz-animation: AnimationName 2s ease infinite;
    animation: AnimationName 2s ease infinite;
}
.post-image-container > img {
  filter: blur(5px);
  opacity: 0;
  position: absolute;
  top: 0;
}
@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 51%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 51%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 51%}
    100%{background-position:0% 50%}
}
.loadedImage{
  animation-delay: 5s;
  animation: fadeIn .50s normal forwards;
}

@keyframes fadeIn{
  0%{
    opacity: 0;
    filter: blur(5px);
  }
  60%{
    filter: blur(5px);
  }
  100%{
    opacity: 1;
    filter: blur(0px);
  }
}

</style>

<script>
export default {
  name: "Post",
  data () {
    return {
      user: {
        name: "Wygor Fonseca",
        description: "Desenvolvedor fullstack"
      },
      imageId: Math.floor(Math.random() * 500) + 50,
      imageLoading: true,
      imageLoaderror: false,
      isLiked: false,
    }
  },
  methods: {
    imageLoaded () {
      this.imageLoading = false
    },
    imageLoadError () {
      this.imageLoadError = true
    }
  },
};
</script>