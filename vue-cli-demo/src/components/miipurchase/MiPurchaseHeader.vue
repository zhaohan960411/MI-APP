<template>
  <div class="dayheader">
    <div class="chooseheader">
      <span class="qal">{{$store.getters.totalmoney.count}}</span>
      <p class="serch"> <router-link to="/Index" tag="span" class="mui-icon mui-icon-back"></router-link><span>小米闪购</span></p>
     <p class="rig"><span class="mui-icon-extra mui-icon-extra-topic"></span> <span class="mui-icon-extra mui-icon-extra-notice"></span> <router-link to="/Carts" class="iconfont" tag="i">&#xe629;</router-link></p>
    </div>
    <ul class="nav" >
      <li  class="timelist" v-for="p in data.salltime" v-if="data.salltime">
         <span class="time">{{p.timer}}</span>
        <span>{{p.start}}</span>
      </li>
    </ul>

  </div>
</template>

<script>
  // import $ from  "jquery"
    export default {
        name: "MiPurchaseHeader",
      props:["data"],
      mounted(){
          $(".timelist").click(function () {
            $(".timelist").each(function () {
              $(".timelist").css("color","black")
            })
            $(this).css("color","red")
          })
      }
    }
</script>

<style scoped>
  .chooseheader{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .7rem;
    background: #fafafa;
  }
  .serch{
    margin-left: .1rem;
  }
  .serch  .iconfont{
    font-size: .25rem;
    color: #969696;
    margin-right: .05rem;
  }
  .serch span{
    font-size: .22rem;
    color: #424242;
  }
  .rig  .iconfont{
    font-size: 20px;
    color: #969696;
  }
  .rig{
    margin-right: .1rem;
  }
  .rig  .iconfont:nth-child(2){
    margin: 0 .09rem;
  }
  .nav{
    width: 100%;
    display: flex;
 background: white;

  }
  .nav li{
    text-align: center;
    flex: 1;
    padding: .12rem 0;
  }
  .time{
    display: block;
    margin-bottom: .06rem;
  }
  .qal{
    position: absolute;
    background: #f56600;
    color:white;
    border-radius: 50%;
    padding:2px 5px;
    font-size: 10px;
    line-height: 10px;
    top:20px;
    right:3px;
    text-align: center;
  }
  .mui-icon-extra {
    font-family: MuiiconSpread;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
  }
</style>
