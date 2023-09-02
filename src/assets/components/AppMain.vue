<script>
import axios from "axios";
import AppTypeSelector from './AppTypeSelector.vue'
export default {
  // props: {
  //   arrTypes: Object,
  // },
  // data() {
  //   return {
  //     linkImg: "",
  //     randomPerTe: "",
  //   };
  // },
  // methods: {
  //   rndNumber() {
  //     this.randomPerTe = Math.floor(Math.random() * Object.keys(this.arrTypes).length);
  //   },
  //   addImg(img) {
  //     return `assets/img/${this.img}`;
  //   },
  // },
  // created() {
  //   this.rndNumber();
  // },
  components: {
    AppTypeSelector,
  },

  data() {
    return {
      restaurants: "",
      arrRest: [],
      arrTypes: [],
    };
  },
  methods: {

    getTypes() {
      axios.get("http://127.0.0.1:8000/api/types").then((response) => {
        this.arrTypes = response.data;
      });
    },
    // restSearch(type) {
    //   this.type = type;
    //   this.getRestaurants();
    // },
  },
  created() {
    this.rndNumber();
  },
  components: {
    AppTypeSelector,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="container-type">
      <h1 class="font">Restaurants</h1>
      <div class="cont-type d-flex">
        <AppTypeSelector v-for="singleType in arrTypes" :key="singleType.id" :singleType="singleType" />
      </div>
    </div>
    <div class="cont-text" style="background: linear-gradient(267deg, #9F672E 2.83%, #37363D 97.17%);">
      <h2 class="d-inline-block text-light">Per te: </h2>
      <span class="text-light fs-5" style="">
        <!-- {{ arrTypes[randomPerTe].description }} -->
      </span>
    </div>
    <div class="cont-card">
      <div class="card border" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h2 class="card-text">Qui andrà il titolo del piatto</h2>
          <h3>Tipologia piatto</h3>
        </div>
      </div>
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
