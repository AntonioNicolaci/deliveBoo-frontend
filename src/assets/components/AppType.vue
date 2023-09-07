<script>
export default {
    props: {
        singleType: Array,
        active: Boolean,
    },
    data() {
        return {
            actived: false,
            img: "/" + this.singleType.img,
        }
    },
}



</script>
<template>
    <template v-if="active == false">
        <div class=" container d-flex justify-content-center">
            <div class="card col-xxl-12 col-xl-4 col-lg-6 col-md-2 col-sm-6">
                <img :src="img" :alt="singleType.name" class="card-image col-xxl-12 col-xl-12 col-lg-2">
                <div class="content">{{ singleType.name }}</div>
            </div>
        </div>
    </template>
    <template v-if="active == true">
        <div class=" container d-flex justify-content-center">
            <div class="card col-xxl-12 col-xl-3 col-lg-6 col-md-2 col-sm-6">
                <img :src="img" :alt="singleType.name" class="card-image col-xxl-12 col-xl-12 col-lg-2">
                <div class="content">{{ singleType.name }}</div>
            </div>
        </div>
    </template>
</template>
<style lang="scss" scoped>
.container {}


.card {
    border-radius: 2rem;
    height: 400px;
    width: 300px;
    margin-bottom: 1rem;

    img {
        background-size: cover;
        height: 70%;
        width: 100%;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
    }

    .content {
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        padding-top: 1rem;
    }
}

.card:hover {
    background-color: rgb(55, 54, 60);
    color: white;
}
</style>