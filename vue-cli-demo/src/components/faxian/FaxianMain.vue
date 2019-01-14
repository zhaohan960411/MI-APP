<template>
    <main>
      <faxian-main-nav   :lunboImgs="faxianmain.lunboImgs"></faxian-main-nav>
      <faxian-main-banner  :banner="faxianmain.Pic"></faxian-main-banner>
      <faxian-main-home></faxian-main-home>
      <faxian-main-list></faxian-main-list>
    </main>
</template>

<script>
    import FaxianMainNav from "./FaxianMainNav";
    import FaxianMainBanner from "./FaxianMainBanner";
    import FaxianMainHome from "./FaxianMainHome";
    import FaxianMainList from "./FaxianMainList";
    export default {
        name: "FaxianMain",
      components: {FaxianMainList, FaxianMainHome, FaxianMainBanner, FaxianMainNav,},
      props:["faxianmain"],

    }
</script>

<style scoped>
  main{flex:1; background:#f5f5f5; overflow:auto}
</style>
