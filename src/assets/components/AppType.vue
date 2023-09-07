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
            <div class="card col-lg-12 col-md-8 col-sm-6">
                <img :src="img" :alt="singleType.name" class="card-image col-lg-12 col-md-8 col-sm-6">
                <div class="content">{{ singleType.name }}</div>
            </div>
        </div>

    </template>
    <template v-else-if="active == true">
        <div class="container-fluid">
            <div class="card col-lg-12 col-md-8 col-sm-6">
                <img :src="img" :alt="singleType.name" class="card-image col-lg-12 col-md-8 col-sm-6">
                <div class="content">{{ singleType.name }}</div>
            </div>
        </div>

    </template>
</template>
<style lang="scss" scoped>
.card {
    border-radius: 2rem;
    height: 200px;
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


@media(max-width: 1031px) {
    .container-fluid {
        display: flex;
        width: calc(100% / 6);
    }

    .card {
        flex: 0 1 auto;
    }
}

@media(max-width: 992px) {
    .container-fluid {
        display: flex;
        width: calc(100% / 4);

    }

    .card {
        flex: 0 1 auto;
    }
}

@media(max-width: 920px) {
    .container-fluid {
        display: flex;
        width: calc(100% / 3);

    }

    .card {
        flex: 0 1 auto;
    }
}

@media(max-width: 768px) {
    .container-fluid {
        display: flex;
        width: calc(100% / 2);
    }

    .card {
        flex: 0 1 auto;
    }
}

@media(max-width: 576px) {
    .container-fluid {
        display: flex;
        width: 100%;
    }

    .card {
        flex: 0 1 auto;
    }
}
</style>