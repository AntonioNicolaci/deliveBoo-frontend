<script>
import axios from "axios";
import AppTypeSelector from './AppTypeSelector.vue'
import AppRestaurantCard from "./AppRestaurantCard.vue";
export default {
  props: {
    arrayTypes: Array,
    arrRest: Object,
  },
  // data() {
  //   return {
  //     linkImg: "",
  //     randomPerTe: "",
  //     restaurants: "",
  //     arrTypes: [],
  //   };
  // },
  methods: {
    rndNumber() {
      this.randomPerTe = Math.floor(Math.random() * Object.keys(this.arrayTypes).length);
    },
    addImg(img) {
      return `assets/img/${this.img}`;
    },

    restSearch(type) {
      this.type = type;
      this.getRestaurants();
    },


  },
  created() {
    this.rndNumber();
  },
  components: {
    AppTypeSelector,
    AppRestaurantCard,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="container-type">
      <h1 class="font">Restaurants</h1>
      <div class="cont-type d-flex">
        <AppTypeSelector v-for="singleType in arrayTypes" :key="singleType.id" :singleType="singleType" :active="true" />
      </div>
    </div>
    <div class="cont-text" style="background: linear-gradient(267deg, #9F672E 2.83%, #37363D 97.17%);">
      <h2 class="d-inline-block text-light">Per te: </h2>
      <span class="text-light fs-5" style="">
        <!-- {{ arrayTypes[randomPerTe].description }} -->
      </span>
    </div>
    <div class="cont-card">
      <AppRestaurantCard v-for="rest in arrRest" :key="rest" />
    </div>
  </div>
</template>

<style lang="scss">
.container-fluid {
  padding: 3rem;
}

.container-type {
  border-radius: 3rem;
  padding: 1rem;
  width: 100%;
  background-color: rgb(231, 165, 80);
}

.font {
  font-size: 4rem;
  color: rgb(55, 54, 60);
}

.type {
  height: 170px;
  background: white;
  width: 100px;
  border-radius: 4rem;
}

.type:hover {
  background-color: rgb(55, 54, 60);
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
}

.border {
  border-radius: 4rem;
}
</style>
