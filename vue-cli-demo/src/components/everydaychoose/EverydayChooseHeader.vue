<template>
   <div class="dayheader">
     <div class="navSetch">
       <div class="iconBox"> <router-link to="/Index" tag="span" class="mui-icon mui-icon-arrowleft"></router-link></div>
     <div class="mui-input-row mui-password">
       <span class="mui-icon mui-icon-search iconSetch"></span><input type="text" class="mui-input-password" data-input-password="3" placeholder="商品搜索" @focus="$router.push({'path':'/Serch'});">
     </div>
     <router-link to="/Carts" tag="span" class="mui-icon-extra mui-icon-extra-cart"></router-link>
     </div>
       <ul class="nav" >
         <li class="titlelist" v-for="(l,index) in data.navlist" :key="index" v-if="data.navlist">
           {{l.name}}
         </li>
       </ul>



   </div>

</template>

<script>
    export default {
        name: "EverydayChooseHeader",
      props:["data"],
      mounted() {
        $(".titlelist").click(function () {
          $(".titlelist").each(function () {
            $(".titlelist").css({"color": "#6e6e6e", "background": "none"})
          })
          $(this).css({"color": "white", "background": "red", "border-radius": "5px"})
        });
      }
    }
</script>

<style scoped lang="scss">
  .dayheader{
    background: #fafafa;
  }
.chooseheader{
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #969696;
  text-align: center;
  height: .6rem;
 line-height: .6rem;

}
.navSetch{
  display: flex;
  position: relative;
  .mui-icon {
  /*position: absolute;*/
  /*left: 10px;*/
  /*top: 20px;*/
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;

  }
  .mui-icon-extra {
    position: absolute;
    right: 10px;
    top: 20px;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
  }
  .iconSetch{
    position: absolute;
    left: 5px;
    top: 8px;
  }
}
  .iconfont{
    font-size: .28rem;
  }
  .serch{
    font-size: .18rem;
    width: 2.8rem;
    height: .43rem;
    line-height: .47rem;
    border: 1px solid #cccccc;
    border-radius: .02rem;
    margin: auto;
  }
  .nav{

    height: .4rem;
    display: flex;
    font-size:.17rem ;
    color:#6e6e6e;
    line-height: .4rem;
    white-space: nowrap;
    overflow-x:scroll;
    overflow-y:hidden ;
   overflow-scrolling: touch;
    /*display: none;*/
  }
  .nav li{
    flex: 1;
    display: inline-block;
    padding:0  .07rem;
  }
  .nav::-webkit-scrollbar {
    display: none;
  }
  .mui-input-row{
    width: 80%;
    top: 10px;
    left: 7px;
  }
  .iconBox{
    padding-top: 20px;
  }
  input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], select, textarea {
    line-height: 21px;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    padding: 10px 15px;
    -webkit-user-select: text;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
    outline: 0;
    background-color: #fff;
    -webkit-appearance: none;
    text-indent: 20px;
  }

</style>
