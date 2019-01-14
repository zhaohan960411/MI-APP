<template>
<footer>
  <ul>
    <span class="qal">{{$store.getters.totalmoney.count}}</span>
    <router-link to="/Index" tag="li">
      <i class="iconfont">&#xe61b;</i>
      <span>首页</span>
    </router-link>
    <router-link to="/Fen/0" tag="li">
      <i class="iconfont">&#xe622;</i>
      <span>分类</span>
    </router-link>
      <router-link to="/faxian" tag="li">
      <i class="iconfont">&#xe746;</i>
      <span>发现</span>
      </router-link>
      <router-link to="/Carts" tag="li">
      <i class="iconfont">&#xe629;</i>
      <span>购物车</span>
      </router-link>
      <router-link to="/MyPageHome" tag="li">
      <i class="iconfont">&#xe60f;</i>
      <span>我的</span>
      </router-link>
  </ul>
</footer>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 },
 methods: {
   show(){
     let qal =  this.$store.getters.totalmoney.count
     if(qal==0){
       $(".qal").css("display","none")
     }
   }
 },
 mounted () {
   this.show();
   // console.log(this.$store.getters.totalmoney.count);
 },
 updated () {
   this.show()

 }
}
</script>

<style scoped lang="scss">
.qal{
  position: absolute;
  background: #f56600;
  color:white;
  border-radius: 50%;
  padding:2px 5px;
  font-size: 10px;
  line-height: 10px;
  top:3px;
  left:262px;
  text-align: center;
}
footer{
  width:100%;
  height:50px;
  display: flex;
  background: white;
}
footer ul{
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
footer ul li{
  display: flex;
  flex-direction: column;
  width:20%;
  justify-content: center;
  align-items: center;
}
footer ul li span{
  font-size: 12px;
  color:#808080;
}
footer ul li i{
  color:#808080;
  font-size: 18px;
  margin-top:5px;
}
.link i{
    color:#f56600;;
    }
    .link span{
    color:#f56600;;
    }

</style>
