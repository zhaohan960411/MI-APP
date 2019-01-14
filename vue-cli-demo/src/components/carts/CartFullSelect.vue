<template>
 <div class="fullselect">
     <div class="select">
     <div class="mui-checkbox mui-left select">
		<label></label>
		<input name="checkbox" value="Item 1" type="checkbox"  @change="fullcheck" v-model="$store.state.select">
	</div>
    <span>全选</span>
    </div>
     <div class="totalmoney">
         <span>合计:</span><a href="javascript:;"><font>￥</font><span>{{$store.getters.totalmoney.totalprice}}</span></a>
     </div>
     <div class="settle">
         <router-link to="/Ord" tag="span">结算({{$store.getters.totalmoney.count}})</router-link>
     </div>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 methods: {
      fullcheck(){
        this.$store.commit("CartAllChecked")
    },
    changeColor(){
        let qal = this.$store.getters.totalmoney.count
         if(qal>=1){
             $(".settle").css({"background":"#ff6b01"}) 
         } else if(qal==0){
             $(".settle").css({"background":"#cccccc"}) 
           
            }
    }
 },
 components: {

 },
 mounted() {
     this.changeColor()
 },
 updated() {
    this.changeColor()
 },
}
</script>

<style scoped>
.fullselect{
    width:100%;
    height:50px;
    border-top:1px #e0e0e0 solid;
    display: flex;
}
.mui-checkbox input[type=checkbox]:before, .mui-radio input[type=radio]:before{
    position: absolute;
    top: -14px;
    left: -10px;
    font-size: 20px;
    color: #f56600;
}
.select{
    width:33.3%;
    display: flex;
    align-items: center;
}
.select span{
    color:#222222;
    font-size: 12px;
    margin-left:-5px;
}
.totalmoney{
    width:33.3%;
    display: flex;
    align-items: center;
}
.totalmoney span{
    color:#222222;
    font-size: 12px;
}
.totalmoney a font{
    color:#ff6b01;
    font-size: 10px;
    vertical-align: top;
    margin-left:5px;
}
.totalmoney a span{
    color:#ff811c;
    font-size: 16px;
}
.settle{
    width:33.3%;
    background: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.settle span{
    color:#ffffff;
    font-size: 14px;
}
.fullcheck{
    margin-left:10px;
}
</style>
