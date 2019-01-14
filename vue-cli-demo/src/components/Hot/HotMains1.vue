<template>
                <!-- lun -->
        <div class="lun">
                <div class="swing">
                        <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                        <img src="../../../static/img/hot01.png">
                                                </div>
                                                <div class="swiper-slide">
                                                        <img src="../../../static/img/hot02.png">
                                                </div>
                                    </div>  
                                    <div class="swiper-pagination"></div>
                        </div>    
                </div>      
        </div>

</template>

<script>
import Swiper from "../../../static/js/swiper/dist/js/swiper.min"

    export default {
        name: 'HotMains1',
        mounted(){
        new Swiper('.swiper-container',{
            loop:true,
            autoplay:{
                delay:2000,
                stopOnLastSlide:false,
                disableOnInteraction:false,
            },
        })
        }

    };


</script>

<style scoped>
main{flex:1; overflow:auto;background: #d81a48;}
    /* --lun-- */
.lun{width: 100%;height:3.55rem;}
.lun img{width: 100%;height:3.55rem;}


</style>
