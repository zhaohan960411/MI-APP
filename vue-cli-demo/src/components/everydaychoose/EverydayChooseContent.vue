<template>
    <div>

      <div class="swiper-container">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="p in data.siliders"  v-if="data.siliders">
            <img :src="p.pic" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="navlist">
           <div class="goodscreat">
             <p class="goodstitle">好物揭秘</p>
             <ul>
               <li class="goodsnews" v-for="l in data.demystifylist"  v-if="data.demystifylist" >
                 <img :src="l.pic" alt="">
                 <p>
                   <span class="inr">{{l.inr}}</span>
                   <span class="rel">{{l.release}}</span>
                   <span class="read">{{l.read}}</span>
                 </p>
               </li>
             </ul>
           </div>
           <div class="wintergoods">
             <img class="winter" src="../../../static/img/e7.png" alt="">
             <div class="miwatch">
               <img class="bracelet" src="../../../static/img/e8.png" alt="">
              <li class="intr">
                <p class="mileft">
                  <span class="mititle">小米手环3NFC版</span>
                  <span class="bus">能刷公交卡的触屏手环</span>
                </p>
                <span class="money">￥199</span>
              </li>
               <ul class="winterproduct">
                 <li class="winterlist" v-for="l in data.miwatch"  v-if="data.miwatch">
                   <img :src="l.pic" alt="">
                   <span class="listtitle">{{l.title}}</span>
                   <span class="listinr">{{l.inr}}</span>
                   <span class="listpric">{{l.pric}}</span>
                 </li>
               </ul>
             </div>
           </div>


          <div class="productl" ref="productl" v-for="(l,i) in data.navlist"  v-if="data.navlist" :key="i">
            <img  class="titlepic" :src="l.titlepic" alt="">
            <ul class="winterproductl">
              <li class="winterlistl" v-for="p in l.productlist" v-if="l.productlist">
                <img :src="p.pic" alt="">
                <span class="listtitle">{{p.title}}</span>
                <span class="listinr">{{p.inr}}</span>
                <span class="listpric">{{p.pric}}</span>
              </li>
            </ul>
          </div>



      </div>
    </div>

</template>

<script>
  import Swiper from "swiper"
    export default {

      props:["data"],
      mounted() {

        new Swiper(".swiper-container", {

          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false

          },
          loopedSlides: 8,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
        // if (this.listenScroll) {
        //   let me = this
        //   this.scroll.on('scroll', (pos) => {
        //     me.$emit('scroll', pos)
        //   })
        // }
      },
      methods:{
        scrollHeight (pos) {
          console.log(pos);
          this.scrollY = Math.abs(Math.round(pos.y))
        },
        _calculateHeight() {
          let divs = this.$refs.productl;
          let height = 0
          // this.rightHeight.push(height)
          Array.prototype.slice.call(divs).forEach(div => {
            height += div.clientHeight
            // this.rightHeight.push(height)
          })
          console.log(this.rightHeight)
        },
        selectTop (index, event) {
          if (!event._constructed) {
            return
          }
          let productl= this.$refs.productl
          let el = productl[index]
          this.$refs.bottomMenu.scrollToElement(el, 300)
        },
      },
      computed: {
        // currentIndex () {
        //   const { scrollY, rightHeight } = this
        //   const index = rightHeight.findIndex((height, index) => {
        //     return scrollY >= rightHeight[index] && scrollY < rightHeight[index + 1]
        //   })
        //   return index > 0 ? index : 0
        // }
      },
      created(){
        // this._calculateHeight()
      }
    }
</script>

<style scoped>


  .swiper-slide{
    position: relative;
    margin-top: .12rem;
  }
  .swiper-slide img{
    width: 100%;
    height: 2.3rem;
  }
.goodscreat{
  width: 100%;
  margin-top: .1rem;
  background: white;
}
  .goodstitle{
    font-size: .20rem;
    padding: .1rem  .2rem;
    font-weight: 600;
    color: #000000;
  }
  .goodsnews{
    display: flex;
  }
  .goodsnews img{
   width: 45%;
    height:1.2rem ;
  }
.inr{
  display: block;
  font-size: .16rem;
  color:#424242;
  padding: .08rem;
  margin-bottom: .1rem;
}
  .rel{
    margin-left: .08rem;
  }
  .read{
    margin-left: .38rem;
  }
  .winter{
    width: 100%;
    height: .8rem;
  }
  .wintergoods{
    margin: .1rem 0;

  }
  .bracelet{
    width: 100%;
    height: 2rem;
  }
  .intr{
    width: 100%;
   display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
  }
  .mileft{
    padding: .12rem;
  }
  .mititle{
    display: block;
    font-size: .18rem;
    color: #424242;
   margin-bottom: .1rem;
  }
  .bus{

    font-size: .16rem;
    color: #b0b0b0;
  }
  .money{
    font-size: .18rem;
    color: orangered;
    margin-right: .2rem;
  }
  .winterproduct{
    display: flex;
    justify-content: space-between;
  }
  .winterlist{
    width: 49.5%;
    background: white;
  }
  .winterlist img{
    width: 100%;
  }
  .listtitle{
    display: block;
    font-size: .14rem;
    color: #424242;
    text-align: center;
  }
  .listinr{
    display: block;
    font-size: .14rem;
    text-align: center;
  }
  .listpric{
    display: block;
    font-size: .14rem;
    text-align: center;
    color: orangered;
    margin-bottom: 0.08rem;
  }
.titlepic{
  width: 100%;
  height: 1.6rem;
}
 .winterproductl{
   display: flex;
    flex-wrap:wrap ;
   justify-content: space-between;
  }
  .winterlistl{
    width: 49.5%;
    background: white;
  }
  .winterlistl img{
    width: 100%;
  }
</style>
<style>

</style>
