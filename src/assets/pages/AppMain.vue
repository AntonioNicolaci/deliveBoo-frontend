<script>
import axios from "axios";
import AppType from "../components/AppType.vue";
import AppRestaurantCard from "../components/AppRestaurantCard.vue";
import { setTransitionHooks } from "vue";
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
  <div class="container-fluid">
    <div class="container-type">
      <h1 class="font">Restaurants</h1>
      <div v-for="daje in resType">
        <span v-if="this.tests.includes(daje.type_id)"> {{ daje.restaurant_id }}</span>
    </div>
      <div v-for="restaurant in filteredRest">
        {{ restaurant.rest_name }}
      </div>
      <div class="cont-type d-flex gap-4">
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
      style="background: linear-gradient(267deg, #9f672e 2.83%, #37363d 97.17%)"
    >
      <h2 class="d-inline-block text-light">Per te:</h2>
      <span class="text-light fs-5" style="">
        {{ this.randomResoult }}
      </span>
    </div>
    <div class="cont-card">
      <AppRestaurantCard
      v-for="restaurant in arrRest"
      :key="restaurant.id"
      :restaurant="restaurant"
      />
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

.cont-type {
  display: flex;
  height: 200px;
  // background: white;
  width: 150px;
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
  margin: auto;
  // justify-content: center;
}

.cont-card::after {
content: '';
flex: auto;
justify-content: center;
}

.border {
  border-radius: 4rem;
}
</style>
<script>
import axios from "axios";
import AppType from "../components/AppType.vue";
import AppRestaurantCard from "../components/AppRestaurantCard.vue";
export default {
  data() {
    return {
      linkImg: "",
      randomPerTe: "",
      arrTypes: {},
      arrRest: {},
      resType: {},
      arrPlate: {},
    };
  },
  methods: {
    rndNumber() {
      this.randomPerTe = Math.floor(Math.random() * this.arrayTypes.length);
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
      });
    },
  },
  created() {
    this.getData();
  },

  components: {
    AppType,
    AppRestaurantCard,
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="container-type">
      <h1 class="title">I tuoi piatti preferiti, consegnati da noi</h1>
      <div class="cont-type col-lg-12 col-md-8 ">
        <AppType v-for="singleType in arrTypes" :key="singleType.id" :singleType="singleType" :active="true" />
      </div>
    </div>
    <div class="cont-text" style="background: linear-gradient(267deg, #9f672e 2.83%, #37363d 97.17%)">
      <h2 class="d-inline-block text-light">Per te:</h2>
      <span class="text-light fs-5" style="">
        <!-- {{ arrayTypes[randomPerTe].description }} -->
      </span>
    </div>
    <div class="cont-card">
      <AppRestaurantCard v-for="restaurant in arrRest" :key="restaurant.id" :restaurant="restaurant" />
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

.cont-type {
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

@media(max-width: 1269px) {

  .cont-type {
    width: 100%;
  }

}

@media(max-width: 1335px) {
  .cont-type {

    background-size: cover;
    width: 1250px;
  }

}

@media(max-width: 1290px) {
  .cont-type {
    background-size: cover;
    width: 1200px;

  }
}

@media(max-width: 1241px) {
  .cont-type {
    background-size: cover;
    width: 1150px;


  }
}

@media(max-width: 1200px) {
  .cont-type {
    background-size: cover;
    width: 1100px;


  }
}

@media(max-width: 1139px) {
  .cont-type {
    background-size: cover;
    width: 1080px;
  }
}


@media(max-width: 1100px) {
  .cont-type {
    background-size: cover;
    width: 1030px;
  }
}

@media(max-width: 1060px) {
  .cont-type {
    background-size: cover;
    width: 990px;


  }
}

@media(max-width: 1031px) {
  .cont-type {
    flex-wrap: wrap;
    background-size: contain;
    width: 950px;
  }
}
</style>
