<script>
export default {
    props: {
        restaurant: Object,
    },

    data() {

        return {

        }

    },


}
</script>

<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="rest.img" class="img-fluid rounded-start" :alt="restaurant.name">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ restaurant.rest_name }}</h5>
                    <p class="card-text">{{ restaurant.address }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 

    <div class="cont-card">
        <div class="card border" style="width: 18rem">
            <img :src="rest.img" class="card-img-top" :alt="rest.name" />
            <div class="card-body">
                <h2 class="card-text">{{ rest.rest_name }}</h2>
                <h3>{{ rest.address }}</h3>
            </div>
        </div>
    </div> -->
</template>

<style lang="scss"></style>
