<script>
export default {
  props: {
    restaurant: Array,
  },

  data() {
    return {
      img: "/img/" + this.restaurant.img,
    };
  },
};
</script>

<template>
  <div class="card-gap">
    <router-link :to="{
      name: 'restaurants.show',
      params: { restaurant: restaurant.id },
    }" class="card-text">
      <div class="card mb-3 col-lg-12 col-md-12">
        <div class="row g-0">
          <div class="col-md-4 cont-img">
            <img :src="img" class="img-fluid rounded-start img" :alt="restaurant.name" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.rest_name }}</h5>
              <p class="card-text">{{ restaurant.address }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>




<style lang="scss" scoped>
.card {
  height: 250px;
}

.card-text {
  text-decoration: none;
  color: black;
}
</style>
