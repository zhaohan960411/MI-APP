<template>
    <nav>
          <img src="../../../../static/img/indna01.png" alt="">
           <router-link to="/MiPurchase" tag="img" img src="../../../../static/img/indna02.png"></router-link>
          <img src="../../../../static/img/indna03.png" alt="">
          <img src="../../../../static/img/indna04.png" alt="">
          <router-link to="/EverydayChoose" tag="img" img src="../../../../static/img/indna05.png"></router-link>
          <router-link to="/Hot" tag="img" img src="../../../../static/img/indna06.png"></router-link>
          <img src="../../../../static/img/indna07.png" alt="">
          <img src="../../../../static/img/indna08.png" alt="">
          <img src="../../../../static/img/indna09.png" alt="">
          <img src="../../../../static/img/indna10.png" alt="">
    </nav>
</template>
<script>
    export default {
        name: "indexNav",
        props:["na"]
      
    }
</script>

<style scoped>
  nav{
    width: 100%;
    height: 1.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  nav img{
    width:20%;
    height:.75rem;
    display: -webkit-flex;
  }
</style>
