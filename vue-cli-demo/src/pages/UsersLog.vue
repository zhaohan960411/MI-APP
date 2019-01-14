<template>
  <div class="box">
    <UserHeader></UserHeader>
    <UserLingon></UserLingon>
  </div>
</template>

<script>
    import UserHeader from "../components/Longin/UserLingons/UserHeader";
    import UserLingon from "../components/Longin/UserLingons/UserLingon";
    export default {
        name: "UsersLog",
      components: {UserLingon, UserHeader}
    }
</script>

<style scoped>
  .box{
    width: 100%;

    background-color: #fff;
  }
</style>
