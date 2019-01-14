<template>
  <div>
    <transition name="fade" mode="in-out">
      <router-view class="changes"></router-view>
    </transition>
    <LonginFooter></LonginFooter>
  </div>

</template>

<script>
    import LonginFooter from "../components/Longin/PhoneLingon/LonginFooter";
    export default {
        name: "LingonsU",
      components: {LonginFooter}
    }
</script>

<style scoped>
.changes{
  position: absolute;
}
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity 3s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity .1s;
  }
</style>
