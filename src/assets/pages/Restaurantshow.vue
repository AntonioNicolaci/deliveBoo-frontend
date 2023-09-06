<script>
import axios from "axios";
export default {
  data() {
    return {
      restShow: [],
      listPlate: [],
    };
  },
  methods: {
    getPaltes() {
      axios
        .get(
          "http://127.0.0.1:8000/api/restaurants/" +
          String(this.$route.params.restaurant)
        )
        .then(response => (
          this.restShow = response.data,
          this.setListPlate()
        ));
    },
    setListPlate() {
      if (localStorage.getItem("cart") !== null) {
        this.listPlate = JSON.parse(localStorage.getItem("cart"))
      } else {
        this.restShow.forEach(element => {
          this.listPlate.push({ id: element.id, quantit: 0 })
        })
      }
    },
    getRestaurantImageUrl(img) {
      return `/img/${img}`;
    },
    destroyStorage() {
      localStorage.clear()
      console.log("Sono Morte, il distruttore di mondi");
    },
    modPlate(id, sign, key) {
      document.querySelectorAll(".text-danger").forEach(element => {
        element.innerHTML = ""
      })

      if (sign == "-") {
        let quantit = this.listPlate[key].quantit
        quantit--
        if (quantit <= -1) {
          this.listPlate[key].quantit = 0
        } else {
          this.listPlate[key].quantit--
        }
      } else {
        this.listPlate[key].quantit++
      }

      localStorage.setItem('cart', JSON.stringify(this.listPlate))

    }
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
    this.getPaltes()
  },
};
</script>

<template>
  <div class="rest-container" v-for="restaurant in uniqueRestaurants" :key="restaurant.id">
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
      <div class="card mb-3 plates" v-for="plate, key in restaurant.plates" :key="plate.id">
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
            </div>
          </div>

          <div class="col-md-4 add">
            <div class="d-flex justify-content-center align-items-center"
              style="stroke-width: 1px; border:1px solid #37363D; width: 92px; height: 52px; border-radius: 5px;">
              <div class="d-flex justify-content-center align-items-center"
                style="width: 20px; height: 40px; border-radius: 5px 0px 0px 5px; background: #F9F7ED;"
                @click="modPlate(plate.id, `-`, key)">
                -
              </div>
              <div class="d-flex justify-content-center align-items-center" style="width: 40px;">
                {{ listPlate[key].quantit }}
              </div>
              <div class="d-flex justify-content-center align-items-center"
                style="width: 20px; height: 40px; border-radius: 0px 5px 5px 0px; background: #F9F7ED;"
                @click="modPlate(plate.id, `+`, key)">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="destroyStorage()"
    style="background-color: red; width: 100px; height: 50px; color: aliceblue;">Nuke</button>
</template>

<style lang="scss" scoped>
.rest-container {
  background-color: #e6e0d7;
  padding: 1rem 0.9rem;

  .restName {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3rem;
    padding: 2rem;
    background-color: rgb(231, 165, 80);

    .restLogo {
      flex: 0 0 40%;

      img {
        width: 100%;
        border-radius: 500rem;
      }
    }

    .title {
      flex: 0 0 60%;
      text-align: center;
    }
  }

  .dish-container {
    max-width: 1200px;
    padding: 0.8rem;
    margin: 1rem auto;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    padding: 0.5rem;
  }

  .plates {
    flex: 0 0 45%;
    border: 1px solid black;
    border-radius: 2.5rem;
    margin-right: 2rem;
    padding: 1rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    background-color: #e6e0d7;
  }

  .dish-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .cardText {
      flex: 0 0 60%;
    }

    .ingredients {
      font-size: 0.8rem;
    }

    .add {
      flex: 1 0 0;
      display:flex;
      justify-content: center;
    }
  }
}
</style>