
<template>
  <div class="Header">
    <div class="Header-Top">
      <ul>
        <li><router-link to="/Index" tag="span" class="mui-icon mui-icon-arrowleft m-left"></router-link><span class="Ordadderss">订单配送至</span></li>
        <li class="Newadress">新增收货地址<span class="mui-icon mui-icon-forward m-right"></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "oderHeader"
  }
</script>

<style scoped lang="scss">
  .Header{
    width: 100%;
    height: 150px;
    background-image: url(../../../static/img/bgPng.png);
    background-size:100% 200px ;
  }
  .Header-Top{
    padding:20px 10px 0 0px;
    ul{
      li{
        .Ordadderss{
          padding-left: 35%;
          color: white;
        }
        .m-left{
          color:#ffc482;
        }
      }
      .Newadress{
        padding-left: 8px;
        font-size: 20px;
        color: white;
        .m-right{
          padding-top: 50px;
          font-size: 20px;
          color: #ffc482;
        }
      }
    }
  }
</style>
