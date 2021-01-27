<template>
  <footer
    class="navbar navbar-expand navbar-light bg-white fixed-bottom position-sticky border-top border-gray"
  >
    <ul class="justify-content-around align-content-center navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="fas fa-lg fa-home"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><i class="fas fa-lg fa-search"></i></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"
          ><i class="far fa-lg fa-plus-square"></i
        ></a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><i class="fas fa-lg fa-heart"></i></a>
      </li>
      <li class="nav-item">
        <router-link to="/profile" class="nav-link" style="padding-top: 5px">
          <img
            src="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png"
            width="25"
            class="rounded-circle"
            alt="f"
          />
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
