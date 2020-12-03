<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-9 text-center">
        <img src="../assets/logo-instagram.png" alt="logo" width="180">
        <div class="mt-5">
          <button class="btn btn-primary btn-sm w-100">
            <i class="fab fa-facebook mr-1"></i> Continuar com o facebook
          </button>
        </div>
        <div class="row my-3">
          <div class="col-5"><hr /></div>
          <div class="col-2">
            <strong>OU</strong>
          </div>
          <div class="col-5"><hr /></div>
        </div>
        <form class="mb-4">
          <div class="form-group">
            <input type="email" class="form-control bg-light-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome de usuário">
          </div>
          <div class="form-group">
            <input type="password" class="form-control bg-light-2" id="exampleInputPassword1" placeholder="Senha">
          </div>
          <div class="text-right">
            <a href="">
              Esqueceu sua senha?
            </a>
          </div>
          <button type="submit" class="btn btn-primary w-100 btn-sm mt-3">
            Entrar
          </button>
        </form>
        <a class="text-muted" href="">
          Não tem uma conta? <strong class="text-primary">Cadastre-se.</strong>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-light-2 {
  background: #ededed;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "Login"
};
</script>
