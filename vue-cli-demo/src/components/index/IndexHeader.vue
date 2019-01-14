<template>
 <header>
     <i class="iconfont">&#xe602;</i>
     <input type="text" placeholder="蓝牙语音遥控器" @focus="$router.push({'path':'/Serch'})">
     <i class="iconfont">&#xe618;</i>
 </header>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped>
 header{
     width:100%;
     height:40px;
     display: flex;
     align-items: center;
     justify-content: space-around;
 }
 header i{
     font-size: 20px;
     color:#999999;
 }
 header input{
     width:80%;
     height:30px;
     border:1px #d9d9d9 solid;
     margin-bottom: 0px;
     box-sizing: border-box;
 }
 header input::-webkit-input-placeholder{
    font-size: 12px;
    color:#9a9a9a;
    background: url(../../../static/img/idxbg.png) no-repeat;
    background-size: 16px 14px;
    text-indent: 30px;
    width:40px;
 }
</style>
