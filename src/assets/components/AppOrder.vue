<script>
export default {
    props: {
        cart: Array,
        plate: Array,
    },
    data() {
        return {
            plates: {},
            singlePrice: "",
        }
    },
    methods: {
        fixData() {
            // this.singlePrice = parseFloat(this.plate.price / 100)
            // let price = this.plate.price
            // let a = price.slice(l
            // let result = price[price].slice(0, price.length - 2);
            // this.singlePrice = price[price].replace(result, result + ",")
        },
    },
    created () {
        console.log(localStorage.getItem("cart"));
    },
}
</script>
<template>
    <div class="d-flex flex-row gap-5" >
        <div class="col-5">
            {{ plate.name }}
            <!-- {{ plate.ingredients }} -->
        </div>
        <div class="col-2">
            <!-- {{ singlePrice }} -->
            {{ plate.price }}
        </div>
        <div class="col-2">
            {{ cart.quant }}
        </div>
        <div class="col-2">
            <!-- {{ price. }} -->
        </div>
        <div class="col-1">
            <!-- remove() -->
        </div>
    </div>
</template>
<style lang="scss">
    
</style>