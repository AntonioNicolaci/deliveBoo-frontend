<script>
import axios from "axios";
export default {
  data() {
    return {
      restShow: [],
    };
  },

  computed: {
    uniqueRestaurants() {
      // Raggruppa i piatti per ristorante
      const restaurantMap = new Map();
      this.restShow.forEach((item) => {
        const { restaurant_id, rest_name, address } = item;
        if (!restaurantMap.has(restaurant_id)) {
          restaurantMap.set(restaurant_id, {
            id: restaurant_id,
            rest_name,
            address,
            plates: [],
          });
        }
        restaurantMap.get(restaurant_id).plates.push(item);
      });
      return Array.from(restaurantMap.values());
    },
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
  <!-- <div
    class="rest-container"
    v-for="restaurant in uniqueRestaurants"
    :key="restaurant.id"
  >
    <div>
      <div class="restaurant">
        <img :src="restShow.img" :alt="restShow.rest_name" />
        <h1>{{ restaurant.rest_name }}</h1>
        <p>{{ restaurant.address }}</p>
      </div>
      <div class="plates" v-for="plate in restaurant.plates" :key="plate.id">
        <h2>{{ plate.name }}</h2>
        <div>ingredienti: {{ plate.ingredients }}</div>
        <div>{{ plate.price }}€</div>
      </div>
    </div>
  </div> -->
  <div
    class="rest-container"
    v-for="restaurant in uniqueRestaurants"
    :key="restaurant.id"
  >
    <div class="restName">
      <h1>{{ restaurant.rest_name }}</h1>
      <p>{{ restaurant.address }}</p>
    </div>

    <div class="dish-container">
      <div
        class="card plates"
        style="width: 18rem"
        v-for="plate in restaurant.plates"
        :key="plate.id"
      >
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ plate.name }}</li>
          <li class="list-group-item">ingredienti: {{ plate.ingredients }}</li>
          <li class="list-group-item">€ {{Math.round(plate.price / 100).toFixed(2)}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dish-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  align-items: center;
  justify-content: flex-start;
  padding-inline: 3rem;
  margin: 1rem auto;
}
</style>
