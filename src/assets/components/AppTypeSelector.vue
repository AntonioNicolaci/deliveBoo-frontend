<script>
export default {
    props: {
        singleType: Object,
        active: Boolean,
    },
    data() {
        return {
            actived: false,
            linkImg: "../img/" + this.singleType.img,
        }
    },
}
</script>
<template>
    <template v-if="active == false">
        <img :src="singleType.img" :alt="singleType.name">
        <div class="cont-type d-flex align-items-end justify-content-center">
            {{ singleType.name }}
        </div>
    </template>
    <template v-else-if="active == true">
        <div class="cont-type d-flex align-items-end justify-content-center">
            {{ singleType.name }}
        </div>
    </template>
</template>
<style lang="scss" scoped>
.cont-type {
    height: 200px;
    background: white;
    width: 150px;
    border-radius: 4rem;
}

.cont-type:hover {
    background-color: rgb(55, 54, 60);
    color: white;
}
</style>