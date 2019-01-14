<template>
    <div>
      <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">编辑收货地址</h1>
      <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left"><span class="mui-icon mui-icon-left-nav"></span></button>
      </header>

    </div>
</template>

<script>
    export default {
        name: "ShopAdress"
    }
</script>

<style scoped lang="scss">
  .mui-bar-nav{
    background-color: #fff;
    .mui-btn-link {
      padding-top: 6px;
      padding-bottom: 6px;
      color: #cccccc;
      border: 0;
      background-color: transparent;
    }
    mui-bar .mui-title {
      right: 0px;
      left: 40px;
      display: inline-block;
      overflow: hidden;
      width: auto;
      margin: 0;
      text-overflow: ellipsis;
    }
    .mui-bar .mui-btn .mui-icon {
      top: -4px;
      margin: 0;
      padding: 0;
    }
  }

</style>
