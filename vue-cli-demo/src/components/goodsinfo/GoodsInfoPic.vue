<template>
 <div class="Infopics">
     <div class="comslide">
         <div class="swiper-container swiper2" >
            <div class="swiper-wrapper">
                <div class="swiper-slide box1">
                    <a href="javascript:;"><img src="../../../static/img/Info7.png" alt=""></a>
                </div>
                <div class="swiper-slide box2">
                    <a href="javascript:;"><img src="../../../static/img/Info7.png" alt=""></a>
                </div>
                <div class="swiper-slide box3">
                    <a href="javascript:;"><img src="../../../static/img/Info7.png" alt=""></a>
                </div>
                <div class="swiper-slide box4">
                    <a href="javascript:;"><img src="../../../static/img/Info7.png" alt=""></a>
                </div>
            </div>
        </div>
     </div>
     <div class="most">
         <span>更多评论</span>
         <i class="iconfont">&#xe62c;</i>
     </div>
     <div class="infoimg">
         <img src="../../../static/img/Info13.png" alt="">
         <img src="../../../static/img/Info14.png" alt="">
         <img src="../../../static/img/Info15.png" alt="">
     </div>
 </div>
</template>

<script>
import myswiper from "../../../static/js/swiper/dist/js/swiper.js";
export default {
 data() {
  return {

  }
 },
 methods: {
     
 },
 mounted() {
     new myswiper(".swiper2", {                
                clickable: true,
                spaceBetween: 30,
                centeredSlides: true,
            })
 },
 components: {

 }
}
</script>

<style scoped>
.Infopics{
    width:100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
.comslide{
    display: flex;
    height:200px;
    width:96%;
}
.comslide img{
    width:100%;
    height:190px;
}
.most{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:30px;
    margin-bottom: 20px;
}
.most span{
    font-size: 12px;
    color:#5371a7;
}
.most i{
    font-size: 12px;
    color:#5371a7;
}
.infoimg{
    width:100%;
    display: flex;
    flex-direction: column;
}
.infoimg img{
    width:100%;
}
</style>
