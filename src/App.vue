<template>
  <div id="app">
    <!-- LIGHT HOUSE - FIX -->
    <a class="skip-link" @click.prevent="() => {}" href="#">
      Ir para conteúdo principal
    </a>
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
  </div>
</template>
