<script>
export default {};
</script>
<template>
  <div class="footer">
    <div class="container">
      <h2>DeliveBoo</h2>
      <p>Tutto ciò che desideri a portata di click!</p>
      <p>Seguici su:</p>
      <div class="icons">
        <i class="bi bi-facebook"></i>
      </div>
      <p>Portaci in tasca:</p>
      <div class="appStore">
        <div class="icons-store"><a href="#">AppleStore</a></div>
        <div class="icons-store"><a href="#">GooglePlay</a></div>
      </div>
      <div class="footerLinks">
        <a href="#">Informazioni</a>
        <a href="#">Note legali</a>
        <a href="#">Contattaci</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  font-family: "Ubuntu", sans-serif;
  background-color: #37363c;
  line-height: 1.8rem;

  .container {
    max-width: 900px;
    text-align: center;
    margin: auto;
    padding: 1.5rem;
    color: white;
  }

  .appStore {
    display: flex;
    align-items: center;
    justify-content: center;

    .icons-store {
      border: 1px solid white;
      border-radius: 5px;
      padding: 0.2rem 1rem;
      margin-right: 0.5rem;
    }
  }

  .footerLinks a,
  .appStore a {
    padding: 0.3rem;
    text-decoration: none;
    color: white;
  }
}

.icons i {
  color: white;
}
</style>
