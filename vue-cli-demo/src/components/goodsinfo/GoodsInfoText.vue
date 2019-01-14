<template>
 <div class="infotext">
     <div class="info">
         <div class="title">
             <h6>{{data.title}}</h6>
             <img src="../../../static/img/Info5.png" alt="">
         </div>
         <div class="text">
             <font>{{data.shopfont}}</font>{{data.shoptext}}
         </div>
         <div class="infoprice">
            <div class="newprice"><span>￥</span><h5>{{data.price}}</h5></div>
            <div class="oldprice"><span>￥</span><p>{{data.oldprice}}</p></div>
         </div>
         <div class="Infopic">
             <img :src="data.modelpic">
         </div>
     </div>
 </div>
</template>

<script>
export default {
    props: ['data'],
 data() {
  return {

  }
 },
 components: {

 },
 mounted() {
    
 },
}
</script>

<style scoped>
.infotext{
    width:100%;
    display: flex;
    flex-direction: column;
}
.info{
    width:100%;
    height:230px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title{
    width:90%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title h6{
    font-size: 20px;
    color:#222222;
}
.title img{
    width:18px;
    height:18px;
}
.text{
    width:94%;
    height:80px;
    font-size: 13px;
    color:#484848;
}
.text font{
    color:#ff4a00;
    font-size: 13px;
}
.infoprice{
    width:92%;
    height:46px;
    display: flex;
    align-items: center;
}
.infoprice .newprice{
    display: flex;
}
.infoprice .newprice h5{
    color:#ff6b01;
    font-size: 20px;
}
.infoprice .newprice span{
    color:#ff6b01;
    font-size: 14px;
    line-height: 16px
}
.infoprice .oldprice{
    display: flex;
    margin-left:5px;
}
.infoprice .oldprice span{
    font-size: 13px;
    color:#757575;
}
.infoprice .oldprice p{
    font-size: 13px;
    color:#757575;
    text-decoration: line-through;
}
.Infopic{
    width:92%;
    height:50px;
}
.Infopic img{
    width:100%;
    height:50px;
}
</style>
