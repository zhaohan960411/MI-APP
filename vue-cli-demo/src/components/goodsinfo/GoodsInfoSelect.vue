<template>
 <div class="select">
     <div class="Infoone">
         <div class="cx">
             <span>促销</span>
             <b>赠品</b>
             <p>赠米粉卡，最高含100元话费</p>
             <i class="iconfont">&#xe64a;</i>
         </div>
         <div class="fq">
              <span>分期</span>
              <p>小米分期/花呗分期</p>
               <i class="iconfont">&#xe64a;</i>
         </div>
     </div>
     <div class="hj">
         <span>换机</span>
         <p>高价回收，急速到账换新机</p>
         <i class="iconfont">&#xe64a;</i>
     </div>
     <div class="yx">
         <div class="xz">
            <span>已选</span>
            <p>{{data.yx}}</p>
            <i class="iconfont">&#xe64a;</i>
         </div>
          <div class="sz">
             <span>送至</span>
             <p>西安市 雁塔区</p>
             <font>有现货</font>
             <i class="iconfont">&#xe64a;</i>
         </div>
         <div class="th">
             <a href="javascript:;"><i class="iconfont">&#xe68b;</i><span>小米自营</span></a>
             <a href="javascript:;"><i class="iconfont">&#xe68b;</i><span>小米发货</span></a>
             <a href="javascript:;"><i class="iconfont">&#xe68b;</i><span>7天无理由退货</span></a>
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

 }
}
</script>

<style scoped>
.select{
    width:100%;
    height:295px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.Infoone{
    width:92%;
    height:90px;
    background: #f5f5f5;
    border:1px #d0d0d0 solid;
    border-radius: 10px;
}
.Infoone .cx{
    width:100%;
    height:45px;
    border-bottom:1px #d0d0d0 solid;
    display: flex;
    align-items: center;
    position: relative;
}
.Infoone .cx span{
    color:#b9b9b9;
    font-size: 12px;
    margin-left:10px;
}
.Infoone .cx b{
    color:#fb8732;
    font-size: 12px;
    border:1px #fb8732 solid;
    padding:1px 2px;
    line-height: 12px;
    text-align: center;
    font-weight: 100;
    margin-left:10px;
}
.Infoone .cx p{
    color:#363636;
    font-size: 12px;
    margin-left:5px;  
}
.Infoone .cx i{
    font-size: 16px;
    color:#aeaeae;
    position: absolute;
    right: 10px;
}
.fq{
    width:100%;
    height:45px;
    display: flex;
    align-items: center;
    position: relative;
}
.fq span{
    color:#b9b9b9;
    font-size: 12px;
    margin-left:10px;
}
.fq p{
    color:#363636;
    font-size: 12px;
    margin-left:10px; 
}
.fq i{
    font-size: 16px;
    color:#aeaeae;
    position: absolute;
    right: 10px;
}
.hj{
    width:92%;
    height:45px;
    background: #f5f5f5;
    border:1px #d0d0d0 solid;
    border-radius: 10px;
    margin-top:10px;
    position: relative;
    display: flex;
    align-items: center;
}
.hj span{
    color:#b9b9b9;
    font-size: 12px;
    margin-left:10px;
}
.hj p{
    color:#e88f55;
    font-size: 12px;
    margin-left:10px; 
}
.hj i{
    font-size: 16px;
    color:#aeaeae;
    position: absolute;
    right: 10px;
}
.yx{
    width:92%;
    height:130px;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    border:1px #d0d0d0 solid;
    border-radius: 10px;
    margin-top:10px;
}
.xz{
    width:100%;
    height:45px;
    border-bottom:1px #d0d0d0 solid;
    display: flex;
    align-items: center;
    position: relative;
}
.xz span{
    color:#b9b9b9;
    font-size: 12px;
    margin-left:10px;
}
.xz p{
    color:#212121;
    font-size: 12px;
    margin-left:10px;
}
.xz i{
    font-size: 16px;
    color:#aeaeae;
    position: absolute;
    right: 10px;
}
.sz{
    width:100%;
    height:45px;
    border-bottom:1px #d0d0d0 solid;
    display: flex;
    align-items: center;
    position: relative;
}
.sz span{
    color:#b9b9b9;
    font-size: 12px;
    margin-left:10px;  
}
.sz p{
    color:#212121;
    font-size: 12px;
    margin-left:10px; 
}
.sz font{
    color:#e88f55;
    font-size: 12px;
    margin-left:10px;
}
.sz i{
    font-size: 16px;
    color:#aeaeae;
    position: absolute;
    right: 10px;
}
.th{
    width:100%;
    height:40px;
    display: flex;
    align-items: center;
    position: relative;
}
.th a {
    margin-left:10px;
}
.th a span{
    font-size: 12px;
    color:#808080;
    margin-left:5px;
}
.th a i{
    color:#e88f55;
    font-size: 14px;
}
</style>
