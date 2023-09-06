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
        <div class="container-fluid">
            <div class="card col-xxl-12">
                <img :src="img" :alt="singleType.name" class="card-image">
                <div class="content">{{ singleType.name }}</div>
            </div>
        </div>

    </template>
    <template v-else-if="active == true">
        <div class="container-fluid">
            <div class="card">
                <img :src="img" :alt="singleType.name" class="card-image col-lg-12 col-md-8 col-sm-6 col-sx-12">
                <div class="content">
                    <div class="type-name">{{ singleType.name }}</div>
                </div>
            </div>
        </div>

    </template>
</template>
<style lang="scss" scoped>
.container-fluid {
    width: 100%;
}

.card {
    border-radius: 2rem;
    height: 200px;

    img {
        background-size: cover;
        height: 70%;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
    }

    img {
        background-size: cover;
        height: 70%;
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

.content {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    padding-top: 1rem;
}


.card:hover {
    background-color: rgb(55, 54, 60);
    color: white;
}

.card:hover {
    background-color: rgb(55, 54, 60);
    color: white;
}
</style>