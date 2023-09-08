<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- <nav>
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <img src="../img/coloratofinale_360.png" alt="" />
      </div>

      <div class="buttons d-flex flex-row gap-4">
        <a href="http://127.0.0.1:8000/" target="_blank">
          Registrati
          <button type="button" id="btn-registrati" class="btn btn-light">
          </button>
        </a>

        <a href="http://127.0.0.1:8000/login" target="_blank">
            Accedi
          <button type="button" id="btn-accedi" class="btn btn-light">
          </button>
        </a>

        <router-link
          :to="{ name: 'cart' }"
          class="nav-link active"
          aria-current="page"
          target="_blank"
        >
        Carrello
          <button type="button" id="btn-carrello" class="btn btn-light">
          </button>
        </router-link>
      </div>
    </div>
  </nav> -->
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <img class="nav-logo" src="../img/coloratofinale_360.png" alt="" />
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <!-- <span></span>
        <span></span>
        <span></span> -->
        <i class="bi bi-list"></i>
      </label>
    </div>

    <div class="nav-links">
      <a
        href="http://127.0.0.1:8000/"
        id="btn-accedi"
        class="btn-links"
        target="_blank"
      >
        Registrati
        <!-- <button type="button" id="btn-registrati" class="btn btn-links">
            </button> -->
      </a>
      <a
        href="http://127.0.0.1:8000/login"
        id="btn-accedi"
        class="btn-links"
        target="_blank"
      >
        Accedi
        <!-- <button type="button" id="btn-accedi" class="btn btn-links">
            </button> -->
      </a>
      <router-link
        :to="{ name: 'cart' }"
        class="nav-link active btn-links"
        aria-current="page"
        target="_blank"
      >
        <i class="bi bi-bag-fill"></i>
        <!-- <button type="button" id="btn-carrello" class="btn btn-links"></button> -->
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav {
  height: 80px;
  width: 100%;
  background-color: #e6e0d7;
  position: relative;
  padding: 0.6rem;
}

.nav > .nav-header {
  display: inline;
  width: 1200px;
}

.nav > .nav-header > .nav-logo {
  max-width: 120px;
  display: inline-block;
  padding: 10px 20px;
  margin-left: 60px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  font-size: 0.93rem;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #37363c;
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav > .nav-header > .nav-logo {
    max-width: 100px;
    padding: 10px;
    margin-left: 10px;
  }
  .nav > .nav-btn {
    display: inline-block;
    position: relative;
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 10px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  /*
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }

  */
  .nav > .nav-btn > label > i {
    display: block;
    font-size: 2rem;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #37363c;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
    text-align: center;
    color: white;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    //height: calc(100vh - 150px);
    height: 200px;
    margin-top: 1rem;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
