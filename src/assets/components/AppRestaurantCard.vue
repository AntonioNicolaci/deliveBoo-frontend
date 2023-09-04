<script>
export default {
    data() {
        return {
            arrRest: [],
        }
    },

    methods: {
        getRestaurants() {
            this.arrRest = sessionStorage.getItem("restaurants");
        },
    },
    created() {
        this.getRestaurants();
    },
}
</script>

<template>
    <div class="cont-card">
        <div class="card border" style="width: 18rem">
            <img :src="rest.img" class="card-img-top" :alt="rest.name" />
            <div class="card-body">
                <h2 class="card-text">{{ rest.rest_name }}</h2>
                <h3>{{ rest.types }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
