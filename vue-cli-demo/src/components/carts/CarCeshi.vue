<template>
  <!--<div>-->
    <!--<div class="nullshow">-->
      <!--<img src="../../../static/img/cart2.png">-->
      <!--<span>购物车还是空的</span>-->
      <!--<p>去逛逛</p>-->
    <!--</div>-->
    <!--<div class="product" v-for="(item,idx) in data" :key="idx">-->
      <!--<div class="mui-input-row mui-checkbox mui-left">-->
        <!--<label></label>-->
        <!--<input name="checkbox" value="Item 1" type="checkbox" v-model="item.checked">-->
      <!--</div>-->
      <!--<div class="shopxx">-->
        <!--<div class="shoppic">-->
          <!--<img :src="item.pic">-->
        <!--</div>-->
        <!--<div class="shopinfo">-->
          <!--<span class="del" @click.prevent="remove(item.id)">删除</span>-->
          <!--<p class="title">{{item.title}}</p>-->
          <!--<span class="colors">{{item.model}}</span>-->
          <!--<div class="shopprice">-->
            <!--<div class="price">-->
              <!--￥<span>{{item.price}}</span>-->
            <!--</div>-->
            <!--<div class="btn">-->
              <!--<span class="minus" @click.prevent.stop="minuscount(idx)">-</span><span class="num">{{item.count}}</span><span class="add" @click.prevent.stop="addcount(idx)">+</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<div>
  <ul>
    <li v-for="(p,idx) in Cat">
      <a href="#">{{p.title}}</a>
      <a href="#">{{p.price}}</a>
      <a href="#">{{p.count}}</a>
      <a href="#">{{p.model}}</a>
      <img :src="p.pic" alt="">
    </li>
  </ul>
</div>
</template>

<script>
  export default {

    data() {
      return {
        Cat:null
      }
    },
    components: {

    },
    methods: {

  },
    mounted () {
  this.getCartData()
    },
    updated() {

    },

  }
</script>

<style scoped>
  .product{
    width:100%;
    height:80px;
    border-top:1px #e0e0e0 solid;
    display: flex;
    align-items: center;
    background: white;
    margin-bottom: 5px;
  }
  .nullshow{
    width:100%;
    height:80px;
    border-top:1px #e0e0e0 solid;
    display: flex;
    align-items: center;
    background: white;
    margin-bottom: 5px;
    justify-content: center;
    box-sizing: border-box;
  }
  .nullshow img{
    width:40px;
    height:30px;
  }
  .nullshow span{
    color:#bdbdbd;
    font-size: 12px;
    margin-left:5px;
  }
  .nullshow p{
    color:#616161;
    font-size: 12px;
    padding:2px 4px;
    border:1px #e0e0e0 solid;
    margin-left:10px;
  }
  .mui-checkbox input[type=checkbox]:before, .mui-radio input[type=radio]:before{
    position: absolute;
    top: 35px;
    left: -10px;
    font-size: 20px;
    color:#f56600;
  }
  .mui-left{
    width:12%;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .shopxx{
    width:88%;
    height:100px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .del{
    color:#f56600;
    font-size: 12px;
    position: absolute;
    left:280px;
  }
  .check{
    width:16px;
    height:16px;
  }
  .shoppic{
    width:60px;
    height: 60px;
    margin-right:10px;
  }
  .shoppic img{
    width:60px;
    height:60px;
  }
  .btn{
    display: flex;
  }
  .shopprice{
    display: flex;
    justify-content: space-between;
    width:230px;
  }
  .btn span{
    width:22px;
    height: 22px;
    text-align: center;
    box-sizing: border-box;
  }
  .price{
    font-size: 10px;
    color:#fe6b03;
  }
  .minus{
    font-size: 26px;
    color:#666666;
    line-height: 18px;
    border:1px #e0e0e0 solid;
    border-right: 0px;
  }
  .num{
    font-size: 12px;
    color:#424242;
    line-height: 20px;
    border:1px #e0e0e0 solid;

  }
  .add{
    font-size: 18px;
    color:#666666;
    line-height: 18px;
    border:1px #e0e0e0 solid;
    border-left: 0px;
  }
  .price span{
    color:#fe6b03;
    font-size: 15px;
  }
  .colors{
    color:#b0b0b0;
    font-size: 12px;
  }
  .title{
    color:#424242;
    font-size: 12px;
  }
</style>
