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
          <li class="list-group-item">
            € {{ Math.round(plate.price / 100).toFixed(2) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  //container generale
  .rest-container {
    width: 100%;
  }

  //container del ristoratore
  .restName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgb(231, 165, 80);

    .restLogo {
      flex: 0 0 100%;

      img {
        max-width: 250px;
        text-align: center;
        display: block;
        margin-bottom: 0.5rem;
      }
    }

    .title {
      flex: 0 0 100%;
      text-align: center;
      line-height: 0.2rem;

      h1 {
        font-size: 2rem;
      }
    }
  }

  //container piatti

  .dish-container {
    width: 100%;
    flex-direction: column;
    // display: flex;
    // flex-wrap: wrap;
    // align-items: stretch;
    // justify-content: flex-start;
    // padding: 0.5rem;
  }

  //card piatti

  .plates {
    flex: 0 0 100%;
  }

  //contenuto di ogni card
  .dish-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .card-body {
      flex: 0 0 100%;
    }

    .ingredients {
      font-size: 0.8rem;
    }

    .add {
      flex: 0 0 100%;
      margin-left: 5rem;
    }
  }
}
</style>
