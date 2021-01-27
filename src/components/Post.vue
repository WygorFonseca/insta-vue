<template>
  <article class="post w-100 bg-white border border-gray rounded">
    <!-- Cabeçalho contendo foto do usuário, nome, outros detalhes e botão de mais opções -->
    <header class="d-flex flex-row align-items-center py-2 px-3">
      <img
        class="rounded-circle"
        src="../assets/wygor.jpg"
        width="40"
        height="40"
        alt="Foto"
      />
      <div class="ml-2 flex-fill">
        <h6 class="mb-0">{{ user.name }}</h6>
        <small>{{ user.description }} </small>
      </div>
      <button
        class="btn btn-sm px-0"
        data-toggle="modal"
        data-target="#postOptions"
      >
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </header>
    <!-- Mídia que foi publicada -->
    <section class="post-image-container">
      <img
        :data-src="
          !picture_id
            ? `https://picsum.photos/800/800?random=${imageId}`
            : `https://picsum.photos/id/${picture_id}/1200/1200`
        "
        :class="imageLoading ? 'loadingImage' : 'loadedImage'"
        class="lazyload"
        @load="imageLoaded()"
        @error="imageLoadError()"
        width="100%"
        alt="Foto"
        v-if="!imageLoaderror"
      />
      <div
        class="text-center d-flex align-items-center justify-content-center w-100"
        v-else
      >
        <div>
          <i class="fas fa-times"></i> Não foi possível carregar esta imagem.
        </div>
      </div>
    </section>
    <footer class="py-2 px-3">
      <!-- Botões de curtir, comentar, compartilhar e salvar -->
      <div class="d-flex flex-row mb-2">
        <div class="flex-fill">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              @click="isLiked = !isLiked"
              type="button"
              class="btn p-0 mr-3"
            >
              <i
                class="fa-lg fa-heart"
                :class="isLiked ? 'fas text-danger heart-pulse' : 'far'"
              ></i>
            </button>
            <button type="button" class="btn p-0 mr-3">
              <i class="far fa-lg fa-comment"></i>
            </button>
            <button type="button" class="btn p-0">
              <i class="far fa-lg fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <button class="btn p-0" @click="isSaved = !isSaved">
          <i class="fa-bookmark fa-lg" :class="isSaved ? 'fas' : 'far'"></i>
        </button>
      </div>
      <!-- Quem curtiu -->
      <div class="mb-2">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          width="20"
          height="20"
          alt=""
          class="mr-2"
        />
        <small
          >Curtido por <b>insta-vue</b> e <b>outras 234.000 pessoas</b></small
        >
      </div>
      <!-- Comentarios -->
      <section>
        <div
          class="d-flex flex-row"
          :key="`comment_${index}`"
          v-for="(comment, index) in comments"
        >
          <small class="flex-fill">
            <strong>{{ comment.username }}</strong> {{ comment.comment }}
          </small>
          <button
            @click="comment.isLiked = !comment.isLiked"
            type="button"
            class="btn p-0"
          >
            <i
              class="fa-sm fa-heart"
              :class="comment.isLiked ? 'fas text-danger heart-pulse' : 'far'"
            ></i>
          </button>
        </div>
      </section>
      <small class="text-muted">HÁ 2 HORAS</small>
    </footer>
    <!-- Campo para escrever comentário -->
    <div class="input-group border-top border-gray">
      <input
        type="text"
        class="form-control py-4 border-0"
        placeholder="Escreva um comentário..."
        aria-label="Recipient's username"
        aria-describedby="Campo de comentário"
        v-model="comment"
      />
      <div class="input-group-append">
        <button
          @click="createComment()"
          class="btn btn-sm text-primary"
          :disabled="comment.length === 0"
        >
          <strong>Publicar</strong>
        </button>
      </div>
    </div>

    <!-- Opções da postagem -->
    <div
      class="modal fade"
      id="postOptions"
      tabindex="-1"
      aria-labelledby="postOptionsLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-body p-0">
            <div class="list-group text-center">
              <a
                href="#"
                class="list-group-item list-group-item-action text-danger"
              >
                <strong>Denunciar</strong>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action text-danger "
              >
                <strong>Deixar de seguir</strong>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled"
              >
                Ir para a publicação
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled"
              >
                Compartilhar em
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled"
              >
                Copiar link
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled"
              >
                Incorporar
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled"
              >
                Cancelar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: ["picture_id"],
  data() {
    return {
      user: {
        name: "Wygor Fonseca",
        description: "Desenvolvedor fullstack"
      },
      imageId: Math.floor(Math.random() * 500) + 50,
      imageLoading: true,
      imageLoaderror: false,
      isLiked: false,
      isSaved: false,
      comment: "",
      comments: [
        {
          username: "Wygor Fonseca",
          comment: "At vero eos et accusamus et iusto odio dignissimos",
          isLiked: true
        },
        {
          username: "Wygor Fonseca",
          comment: "At vero eos et accusamus et iusto odio dignissimos",
          isLiked: true
        }
      ]
    };
  },
  methods: {
    imageLoaded() {
      this.imageLoading = false;
      this.imageLoadError = false;
    },
    imageLoadError() {
      this.imageLoading = false;
      this.imageLoaderror = true;
    },
    createComment() {
      this.comments.push({
        username: "Usuário teste",
        comment: this.comment,
        isLiked: false
      });

      this.comment = "";
    }
  }
};
</script>

<style scoped>
.post-image-container {
  /* height: 100vw; */
  position: relative;
  padding-top: 100%;
  background: linear-gradient(to right, #fafafa 8%, #e8e8e8 38%, #fafafa 54%);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 2s ease infinite forwards;
  -moz-animation: AnimationName 2s ease infinite forwards;
  animation: AnimationName 2s ease infinite forwards;
}
.post-image-container > img {
  /* filter: blur(5px); */
  opacity: 0;
  position: absolute;
  top: 0;
}
.post-image-container > div {
  position: absolute;
  top: 0;
  bottom: 0;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.loadedImage {
  animation-delay: 5s;
  animation: fadeIn 0.5s normal forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    /* filter: blur(5px); */
  }
  /* 60%{
    filter: blur(5px);
  } */
  100% {
    opacity: 1;
    /* filter: blur(0px); */
  }
}
</style>
