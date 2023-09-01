<script>
import axios from "axios";
import AppNav from "./assets/components/AppNav.vue";
import AppMain from "./assets/components/AppMain.vue";
import AppFooter from "./assets/components/AppFooter.vue";

export default {
  components: {
    AppNav,
    AppMain,
    AppFooter,
  },

  data() {
    return {
      restaurants: "",
      arrRest: [],
      arrTypes: [],
    };
  },
  methods: {
    getRestaurants() {
      axios
        .get("http://127.0.0.1:8000/api/restaurants", {
          params: {
            type: this.type,
          },
        })
        .then((response) => {
          this.arrRest = response.data;
        });
    },
    getTypes() {
      axios.get("http://127.0.0.1:8000/api/types").then((response) => {
        this.arrTypes = response.data;
      });
    },
    restSearch(type) {
      this.type = type;
      this.getRestaurants();
    },
  },
  created() {
    this.getTypes();
  },
};
</script>

<template>
  <AppNav />
  <router-view></router-view>
  <AppMain :arrTypes="arrTypes" />
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
