<template>
     <div class="slide">
        <div class="swiper-container swiper1" >
            <div class="swiper-wrapper" >
                <div class="swiper-slide"  v-for="(num,idx) in data" :key="idx">
                    <a href="javascript:;"><img :src="num.pic"></a>
                </div>
            </div>
            <div class="swiper-pagination">
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "../../../static/js/swiper/dist/js/swiper.js";
export default {
    props: ['data'],
 data() {
  return {

  }
 },
 mounted() {
     new Swiper(".swiper1", {                
                clickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    paginationType: 'custom',
                    clickable: true,
                },
            })
 },
 components: {

 }
}
</script>

<style scoped>
@import '../../../static/css/swiper.min.css';
.slide{
    width:100%;
    height:375px;
    background:#f0f0f0;
}
.swiper-container{
    width:100%;
    height:375px;
}
.swiper-wrapper div{
    width:100%;
    height:375px; 
}
.swiper-wrapper div a img{
    width:100%;
    height:375px;
    
}
</style>
<style>
.swiper-pagination-bullet{
	background:gray !important; 
	margin-bottom:-5px !important;
	width: 6px !important;
    height: 6px !important;
}
.swiper-pagination-bullet-active{
    background:#ffffff !important;
	width: 6px !important;
    height: 6px !important;
}
</style>

