<template>
    <div class="Header-top">
      <span class="mui-icon mui-icon-closeempty spans"></span>
        <p class="forget">忘记密码</p>
    </div>
</template>

<script>
    export default {
        name: "UserHeader"
    }
</script>

<style scoped>
  .spans{
    font-size: 40px;
    color: #c3c3c3;
  }
  .Header-top{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

    padding-bottom: 50px;
  }
  .forget{
    font-size: 16px;
    padding-top: 8px;
    padding-right: 15px;
  }
</style>
