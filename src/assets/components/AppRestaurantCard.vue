<script>
export default {
  props: {
    restaurant: Array,
  },

  data() {
    return {
      img: "/img/" + this.restaurant.img,
    };
  },
};
</script>

<template>
  <div class="container">
    <router-link :to="{
      name: 'restaurants.show',
      params: { restaurant: restaurant.id },
    }" class="card-text">
      <div class="card mb-4" style="width: 18rem;">
        <img :src="img" class="img" :alt="restaurant.name" />
        <div class="card-body col-md-8">
          <h5 class="card-title">{{ restaurant.rest_name }}</h5>
          <p class="card-text">{{ restaurant.address }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.card-text {
  text-decoration: none;
  color: black;
}
</style>
