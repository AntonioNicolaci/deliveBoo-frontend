<script>
import axios from "axios";
export default {
  data() {
    return {
      restShow: [],
    };
  },

  methods: {
    getRestaurantImageUrl(img) {
      return `/img/${img}`;
    },
  },

  computed: {
    uniqueRestaurants() {
      // Raggruppa i piatti per ristorante
      const restaurantMap = new Map();
      this.restShow.forEach((item) => {
        const { restaurant_id, rest_name, address, img } = item;
        if (!restaurantMap.has(restaurant_id)) {
          restaurantMap.set(restaurant_id, {
            id: restaurant_id,
            rest_name,
            address,
            img,
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
  <div
    class="rest-container"
    v-for="restaurant in uniqueRestaurants"
    :key="restaurant.id"
  >
    <div class="restName">
      <div class="restLogo">
        <img :src="getRestaurantImageUrl(restaurant.img)" alt="" />
      </div>
      <div class="title">
        <h1>{{ restaurant.rest_name }}</h1>
        <p>{{ restaurant.address }}</p>
      </div>
    </div>

    <div class="dish-container">
      <div
        class="card mb-3 plates"
        v-for="plate in restaurant.plates"
        :key="plate.id"
      >
        <div class="row g-0 dish-card">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title cardText">{{ plate.name }}</h5>
              <p class="card-text cardText ingredients">
                {{ plate.ingredients }}
              </p>
              <p class="card-text cardText">
                € {{ Math.round(plate.price / 100).toFixed(2) }}
              </p>
              <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
            </div>
          </div>

          <div class="col-md-4 add">Add</div>
        </div>
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
