<script>
import axios from "axios";
export default {
  data() {
    return {
      restShow: [],
    };
  },

  created() {
    axios
      .get(
        "http://127.0.0.1:8000/api/restaurants/" +
          String(this.$route.params.restaurant)
      )
      .then((response) => (this.restShow = response.data));
  },
};
</script>

<template>
  <div class="rest-container" v-for="rest in restShow" :key="rest.id">
    <div class="restaurant">
      <!-- <img :src="restShow.img" :alt="restShow.rest_name" /> -->
      <h1>{{ rest.rest_name }}</h1>
      <p>{{ rest.address }}</p>
    </div>
    <div class="plates">
      <h2>{{ rest.name }}</h2>
      <div>ingredienti: {{ rest.ingredients }}</div>
      <div>{{ rest.price }}€</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
