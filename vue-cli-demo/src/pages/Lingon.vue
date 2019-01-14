<template>
<div class="box">
  <LoginHeader></LoginHeader>
  <LoginBody></LoginBody>

</div>
</template>

<script>
    import LoginHeader from "../components/Longin/PhoneLingon/LoginHeader";
    import LoginBody from "../components/Longin/PhoneLingon/LoginBody";
    import LonginFooter from "../components/Longin/PhoneLingon/LonginFooter";
    export default {
        name: "Lingon",
      components: {LonginFooter, LoginBody, LoginHeader}
    }
</script>

<style scoped>
.box{
  width: 100%;

  background-color: #fff;
}
</style>
