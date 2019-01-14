<template>
  <div class="BoxBody">
    <ul>
      <li><h3>密码登录</h3></li>
      <li><input type="text" placeholder="请输入手机号/邮箱/小米账号" class="userPhone" v-model="username"><p class="rongMassge">手机号输入错误</p></li>
      <li><input type="text" placeholder="请输入密码" class="password" v-model="password"></li>
      <router-link to="/Register" tag="li"><p class="usep">前往注册<span class="mui-icon mui-icon-arrowright "></span></p></router-link>
      <li><button type="button" class="mui-btn mui-btn-danger mui-btn-block longinBoxs" @click="lonIn">登录</button></li>
    </ul>
    <div class="CheckBox">
      <div class="mui-input-row mui-checkbox mui-left">
        <label>已阅读并同意<a class="deal">小米账号协议、隐私政策</a>和<a class="deal">小米商城用户协议</a></label>
        <input name="checkbox" value="Item 1" type="checkbox" v-model="ischeck" >
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "UserLingon",
      data(){
        return{
          ischeck:false,
          // msg: "登录注册",
          username: '',
          password: '',
          pic:'',
          nameId: "",
          showID: false,
          array: [],
          showAll: false,
          pic:null
        }
      },
      mounted() {

        var p=this.ischeck
        function changeColor(){
          $(".BoxBody ul li input").focus(function () {
            $(this).css({
              "border-bottom": "1px solid #ec6525"
            })
          })
          $(".BoxBody ul li input").blur(function () {
            var reg=/^1[3|4|5|7|8|9]\w{9}$/;
            if(reg.test($(".userPhone").val()) || $(".userPhone").val()==""){
              $(".rongMassge").hide()
            }else {
              $(".rongMassge").show(300)
            }
            if (p && $(".userPhone").val()!=""){

              $(".longinBoxs").removeAttr("disabled","disabled");
              $(".longinBoxs").css({
                opacity:1
              })
            }
            $(this).css({
              "border-bottom": "1px solid #c8c7cc"
            })
            //if (this.ischeck){
            //alert(12)
            // $(".longinBoxs").removeAttr("disabled","disabled");
            // $(".longinBoxs").css({
            //   opacity:1
            // })
            //}
            // else if (!this.ischeck || $(".userPhone").val()==""){
            //   $(".longinBoxs").attr("disabled","disabled");
            //   $(".longinBoxs").css({
            //     opacity:0.5
            //   })
            //
            // }
          })
        }
        changeColor();



      },

      methods:{
        CheckBoxed(){
          this.ischeck=!this.ischeck
        },
        lonIn(){
          let p=null
          this.showAll = false
          this.showID = false
          let params = {
            username: this.username,
            password: this.password
          }
          if (this.ischeck && $(".userPhone").val()!=""){
            $(".longinBoxs").removeAttr("disabled","disabled");
            $(".longinBoxs").css({
              opacity:1
            })
            this.$http.post('/api/user/login',params).then((res)=>{
              let that=this
              // console.log(res)
              if(res.data.status == 1000){
                this.showID = true
                alert("登录成功")
                this.$store.commit("loginuser",params)
                this.$router.push("/Index")
                // return  this.pic=res.data.data[0].pic
                this.$store.commit("getPhotto",res.data.data[0].pic)
              }else{
                // console.log(res.data);
                alert("用户名或密码错误")
              }
            }).catch((err)=>{

            })
          }
          if (!this.ischeck || $(".userPhone").val()==""){
            $(".longinBoxs").attr("disabled","disabled");
            $(".longinBoxs").css({
              opacity:0.5
            })

          }

        }
      },
      updated() {
        // this.lonIn();
      }
    }
</script>

<style scoped>
  .BoxBody{
    width: 100%;
  }
  .BoxBody ul{
    width: 90%;
    margin: 0 auto;
  }
  .BoxBody ul li{
    padding-top:40px ;
    position: relative;
  }
  .BoxBody ul li h3{
    font-weight: 600;
    font-size: 30px;
    color: #222222;
  }
  .BoxBody ul li .code{

    position: absolute;
    top: 48px;
    right: 0;
    color: #666666;
  }
  .BoxBody ul li input{
    border: 0;
    padding: 0;
    border-bottom: 1px solid #c8c7cc;
    color: #bebebe;

  }
  .BoxBody ul li:nth-child(1){
    padding-top: 0;
  }
  .usep{
    color: #a3a3a3;
    font-size: 15px;

  }
  .mui-icon{
    font-size: 20px;
  }
  .longinBoxs{
    padding: 10px;
    opacity: 0.5;
    background-color: #f05911;
  }
  .CheckBox{
    width: 90%;
    margin: 0 auto;
  }
  .mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio] {
    left: 0px;
  }
  .mui-checkbox input[type=checkbox]:checked:before, .mui-radio input[type=radio]:checked:before {
    color: #f05911;
  }
  .mui-checkbox input[type=checkbox]:before, .mui-radio input[type=radio]:before {
    font-family: Muiicons;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    text-decoration: none;
    color: #aaa;
    border-radius: 20px;
    background: 0 0;
    -webkit-font-smoothing: antialiased;

  }
  .mui-checkbox.mui-left label, .mui-radio.mui-left label {
    padding-left: 20px;
    font-size: 10px;
    color: #bdbdbd;
  }
  .mui-input-row label {
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    line-height: 1.1;
    float: left;
    width: 100%;
    padding: 10px 0px;
  }
  .deal{
    color: #c7c7c7;
    font-weight: 600;
    text-decoration: underline;
  }
  .rongMassge{
    position: absolute;
    left: 0;
    top:85px;
    color:#f05911 ;
    font-size: 12px;
    display: none;
  }
  .code{
    font-size: 15px;
  }
</style>
