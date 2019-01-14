<template>
    <div class="bigBox">
      <div class="loadeingBox">
        <van-loading color="skyblue" size="50px"/>
      </div>
      <faxian-header></faxian-header>
      <faxian-main :faxianmain="faxiandata"></faxian-main>
      <Index-Footer></Index-Footer>
    </div>
</template>

<script>
    import FaxianHeader from "../components/faxian/FaxianHeader";
    import FaxianMain from "../components/faxian/FaxianMain";
    import  IndexFooter from '../components/index/IndexFooter'//尾部
    export default {
        name: "faxian",
        components: {IndexFooter, FaxianMain, FaxianHeader},
        data(){
            return{
                 faxiandata:{
                      lunboImgs:[
                       {
                         "lunboImg":"../../static/img/Zbig1.png"
                       },
                       {
                         "lunboImg":"../../static/img/Zbig2.png"
                       },
                       {
                         "lunboImg":"../../static/img/Zbig3.png"
                       }
                     ],
                      Pic:[
                         {
                           "Pic":"../../static/img/Zmenu1.png"
                         },
                         {
                           "Pic":"../../static/img/Zmenu2.png"
                         },
                         {
                           "Pic":"../../static/img/Zmenu3.png"
                         },
                         {
                           "Pic":"../../static/img/Zmenu4.png"
                         },
                         {
                           "Pic":"../../static/img/Zmenu5.png"
                         }
                       ],
                      foot:[
                        {
                          class:"iconfont icon-shouye",
                          title:"首页"
                        },
                        {
                          class:"iconfont icon-fenlei",
                          title:"分类"
                        },
                        {
                          class:"iconfont icon-faxian",
                          title:"发现"
                        },
                        {
                          class:"iconfont icon-gouwuche",
                          title:"购物车"
                        },
                        {
                          class:"iconfont icon-wode",
                          title:"我的"
                        }
                      ],
                    },
                }
        },
      created(){
       setTimeout(()=>{
         $(".loadeingBox").remove()
       },1000)
      }
    }

</script>

<style scoped>
  .loadeingBox{
    width: 100%;
    height: 87%;
    background-color:rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    z-index: 20;
    top: 40px;
  }
  .bigBox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
