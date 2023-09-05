<script>
import AppOrder from "../components/AppOrder.vue"
import axios from 'axios'
export default {
    data() {
        return {
            cartFull: false,
            arrCart: {},
            plates: {},
        }
    },
    methods: {
        searchData() {
            console.log("siamo dentro");
            if(localStorage.getItem("cart") !== null) {
                this.cartFull = true;

                console.log(localStorage.getItem("cart"))
                let cart = JSON.parse(localStorage.getItem("cart"))
                this.arrCart = cart
            }
        },
        getData() {
            axios.get("http://127.0.0.1:8000/api/data")
                .then((response) => {
                    this.plates = response.data.plates
                    console.log(this.plates);
                })
        }
    },
    created () {
        this.searchData();
        this.getData()
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
                <AppOrder v-for="cart in arrCart" :cart="cart" :plate="plates[cart.id - 1]"/>
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