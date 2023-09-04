<script>
export default {
    data() {
        return {
            arrRest: [],
        }
    },

    methods: {
        getRestaurants() {
            axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
                this.arrRest = response.data;
            });
        },
    },
}
</script>

<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="rest.img" class="img-fluid rounded-start" :alt="rest.name">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ rest.rest_name }}</h5>
                    <p class="card-text">{{ rest.address }}</p>
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
