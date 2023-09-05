<script>
import axios from "axios";

export default {
    data() {
        return {
            plates: [],
            cart: [],
        };
    },
    methods: {
        addPlate(id) {
            let cart = localStorage.getItem("cart")
            let quantit = document.getElementById(id).value
            document.querySelectorAll(".text-danger").forEach(element => {
                element.innerHTML = ""
            })
            if (quantit <= 0 || quantit == null) { // Controlla se il valore del campo di input è 0 o un numero negativo
                document.getElementById(`error`+id).innerHTML = 'valore minimo richiesto "1"'
            } else {
                if (cart !== null) { // Controlla se il carrello è vuoto o meno
                    if (cart.includes('{"id":"'+ id) == true) { // Controlla se l'id è già presente
                    JSON.parse(cart).forEach((element, key) => {
                        if (element.id == id) {
                            let carrello = JSON.parse(cart)
                            element.quant = quantit
                            carrello[key] = element
                            console.dir(carrello);
                            localStorage.setItem("cart", JSON.stringify(carrello))
                            console.log(localStorage.getItem("cart"));    
                        }
                    })
                    } else {
                        cart = cart.replace("]", ",")
                        cart += '{"id":"'+ id + '", "quant":"'+ quantit +'"}]'
                        cart = cart

                        localStorage.setItem("cart", cart)

                        console.log("oggetto aggiunto");
                    }
                } else {
                    cart = '[{"id":"'+ id + '", "quant":"'+ quantit +'"}]'
                    localStorage.setItem("cart", cart)
                    console.log("oggetto creato 3");
                }
                this.cart = JSON.parse(cart)  
            }
            
        },
        destroyStorage() {
            localStorage.clear()
            console.log("Sono Morte, il distruttore di mondi");
        },
        getData() {
            axios.get("http://127.0.0.1:8000/api/data")
                .then((response) => {
                    this.plates = response.data.plates
                    console.log("fatto");
                })
        }
    },
    created (){
        this.getData()
    }
}
</script>
<template>
    <button @click="destroyStorage()" style="background-color: red; width: 100px; height: 50px; color: aliceblue;">Nuke</button>
    <div v-for="plate in plates">
        <div class="d-flex">
            <span>{{ plate.name }}</span>
            <input type="number" :name="plate.id" :id="plate.id">
            <div style="width:30px; height: 30px; background-color: black; margin: 5px;" @click="addPlate(plate.id)"></div>
            <span class="text-danger" style="font-weight: bold;" :id="`error${ plate.id }`"></span>
        </div>
        
    </div>
</template>
<style lang="scss">
    
</style>