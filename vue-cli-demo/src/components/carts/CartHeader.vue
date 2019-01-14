<template>
<header>
        <span>购物车</span>
        <p>编辑</p>
        <i class="iconfont">&#xe602;</i>
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
    height:50px;
    display: flex;
    justify-content: flex-end;
    background: #fafafa;
    align-items: center;
}
header span{
    margin-right:100px;
    font-size: 14px;
    color:#212121;
}
header i{
    margin-right:10px;
    font-size: 16px;
    color:#969696;
}
header p{
    margin-right:10px;
    color:#484848;
    font-size: 13px;
}
</style>
