<template>
  <div class="post">
    <div class="w-100 bg-white border border-gray rounded">
      <!-- Cabeçalho contendo foto do usuário, nome, outros detalhes e botão de mais opções -->
      <header class="d-flex flex-row align-items-center py-2 px-3">
        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" width="40" height="40" alt="">
        <div class="ml-2 flex-fill">
          <h6 class="mb-0">Nome de usuário</h6>
          <small>Teste</small>
        </div>
        <button class="btn btn-sm px-0">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </header>
      <!-- Mídia que foi publicada -->
      <section>
        <img src="https://picsum.photos/800/800" width="100%" alt="Foto">
      </section>
      <footer class="py-2 px-3">
        <!-- Botões de curtir, comentar, compartilhar e salvar -->
        <div class="d-flex flex-row mb-2">
          <div class="flex-fill">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn p-0 mr-3"><i class="fas fa-lg fa-heart"></i></button>
              <button type="button" class="btn p-0 mr-3"><i class="fas fa-lg fa-comment"></i></button>
              <button type="button" class="btn p-0"><i class="fas fa-lg fa-paper-plane"></i></button>
            </div>
          </div>
          <button class="btn p-0">
            <i class="fas fa-bookmark fa-lg"></i>
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

<script>
export default {
  name: "Post",
  // props: {
  //   msg: String
  // }
};
</script>