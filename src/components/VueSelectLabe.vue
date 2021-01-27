<template>
  <div class="asd">
    <v-select id="vue-select-label"></v-select>
    <label for="vue-select-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "vue-select-label",
  props: ["label"]
};
</script>

<style>
div.asd {
  position: relative;
}
label {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  transition: 0.2s;
  position: absolute;
  color: red;
  margin-bottom: 0;
}
div.vs--open + label.vssr,
div.vs--selected + label.vssr {
  top: -100% !important;
  /* background: #fff; */
  padding-left: 10px;
  padding-right: 10px;
  /* margin-bottom: 10% !important; */
}
</style>
