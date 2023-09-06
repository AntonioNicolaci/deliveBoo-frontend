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
            <div class="card">
                <img :src="img" :alt="singleType.name" class="card-image">
                <div class="content">{{ singleType.name }}</div>
            </div>
        </div>

    </template>
    <template v-else-if="active == true">
        <div class="container-fluid">
            <div class="card">
                <img :src="img" :alt="singleType.name" class="card-image">
                <div class="content">
                    <div class="type-name">{{ singleType.name }}</div>
                </div>
            </div>
        </div>

    </template>
</template>
<style lang="scss" scoped>
.container-fluid {
    width: 75%;
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


// @media (max-width: 768px) {

//     .container-card {
//         // display: flex;
//         flex-wrap: wrap;

//     }

//     .card {
//         display: flex;
//         flex-direction: row;
//         border-radius: 2rem;
//         height: 80px;
//         width: calc((100% / 3) - 2rem);

//         img {
//             background-size: cover;
//             background-position: center;
//             width: 30%;
//             height: 100%;
//             border-bottom-left-radius: 2rem;
//             border-top-left-radius: 2rem;
//         }

//         .content {
//             font-size: 1rem;
//             font-weight: 500;
//             text-align: center;
//             align-self: center;
//             justify-self: flex-end;
//             padding-inline: .5rem;
//         }
//     }
// }







// .type-name {
//     font-size: 1rem;
//     color: rgb(55, 54, 60);
// }

// img {
//     height: calc(100% / 2);
//     background-size: cover;
//     background-position: center;
// }

// .card {
//     position: relative;
//     width: 250px;
//     height: 250px;
//     color: #fff;
//     transition: 0.5s;
//     cursor: pointer;
//     border-radius: 6rem;

//     overflow: hidden;

// }


// .card:hover {
//     transform: translateY(-20px);
// }

// .card::before {
//     content: '';
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;

//     border-radius: 1.2em;
// }

// .card::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;

//     filter: blur(30px);
// }

// .card span {
//     position: absolute;
//     top: 6px;
//     left: 6px;
//     right: 6px;
//     bottom: 6px;

//     z-index: 2;
//     border-radius: 1em;
// }

// .card span::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 50%;
//     height: 100%;

// }

// .card .content {
//     position: relative;
//     padding: 10px;
//     z-index: 10;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-weight: 800;
//     font-size: 1.5em;
// }
</style>