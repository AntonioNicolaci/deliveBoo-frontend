<script>
import axios from "axios";
import AppType from "../components/AppType.vue";
import AppRestaurantCard from "../components/AppRestaurantCard.vue";
export default {
  data() {
    return {
      linkImg: "",
      randomPerTe: "",
      randomResoult: "",
      arrTypes: {},
      arrRest: {},
      resType: {},
      arrPlate: {},
      selectedRest: [],
      tests: [],
      forza: [],
      filteredRest: [],
    };
  },
  components: {
    AppType,
    AppRestaurantCard,
  },
  methods: {
    rndNumber() {
      this.randomPerTe =
        Math.floor(Math.random() * Object.keys(this.arrTypes).length) + 1;
      this.randomResoult = this.arrTypes[this.randomPerTe].description;
    },
    addImg(img) {
      return `assets/img/${img}`;
    },
    restSearch(type) {
      this.type = type;
      // Esegui una ricerca in base al tipo di ristorante qui
    },
    getData() {
      axios.get("http://127.0.0.1:8000/api/data").then((response) => {
        this.arrRest = response.data.restaurants;
        this.resType = response.data.res_type;
        this.arrTypes = response.data.types;
        this.arrPlate = response.data.plates;

        this.forza.forEach((su) => {
          this.selectedRest = this.arrRest.find(
            (selectedRest) => selectedRest.id === su
          );
          this.filteredRest.push(this.selectedRest);
        });
        console.log(this.filteredRest);

        this.rndNumber();
      });
    },
    pushID(id) {
      this.tests = [];
      this.tests.push(id);
      this.resType.forEach((daje) => {
        if (daje.type_id == id) {
          this.forza.push(daje.restaurant_id);
        }
      });

      this.forza.forEach((su) => {
        this.selectedRest = this.arrRest.find(
          (selectedRest) => selectedRest.id === su
        );
        this.filteredRest.push(this.selectedRest);
      });
    },
    minchia() {
      console.log("daje");
    },
  },
  created() {
    this.getData();
  },
};
</script>
<template>
  <div>
    <div class="container-fluid">
      <div class="container-type">
        <h1 class="title">I tuoi piatti preferiti, consegnati da noi</h1>
        <div v-for="daje in resType">
          <span></span>
          <span v-if="this.tests.includes(daje.type_id)">
            {{ daje.restaurant_id }}</span
          >
        </div>
        <div class="container d-flex justify-content-center flex-wrap gap-4">
          <AppType
            v-for="singleType in arrTypes"
            :id="singleType.id"
            :singleType="singleType"
            :active="true"
            @click="pushID(singleType.id)"
          />
        </div>
      </div>
      <div
        class="cont-text"
        style="
          background: linear-gradient(267deg, #9f672e 2.83%, #37363d 97.17%);
        "
      >
        <h2 class="d-inline-block text-light">Per te:</h2>
        <span class="text-light fs-5">
          {{ this.randomResoult }}
        </span>
      </div>
      <div
        class="container d-flex align-items-center justify-content-center mt-5"
      >
        <div class="row">
          <div
            class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center mb-4"
            v-for="restaurant in filteredRest"
            :key="restaurant.id"
          >
            <AppRestaurantCard :restaurant="restaurant" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-type {
  border-radius: 3rem;
  padding: 1rem;
  width: 100%;
  background-color: rgb(231, 165, 80);
}

.title {
  font-size: 3rem;
  color: rgb(55, 54, 60);
  padding: 1.5rem 2rem;
  text-align: center;
}

.cont-text {
  padding: 1.5rem;
  margin-top: 1rem;
  background-color: rgb(55, 54, 60);
  border-radius: 2rem;
}

.cont-card {
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 2rem auto;
  padding: 0.6rem;
}
</style>
