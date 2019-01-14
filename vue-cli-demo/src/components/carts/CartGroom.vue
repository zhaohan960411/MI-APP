<template>
 <div class="Groomlist">
     <div class="Groompic">
        <img src="../../../static/img/cart3.png">
     </div>
     <div class="shoplists">
         <div class="goods" v-for="(item,idx) in data" :key="idx">
             <img :src="item.pic" >
             <span class="goodstitle">{{item.title}}</span>
             <span class="goodstitlexx">{{item.tetlexx}}</span>
            <div class="goodsprice">
                <font>￥</font><span>{{item.price}}</span>
                <p>{{item.oldprice}}</p>
            </div>
         </div>
     </div>
 </div>
</template>

<script>
export default {
    props:['data'],
 data() {
  return {

  }
 },
 components: {

 },
 mounted () {
     
 }
}
</script>

<style scoped>
.Groomlist{
    width:100%;
    display: flex;
    flex-direction: column;
    margin-top:5px;
}
.Groompic{
    width:100%;
    height:60px;
}
.Groompic img{
    width:100%;
    height:60px;
}
.shoplists{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.goodsprice{
    display: flex;
}
.goods{
    display: flex;
    flex-direction: column;
    width:49.5%;
    height:250px;
}
.goods img{
    width:100%;
    height:185px;
}
.goodstitle{
    color:#505050;
    font-size: 12px;
    margin-left:10px;
    margin-top:5px;
}
.goodstitlexx{
    color:#b0b0b0;
    font-size: 12px;
    margin-left:10px;
    line-height: 16px
}
.goodsprice {
    margin-top:3px;
}
.goodsprice font{
    color:#df5e0b;
    font-size: 8px;
    line-height: 17px;
    margin-left:10px;
}
.goodsprice span{
    color:#ec5b00;
    font-size: 15px;
}
.goodsprice p{
    color:#b8b8b8;
    font-size: 12px;
    margin-left:5px;
    text-decoration: line-through;
}
</style>
