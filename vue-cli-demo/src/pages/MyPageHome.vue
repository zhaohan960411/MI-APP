<template>
<div class="container">
  <main>
  <section>
    <div class="header">
      <div>
        <div class="cap"><img :src="pic" alt=""></div>
        <div class="name">
          <router-link to="LingonsU/UsersLon"  class="UserName">登录/注册</router-link>
        </div>
      </div>
      <div class="imgs">
        <img class="infoimg" src="../assets/imgs/picinfo.png" alt="" >
        <img class="huiyuan" src="../assets/imgs/huiyuan.png" alt="">
      </div>
    </div>
    <div class="order">
      <span>我的订单</span>
      <a href="javascript:;">全部订单<i class="icon"></i></a>
    </div>
    <div class="option">
      <a href="javascript:;"><img src="../assets/imgs/icon01.png" alt=""><span>代付款</span></a>
      <a href="javascript:;"><img src="../assets/imgs/icon02.png" alt=""><span>待收货</span></a>
      <a href="javascript:;"><img src="../assets/imgs/icon03.png" alt=""><span>待评价</span></a>
      <a href="javascript:;"><img src="../assets/imgs/icon04.png" alt=""><span>退换修</span></a>
    </div>

    <ul class="listuls">
      <li>
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon01.png" alt=""></a>
        <a class="listword" href="javascript:;">优惠券<i class="icon"></i></a>
      </li>
      <li>
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon02.png" alt=""></a>
        <a class="listword" href="javascript:;">会员中心<i class="icon"></i></a>
      </li>
      <li>
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon03.png" alt=""></a>
        <a class="listword" href="javascript:;">我的钱包<i class="icon"></i></a>
      </li>
    </ul>
    <ul class="listuls">
      <li>
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon04.png" alt=""></a>
        <a class="listword" href="javascript:;">服务中心<i class="icon"></i></a>
      </li>
      <li>
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon05.png" alt=""></a>
        <a class="listword" href="javascript:;">小米之家<i class="icon"></i></a>
      </li>
      <li>
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon06.png" alt=""></a>
        <a class="listword" href="javascript:;">小米小店<i class="icon"></i></a>
      </li>
      <li>
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon07.png" alt=""></a>
        <a class="listword" href="javascript:;">更多功能<i class="icon"></i></a>
      </li>
    </ul>
    <ul class="listuls">
      <li class="lastlistlli">
        <a class="listicon" href="javascript:;"><img src="../assets/imgs/listicon08.png" alt=""></a>
        <a class="listword" href="javascript:;">设置<i class="icon"></i></a>
      </li>
    </ul>

  </section>
  </main>
    <Index-Footer></Index-Footer>
    </div>
</template>

<script type='text/ecmascript-6'>
import  IndexFooter from '../components/index/IndexFooter'//尾部
  export default {
    name: "MyPageHome",
    data(){
      return{
        pic:"../../static/img/cap.png"
      }
    },
    methods:{

    },
      mounted(){

        // console.log(12);
        var Num="";
        for(var i=0;i<4;i++)
        {
          Num+=Math.floor(Math.random()*10);
        }
        let p=this.$store.state.users
        if (p!=""){
          $(".UserName").text(Num+"用户已登录")
         this.pic=this.$store.getters.UserPhoto
        }else {
          this.pic="../../static/img/cap.png"
          $(".UserName").text("登录注册")
        }
      },
      created(){

      },
      components: {
        IndexFooter
      }
  }
</script>
<style scoped lang="scss">
.container{
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
  .icon{
    display:block;
    width:0.1rem;
    height:0.1rem;
    border-right:1px solid #a4a4a4;
    border-bottom:1px solid #a4a4a4;
    transform: rotate(-45deg);
    margin-right:0.14rem;
  }
  section{
    flex:1;
    overflow-y: auto;
    width:100%;
    background: #f5f5f5;
    .header{
      width:100%;
      height:90px;
      display:flex;
      align-items: center;
      justify-content:space-between;
      background: url(../assets/imgs/he-bg01.png) center 0 #f37d0f;
      background-size: auto 100%;
      position:relative;
      div{
        display:flex;
        justify-content:flex-start;
        align-items: center;
        .cap{
          width:53px;
          height:53px;
          border:3px solid hsla(0,0%,100%,.4);
          border-radius: 50%;
          text-align: center;
          margin-left:15px;
          margin-right:10px;
          img{
            border-radius:50%;
            width:100%;
            height:100%;
          }
        }
        .name{
          display:flex;
          font-size: 16px;
          text-align: left;
          a{
            color: #fff;

          }
        }
      }
      .imgs{
        display:block;
        img{
          display:block;
        }
        .infoimg{
          width:30px;
          position:absolute;
          right:0.7%;
          top:14%;;
        }
        .huiyuan{
          width:14px;
          margin-top:15px;
        }
      }
    }
    .order{
      height:42px;
      background:#fff;
      color:#222222;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        font-size:15px;
        margin-left:15px;
      }
      a{
        font-size:14px;
        color:#a5a5a5;
        display: flex;
        align-items: center;
        .icon{
          margin-left:8px;
        }
      }
    }
    .option{
      height:92px;
      background:#fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top:2px;
      text-align: center;
      a{
        color: rgba(0,0,0,.87);
        font-size:13px;
        img{
          width:24px;
          height:24px;
          margin:0 auto;
          margin-bottom:9px;
        }
      }
    }
    .banner{
      display:block;
      width:100%;
      height:106px;
      img{
        width:100%;
      }
    }
    .listuls{
      width:100%;
      background:#fff;
      margin-top:8px;
      li{
        width:100%;
        height:56px;
        display: flex;
        align-items: center;
        .listicon{
          width:15%;
          height:56px;
          display: flex;
          align-items: center;
          justify-content:center;;
          img{
            width:24px;
            height:24px;
          }
        }
        .listword{
          width:85%;
          height:54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color:#2d2d2d;
          font-size:14px;
          border-bottom:2px solid #f3f3f3;
        }
      }
      .lastlistlli{
        .listicon{
          height:0.54rem;
          border-bottom: 2px solid #f3f3f3;
        }
      }
    }
  }
</style>
