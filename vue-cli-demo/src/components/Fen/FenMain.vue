<template>
    <div class="main">
          <fen-zuo></fen-zuo>
          <fen-you></fen-you>
    </div>
</template>                     

<script>

    import FenZuo from "./FenZuo";
    import FenYou from "./FenYou";
    export default {
        name: "FenMain",
      components: {FenZuo, FenYou}
    }
</script>

<style scoped>
.main{flex:1;display: flex;overflow:auto;}
</style>
