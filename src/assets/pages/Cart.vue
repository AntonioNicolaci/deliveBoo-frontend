<script>
import AppOrder from "../components/AppOrder.vue"
export default {
    data() {
        return {
            cartFull: false,
            arrCart: [],
        }
    },
    methods: {
        searchData() {
            if(localStorage.getItem("cart") !== null) {
                this.cartFull = true; 
            } else {
                this.arrCart = localStorage.getItem("cart")
            }
        }
    },
    created () {
        this.searchData();
    },

    components: {
        AppOrder,
    }
}

</script>

<template>
    <template v-if="cartFull == false">
        <span>Carrello vuoto</span>
    </template>
    <template v-else>
        <div class="container dis d-flex justify-content-between">
            <div class="cont-cart">
                <div class="d-flex flex-row  gap-5">
                    <div class="plate fs-4 fw-bold col-5">Piatti</div>
                    <div class="fs-4 col-2 fw-bold">Prezzo</div>
                    <div class="fs-4 col-2 fw-bold">Quantità</div>
                    <div class="fs-4 col-2 fw-bold">Totale</div>
                    <div class="fs-4 col-1 fw-bold">X</div>
                </div>
                <AppOrder class="d-flex flex-row gap-5" v-for="cart in arrCart" :cart="cart"/>
            </div>
        </div>
    </template>
    
</template>

<style lang="scss">
.dis {
    margin-top: 2rem;
    background-color: rgb(231, 165, 80);
    border-radius: 1rem;

}

.cont-cart {
    margin-left: 1rem;

}

.plate {
    padding-inline: 3rem;
}
</style>