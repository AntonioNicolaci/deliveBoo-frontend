<script>
import axios from "axios";
import AppNav from "./assets/components/AppNav.vue";
import AppJumbo from "./assets/components/AppJumbo.vue";
import AppFooter from "./assets/components/AppFooter.vue";

export default {

  data() {
    return {
      active: true,
      restaurants: "",

    };
  },
  methods: {
    getData() {
      axios.get("http://127.0.0.1:8000/api/data")
        .then((response) => {
          this.arrRest = response.data.restaurants
          this.resType = response.data.res_type
          this.arratypes = response.data.types
          this.arrPlate = response.data.plates
        })  
    },
  },
  created() {
    this.getData();
  },

  components: {
    AppNav,
    AppJumbo,
    AppFooter,
  },
};
</script>

<template>
  <AppNav />
  <AppJumbo />
  <router-view></router-view>
  <AppFooter />
  <!-- <div id="card">
    <button v-for="singleType in arrTypes" :key="singleType.id" class="-ms-card" @click="restSearch(singleType.id)">
      {{ singleType.name }}
    </button>
  </div>
  <ul id="ul">
    <template v-for="rest in arrRest" :key="rest.id">
      <li>{{ rest.rest_name }}</li>
      <li>{{ rest.address }}</li>
      <li>{{ rest.vat }}</li>
      <li>{{ rest.img }}</li>
    </template>
  </ul> -->
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#card {
  display: flex;
  flex-direction: row;
}

.-ms-card {
  background-color: bisque;
  color: cadetblue;
  padding-inline: 5px;
}
</style>
