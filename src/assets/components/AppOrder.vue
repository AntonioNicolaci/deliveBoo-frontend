<script>
export default {
    props: {
        cart: Array,
        plate: Array,
        keyO: Number,
        arrCart: Object
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
        remove() {
            let cart = JSON.parse(localStorage.getItem("cart"))
            console.log(this.keyO);
            cart[this.keyO].quantit = 0
            localStorage.setItem("cart", JSON.stringify(cart))
            this.cart.quantit = 0
        }
    },
}
</script>
<template>
    <template  v-if="cart.quantit !== 0">
        <div class="d-flex flex-row gap-5" >
                <div class="col-5">
                    {{ plate.name }}
                    <!-- {{ plate.ingredients }} -->
                </div>
                <div class="col-2">
                    <!-- {{ singlePrice }} -->
                    € {{ Math.round(plate.price / 100).toFixed(2) }}
                </div>
                <div class="col-2">
                    {{ cart.quantit }}
                </div>
                <div class="col-2">
                    <!-- {{ price. }} -->
                </div>
                <div class="col-1 text-danger" @click="remove()" style="font-weight: bold;">
                    X
                </div>
            </div>
    </template>
    
</template>
<style lang="scss">
    
</style>