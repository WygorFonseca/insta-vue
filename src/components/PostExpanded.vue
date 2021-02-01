<template>
  <article class="post w-100 bg-white border border-gray rounded row">
    <section class="col-7 p-0">
      <img
        :data-src="
          !pictureId
            ? `https://picsum.photos/800/800?random=${imageId}`
            : `https://picsum.photos/id/${pictureId}/1200/1200`
        "
        :class="imageLoading ? 'loadingImage' : 'loadedImage'"
        class="lazyload"
        @load="imageLoaded()"
        @error="imageLoadError()"
        width="100%"
        alt="Foto"
        v-if="!imageLoaderror"
      />
    </section>
    <section class="col p-0 d-flex flex-column justify-content-between">
      <header
        class="d-flex flex-row align-items-center p-3 border-bottom border-gray"
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          width="38"
          height="38"
          alt=""
          class="mr-2"
        />
        <div>
          <h6 class="mb-0">Teste</h6>
          <small>TESTESTE</small>
        </div>
      </header>
      <!-- Seção de comentários -->
      <section class="flex-fill" style="overflow-y: auto">
        <div
          class="d-flex flex-row align-items-start px-3 py-2"
          :key="`comment_${index}`"
          v-for="(comment, index) in comments"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            width="32"
            height="32"
            alt=""
            class="mr-2 mt-2"
          />
          <div class="d-flex flex-column flex-fill">
            <div>
              <small
                ><strong>{{ comment.username }}</strong>
                {{ comment.comment }}</small
              >
            </div>
            <div class="mt-2">
              <small class="mr-2">9h</small>
              <small>
                <strong
                  >{{ comment.likes }}
                  {{
                    singularOrPlural(comment.likes, "Curtida", "Curtidas")
                  }}</strong
                >
              </small>
            </div>
          </div>
          <button @click="likeComment(comment)" type="button" class="btn p-0">
            <i
              class="fa-sm fa-heart"
              :class="comment.isLiked ? 'fas text-danger heart-pulse' : 'far'"
            ></i>
          </button>
        </div>
      </section>
      <footer class="border-top border-gray">
        <!-- Botões de curtir, comentar, compartilhar e salvar -->
        <div class="d-flex flex-row px-3 py-2">
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
        <div class="px-3 pb-2">
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
        <small class="px-3 text-muted">HÁ 2 HORAS</small>
        <!-- Campo para escrever comentários -->
        <div class="input-group border-top border-gray mt-2">
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
      </footer>
    </section>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: ["pictureId"],
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
          isLiked: true,
          likes: 1
        },
        {
          username: "Wygor Fonseca",
          comment: "At vero eos et accusamus et iusto odio dignissimos",
          isLiked: true,
          likes: 1
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
        isLiked: false,
        likes: 0
      });

      this.comment = "";
    },
    likeComment(comment) {
      comment.isLiked = !comment.isLiked;

      comment.isLiked ? comment.likes++ : comment.likes--;
    },
    singularOrPlural(val, singular, plural) {
      return val !== 1 ? plural : singular;
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
