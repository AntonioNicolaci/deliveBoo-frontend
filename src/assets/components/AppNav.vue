<script>

export default {
    data() {
        return {

        };
    },
}

</script>

<template>
    <nav class="py-4">
        <div class="container d-flex align-items-center justify-content-between ">
            <div class="logo">
                <img src="../img/coloratofinale_360.png" alt="">
            </div>

            <div class="buttons d-flex flex-row gap-4">

                <a href="http://127.0.0.1:8000/">
                    <button type="button" id="btn-registrati" class="btn btn-light">Registrati</button>
                </a>

                <a href="http://127.0.0.1:8000/login">
                    <button type="button" id="btn-accedi" class="btn btn-light">Accedi</button>
                </a>

                <router-link :to="{ name: 'cart' }" class="nav-link active" aria-current="page">
                    <button type="button" id="btn-carrello" class="btn btn-light">Carrello</button>
                </router-link>


            </div>
        </div>
    </nav>
    <div class="jumbo">
        <img src="../img/jumbo-deliveboo.png" alt="">
    </div>
</template>

<style>
*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav {
    background-color: #E6E0D7;
}

#btn-registrati,
#btn-accedi,
#btn-carrello {
    color: #37363C;
    border: 1px solid #37363C;
    border-radius: 10px;
}

.jumbo img {
    width: 100%;
    background-size: cover;
}
</style>