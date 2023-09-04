import axios from "axios";

axios.get("http://127.0.0.1:8000/api/restaurants")
.then((response) => {
    const restaurants = response.data.restaurants
    const res_type = response.data.res_type
    const types = response.data.types
    const plates = response.data.plates

    sessionStorage.setItem("restaurants", restaurants);
    sessionStorage.setItem("res_type", res_type);
    sessionStorage.setItem("types", types);
    sessionStorage.setItem("plates", plates);
});