<template>
    <footer>
        <div class="like">
               <i class="iconfont">&#xe60e;</i>  
               <span>喜欢</span>                                         
        </div>
        <router-link to="/Carts" class="infocart" tag="div">
          <i class="iconfont">&#xe629;</i>
              <p class="mui-badge mui-badge-warning">{{this.$store.getters.qal}}</p>
            <span>购物车</span>      
        </router-link>
        <div class="addcart" @click="addsec">
         <span @click="addcart" class="add">加入购物车</span>
        </div>
    </footer>
</template>

<script>
export default {
    props:['data'],
 data() {
  return {
      count:1,
      num:0

  }
 },
 components: {

 },
 methods: {

    addcart(){
      let p=this.$store.state.users;
      if (p!=""){
        var cart = {
          id:this.$route.params.id,
          count:this.count,
          price:this.data.price,
          oldprice:this.data.oldprice,
          title:this.data.title,
          model:this.data.model,
          pic:this.data.pic,
          checked:this.data.checked,
          cartchecked:this.data.cartchecked
        }
        this.$store.commit("addcart",cart);
        let p={
           id:this.$route.params.id,
          username:this.$store.state.users.username,
          CartList:this.$store.state.cart
        }
            this.$http.post('/api/user/CarList',p).then((res)=>{
              console.log(res)
              if(res.data.status == 1000){
                // alert(res.data.message)
                // console.log(res.data.data);
              }else{
                // alert(res.data.message)
              }
            }).catch((err)=>{
              console.log(err)
            })
      }else {

        alert("请先登录")
      }


     },

    addsec(){

      let p=this.$store.state.users;
      if (p!="") {
        this.$store.commit("addsec");
      }
    } 
 },
 mounted() {

 },

  update(){

  }
}
</script>

<style scoped>
footer{
    width:100%;
    height:50px;
    background:#ffffff;
    display: flex;
    border-top:1px #e0e0e0 solid;
    box-sizing: border-box;
}
.like{
    width:19%;
}
.infocart{
    width:19%;
}
.addcart{
    width:62%;
    background: #ff6b01;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.mui-badge, mui-badge-warning{
    position: absolute;
    background:#ff6b01;
    margin-left:10px;
    margin-top: 10px;
    width:14px;
    height:14px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-15px;
}
.addcart span{
    font-size: 14px;
    color:#feece0;

}
.like{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right:1px #e0e0e0 solid;
}
.like i{
    font-size: 16px;
    color:#b1b1b1;
    margin-top:5px;
}
.like span{
    color:#666666;
    font-size: 12px;
}
.infocart{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.infocart span{
    color:#666666;
    font-size: 12px;
}
.infocart i{
   font-size: 20px; 
   color:#b1b1b1;
   margin-top:5px;
}
</style>
