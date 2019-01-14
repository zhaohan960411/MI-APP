<template>
 <div class="container">
     <a href="javascript:;" class="icon1"><router-link to="/Index" tag="i" class="iconfont">&#xe642;</router-link></a>
     <a href="javascript:;" class="icon2"><i class="iconfont">&#xe637;</i></a>
     <div class="addsec">
         <i class="iconfont">&#xe68b;</i>
         <span>加入购物车成功</span>
     </div>
    <main>
        <GoodsInfo-Slide :data="GoodsInfoData.pics" v-if="GoodsInfoData"></GoodsInfo-Slide>
        <GoodsInfo-Text :data="GoodsInfoData.parameter" v-if="GoodsInfoData"></GoodsInfo-Text> 
        <GoodsInfo-Select :data="GoodsInfoData.parameter" v-if="GoodsInfoData"></GoodsInfo-Select>
        <GoodsInfo-Pic></GoodsInfo-Pic>
    </main>
        <GoodsInfo-Footer :data="GoodsInfoData" v-if="GoodsInfoData"></GoodsInfo-Footer> 
       
 </div>
</template>

<script>
import GoodsInfoSlide from '../components/goodsinfo/GoodsInfoSlide.vue'
import GoodsInfoText from '../components/goodsinfo/GoodsInfoText.vue'
import GoodsInfoSelect from '../components/goodsinfo/GoodsInfoSelect.vue'
import GoodsInfoPic from '../components/goodsinfo/GoodsInfoPic.vue'
import GoodsInfoFooter from '../components/goodsinfo/GoodsInfoFooter.vue'
import GoodsInfoData from  '../apis/goodsinfo.js'
 export default {
 data() {
  return {
      GoodsInfoData :null
  }
 },
 methods: {
    /** 
        * 初始化数据
        * @private
        */
      _GoodsInfoData(){
          let paramsid = this.$route.params.id
        GoodsInfoData.GoodsInfo(data=>{
        this.GoodsInfoData = data[paramsid]
        });
    }, 
 },
 mounted() {
        this._GoodsInfoData()
 },
 components: {
     GoodsInfoSlide,
     GoodsInfoText,
     GoodsInfoPic,
     GoodsInfoSelect,
     GoodsInfoFooter
 }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
}
main{
    position: relative;
    overflow: auto;
    flex: 1;
}
.addsec{
    position: absolute;
    z-index: 101;
    background: rgba(0, 0, 0, .65);
    width:130px;
    height:80px;
    border-radius: 5px;
    top:295px;
    left:125px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.addsec i{
    color:#fffcfa;
    font-size: 20px;
    margin-bottom: 5px;
    display: block;
    margin-top:15px; 
    margin-left:55px;
}
.addsec span{
    color:white;
    font-size: 13px;
    margin-left:20px;
}
.icon1 i{
    position: absolute;
    z-index: 100;
    left:10px;
    top:10px;
    color:white;
    background: #909090;
    border-radius:50%;
    padding: 1px 3px;
}
.icon2 i{
    position: absolute;
    z-index: 100;
    left:345px;
    top:10px;
    color:white;
    background: #909090;
    border-radius:50%;
    padding: 1px 3px;
}
</style>
