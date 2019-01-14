<template>
    <div class="FooterBox">
      <a><span class="mui-icon mui-icon-weixin weiXin"></span></a>
    </div>
</template>

<script>
    export default {
        name: "LonginFooter",
        mounted() {
        $(".weiXin").click(function () {
        alert("对不起不会跳转微信")
        })
        }
    }
</script>

<style scoped>
  .FooterBox{
    width: 100%;
      text-align: center;
      padding: 50px 0;
      background-color: #fff;
      z-index: 100;
    padding-top: 560px  ;
  }
  .FooterBox a {
    color: #8F8F94;
    margin: 3px;
    width: 50px;
    height: 50px;
    display: inline-block;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 25px;
    background-clip: padding-box;
    line-height: 50px;

  }

  .mui-content-padded a {

  }
</style>
