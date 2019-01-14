<template>
  <div>
    <div class="swing">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="index" v-for="(p,index) in lunboImgs ">
            <img :src="p .lunboImg"/>
          </div>
        </div>
      </div>
    </div>
  <ul class="nav">
    <li>
      <a href="#">
        <span></span>
        <span>小米礼品卡</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span>小米闪购</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span>好友拼团</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span>小米分期</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span></span>
        <span>小米信用卡</span>
      </a>
    </li>
  </ul>
  </div>
</template>

<script>
  import Swiper from  "../../../static/js/swiper/dist/js/swiper.js"
    export default {
        name: "FaxianMainNav",
      props:["lunboImgs"],
      mounted() {
        new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            delay: 1500,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }
        })
      }
    }
</script>

<style scoped>
  main .swiper-container{
    width: 100%;
    height: 1.88rem;
  }
  main .swiper-wrapper{
    width: 100%;
    height:1.88rem;
  }
  main .swiper-slide img{
    width: 3.75rem;
    height: 100%;
  }
  main .nav{ padding:.16rem .07rem .06rem .07rem;height:.8rem;display:flex;border-bottom:1px solid #ccc;background: #fff;}
  main .nav li{ width:20%; height:100%;}
  main .nav li a{ display:block; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;}
  main .nav li:nth-child(1) a span:nth-child(1){ width:.27rem; height:.22rem; }
  main .nav li:nth-child(2) a span:nth-child(1){ width:.25rem; height:.25rem; }
  main .nav li:nth-child(3) a span:nth-child(1){ width:.31rem; height:.25rem; }
  main .nav li:nth-child(4) a span:nth-child(1){ width:.26rem; height:.26rem; }
  main .nav li:nth-child(5) a span:nth-child(1){ width:.27rem; height:.21rem; }
  main .nav li a span:nth-child(2){ height:.31rem; line-height:.31rem; color: #bb4d06;font-size: .11rem}
  main .nav li:nth-child(1) a span:nth-child(1){ background:url(../../../static/img/Znav1.png) no-repeat; background-size:cover;}
  main .nav li:nth-child(2) a span:nth-child(1){ background:url(../../../static/img/Znav2.png) no-repeat; background-size:cover;}
  main .nav li:nth-child(3) a span:nth-child(1){ background:url(../../../static/img/Znav3.png) no-repeat; background-size:cover;}
  main .nav li:nth-child(4) a span:nth-child(1){ background:url(../../../static/img/Znav4.png) no-repeat; background-size:cover;}
  main .nav li:nth-child(5) a span:nth-child(1){ background:url(../../../static/img/Znav5.png) no-repeat; background-size:cover;}

</style>
