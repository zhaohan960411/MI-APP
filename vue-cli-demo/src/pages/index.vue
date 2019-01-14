<!-- :inx="ind.hea"
下方是路由跳转方法


-->

<template>

  <div class="box">
    <div class="loadeingBox">
      <van-loading color="skyblue" size="50px"/>
    </div>
    <Index-Header></Index-Header>
    <main class="main">
      <van-tabs v-model="active" swipeable animated>
        <van-tab v-for="(item,index) in ind" :key="index" :title="item.nava" color="blue">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <index-flex v-if="index==0"></index-flex>
      <pho-flex v-if="index==1"></pho-flex>
      <capa-flex v-if="index==2"></capa-flex>
      <tcl-flex v-if="index==3"></tcl-flex>
      <note-flex v-if="index==4"></note-flex>
      <hous-flex v-if="index==5"></hous-flex>
      <aro-flex  v-if="index==6"></aro-flex>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </main>
    <Index-Footer></Index-Footer>
  </div>
</template>
<script>
  import $ from "jquery"
  import IndexHeader from '../components/index/IndexHeader'//头部
  import IndexFooter from '../components/index/IndexFooter'
  import IndexFlex from "../components/index/recommend/indexFlex";
  import PhoFlex from "../components/index/phone/phoFlex";
  import TclFlex from "../components/index/tcl/tclFlex";
  import NoteFlex from "../components/index/note/noteFlex";
  import HousFlex from "../components/index/house/housFlex";
  import AroFlex from "../components/index/around/aroFlex";
  import CapaFlex from "../components/index/capacity/capaFlex";
  //尾部
    export default {
        name: "index",
      components: {CapaFlex, AroFlex, HousFlex, NoteFlex, TclFlex, PhoFlex, IndexFlex, IndexHeader,IndexFooter},
      data(){
          return{
            transitionName: 'transitionLeft',
            ind:[],
            ord:0,
            bgh:0,
            active: "one",
            isLoading: false,

          }
      },

      methods:{
        //   changeLoding(){
        //   $("").click(function () {
        //     console.log($(this).index());
        //   })
        // },
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            // this.count++;
          }, 500);
        },
        getCartData(){
          let p={
            username:this.$store.state.users.username
          }

          this.$http.post('/api/user/GetCartList',p).then((res)=>{
            // console.log(res)
            if(res.data.status == 1000){
              // alert(res.data.message)
              // console.log(res.data.data[0].CartList);
              // console.log(12);
              this.$store.commit("GetCartList",res.data.data[0].CartList)
              // console.log(this.itemInfo);
            }else{
              // alert(res.data.message)
            }
          }).catch((err)=>{
            // console.log(err)
          })
        },
        scrTop(){
            $(".main").animate({
                scrollTop:0
            },1000)
        },
        graph(index){
          var add=[]
          add.push(IndexRecommend,IndexPhone,IndexCapacity,IndexTcl,IndexNote,IndexAround,IndexHouse,IndexHeader)
          this.mindex=add[index]
          this.mind=index
          // $(this).css({
          //   "color":"pink"
          // })
          console.log(this)
        },


      },
      mounted(){
        this.getCartData()
        $(".van-tabs__wrap--scrollable .van-tab").click(function () {
          $(".loadeingBox").show();
          setTimeout(()=>{
            $(".loadeingBox").hide()
          },1000)
        })
        $(".van-tabs__wrap--scrollable .van-tab").click(function () {
          alert(1)
        })
      },
      created(){
        this.getCartData()
        fetch("http://localhost:3000/vue-cli-server/datas/index").then(res=>{
          res.json().then(data=>{
            this.ind=data[0].hea
            
          })
        })
        setTimeout(()=>{
          $(".loadeingBox").hide()
        },1000)
      },
      updated() {
        this.getCartData()
        $(".van-tabs__wrap--scrollable .van-tab").click(function () {
          $(".loadeingBox").show();
          setTimeout(()=>{
            $(".loadeingBox").hide()
          },1000)
        })
      }

    }
</script>

<style scoped lang="scss">
  .loadeingBox{
    width: 100%;
    height: 80%;
    background-color:rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    z-index: 20;
    top: 83px;
  }
  .box{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    overflow: auto;
    background: white;
  }
  header{
    width: 100%;
    height: .3rem;
    /*background: red;*/
    display: -webkit-flex;
  }
  header .he-ul{
    width: 4rem;
    height:100%;
    /*background: #4cd964;*/
    display: -webkit-flex;
    overflow: auto;
  }
  .he-ul li{
    flex-shrink: 0;
    height: 100%;
    padding: 0rem .13rem;
    display: -webkit-flex;
  }
  /*.he-ul li:nth-of-type(1) a{*/
    /*color: #ff4a00;*/
    /*border-bottom: .03rem solid #ff4a00;*/
  /*}*/
  .he-ul li a{
    box-sizing: border-box;
    height: 100%;
    line-height: .3rem;
    font-size: .12rem;
    color: #999999;
  }
  header .he-opt{
    width: .100%;
    height: 100%;
  }
  .he-opt a{
    display: block;
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  .he-opt a .iconfont{
    display: block;
    font-size: .15rem;
    color: #c0c0c0;
  }
  main{
    flex: 1;
    overflow: auto;
    position: relative;
  }
  header .scrollTop{
    width: .5rem;
    height: .85rem;
    /*background: red;*/
    position: fixed;
    bottom: .5rem;
    right: .1rem;
    /*border-radius: 50%;*/
    z-index: 3;
    /*opacity: .6;*/
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .scrollTop .scrApp{
    width: .4rem;
    height: .4rem;
    /*background-color: white;*/
  }
  .scrApp img{
    width: .4rem;
    height: .4rem;
  }
  .he-ul::-webkit-scrollbar{
    display: none;
}
  .item {
    display: inline-block;
  }
</style>
<style>
  .van-tabs__wrap {
    top: 39px;
    left: 0;
    right: 0;
    z-index: 99;
    overflow: hidden;
    position: fixed;
  }
  .van-tabs__nav {

    /*display: flex;*/
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    background-color: #fff;
    width: 100%;
  }
  .van-tab--active {
    font-weight: 500;
    color:#ff4a00 !important;
  }
  .van-tabs__line {
    z-index: 1;
    left: 0;
    bottom: 16px;
    height: 3px;
    position: absolute;
    border-radius: 3px;
    background-color: #ff4a00;
  }
  .van-tabs__wrap--scrollable .van-tab {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 0%;
     flex: 0 0 0%;
    padding: 0  13px 0 14px;
    /*display: inline-block;*/
    float: left;
  }
</style>
