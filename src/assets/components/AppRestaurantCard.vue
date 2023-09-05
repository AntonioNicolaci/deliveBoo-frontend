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
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 cont-img">
          <img
            :src="img"
            class="img-fluid rounded-start img"
            :alt="restaurant.name"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              <router-link
                :to="{
                  name: 'restaurants.show',
                  params: { restaurant: restaurant.id },
                }"
              >
                {{ restaurant.rest_name }}
              </router-link>
            </h5>
            <p class="card-text">{{ restaurant.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-gap {
  flex: 0 0 30%;
  padding: 0.5rem 0.8rem;

  img {
    width: 100%;
    background-size: cover;
    background-position: center;
  }
}
</style>
