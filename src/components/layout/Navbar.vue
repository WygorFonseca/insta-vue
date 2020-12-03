<template>
  <nav class="navbar navbar-expand navbar-light bg-white sticky-top border-bottom border-gray">
    <div class="container px-sm-5">
      <a href="#" class="col-xs-4 p-0 navbar-brand">
        <img src="@/assets/logo-instagram.png" alt="Instagram">
      </a>
      <div class="d-none d-sm-block">
        <form class="form-inline mx-auto">
          <input type="text" class="col-xs-4 form-control form-control-sm p-0 px-3" placeholder="Pesquisar">
        </form>
      </div>
      <ul class=" col-xs-4 navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-home"></i></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-paper-plane"></i></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-compass"></i></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-heart"></i></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="fas fa-lg fa-circle"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
}
</script>