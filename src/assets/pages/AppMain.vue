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
      filteredRest: [],
    };
  },
  components: {
    AppType,
    AppRestaurantCard,
  },
  methods: {
    rndNumber() {
      this.randomPerTe = (Math.floor(Math.random() * Object.keys(this.arrTypes).length) + 1);
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

        this.tests.forEach((test) => {
          this.selectedRest = this.arrRest.find(selectedRest => selectedRest.id === test);
          this.filteredRest.push(this.selectedRest);
        });
        console.log(this.filteredRest);

        this.rndNumber();
      });
    },
    pushID(id) {
      this.tests = [];
      this.tests.push(id);
      console.log(this.tests);
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
          <span v-if="this.tests.includes(daje.type_id)"> {{ daje.restaurant_id }}</span>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-6" v-for="  singleType   in   arrTypes  " :key="singleType.id">
            <AppType :singleType="singleType" :active="true" @click="pushID(singleType.id)" />
          </div>
        </div>
      </div>
      <div class="cont-text" style="background: linear-gradient(267deg, #9f672e 2.83%, #37363d 97.17%)">
        <h2 class="d-inline-block text-light">Per te:</h2>
        <span class="text-light fs-5">
          {{ this.randomResoult }}
        </span>
      </div>
      <div class="cont-card">
        <div class="row">
          <div class="col-md-2 col-sm-6" v-for="  restaurant   in   arrRest  " :key="restaurant.id">
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
}

.row {
  display: flex;
  border-radius: 4rem;
}

.cont-text {
  padding: 1.5rem;
  margin-top: 1rem;
  background-color: rgb(55, 54, 60);
  border-radius: 2rem;
}

.cont-card {
  margin-top: 1.5rem;
  padding-inline: 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
}

.border {
  border-radius: 4rem;
}
</style>
