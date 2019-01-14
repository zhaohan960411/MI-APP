<template>
<div>
    <div class="nullshow">
        <img src="../../../static/img/cart2.png">
        <span>购物车还是空的</span>
        <p>去逛逛</p>
    </div>
 <div class="product" v-for="(item,idx) in data" :key="idx">
    <div class="mui-input-row mui-checkbox mui-left">
		<label></label>
		<input name="checkbox" value="Item 1" type="checkbox" v-model="item.checked">
	</div>
     <div class="shopxx">
         <div class="shoppic">
             <img :src="item.pic">
         </div>
         <div class="shopinfo">
             <span class="del" @click.prevent="remove(item.id)">删除</span>
            <p class="title">{{item.title}}</p>
            <span class="colors">{{item.model}}</span>
            <div class="shopprice">
                 <div class="price">
                     ￥<span>{{item.price}}</span>
                 </div>
                 <div class="btn">
                     <span class="minus" @click="minuscount(idx)">-</span><span class="num">{{item.count}}</span><span class="add" @click="addcount(idx)">+</span>
                 </div>
            </div>
         </div>
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
 methods: {

     addcount(idx){

        this.$store.commit("addcount",idx)
     },
      minuscount(idx){
        this.$store.commit("minuscount",idx)
     },
     //显示购物车空空如也
     nullshow(){
       let p=this.$store.state.users;
       if (p!="" && $(".product").length>0){
           $(".nullshow").hide()
         }else{
              $(".nullshow").show()
         }
     }, 
     remove(id,index){
       let r=[]
       this.$store.commit("ChangeCartNum",r)
      //
       this.$http.post('/api/user/delete',id).then((res) => {
         console.log(res)
         // this.array = res.data.datassssss
       }).catch((err) => {
         console.log(err)
       })

         //点击删除，把商品从store中根据传递的Id删除，同时把当前组件中goodlists中，对应要删除的那个商品，使用index来删除
         this.data.splice(index,1);
         this.$store.commit('removecar',id)
     }
 },
 mounted () {
     this.nullshow()
 },
 updated() {
   this.nullshow()

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
