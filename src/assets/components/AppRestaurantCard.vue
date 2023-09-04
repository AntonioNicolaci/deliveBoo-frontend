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
    <div class="cont-card">
        <div class="card border" style="width: 18rem">
            <img :src="rest.img" class="card-img-top" :alt="rest.name" />
            <div class="card-body">
                <h2 class="card-text">{{ restaurant.rest_name }}</h2>
                <h3>{{ restaurant.types }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
