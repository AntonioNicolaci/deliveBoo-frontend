<script>
export default {
    props: {
        singleType: Object,
        active: Boolean,
    },
    data() {
        return {
            actived: false,
            linkImg: "../img/" + this.singleType.ing,
        }
    },
}
</script>
<template>
    <template v-if="active == false">
        <img src="" alt="">
        <div>
            {{ singleType.name }}
        </div>
    </template>
    <template v-else-if="active == true">
        <div>
            {{ singleType.name }}
        </div>
    </template>
</template>
<style lang="scss" scoped></style>