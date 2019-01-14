<template>
    <div class="registerBox">
      <div class="header">
        <ul>
          <li><p class="icop"><span class="mui-icon mui-icon-arrowleft"></span></p></li>
          <li><router-link to="/LingonsU/UsersLon" tag="p">登录</router-link></li>
        </ul>
      </div>
      <div class="LogoBox">
        <img src="../../static/img/milogo.png" alt="">
      </div>
      <div class="BoxBody">
        <ul>
          <li><input type="text" placeholder="手机号" class="userPhone" v-model="username"><p class="rongMassge">手机号输入错误</p></li>
          <li><input type="text" placeholder="密码" class="password" v-model="password"></li>
          <li><button type="button" class="mui-btn mui-btn-danger mui-btn-block longinBoxs" @click="Regster">立即注册</button></li>
        </ul>
        <div class="CheckBox">
          <div class="mui-input-row mui-checkbox mui-left">
            <label>已阅读并同意<a class="deal">小米账号协议、隐私政策</a>和<a class="deal">小米商城用户协议</a></label>
            <input name="checkbox" value="Item 1" type="checkbox"  v-model="ischeck">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "register",
      data(){
        return{
          ischeck:false,
          username: '',
          password: '',
          nameId: "",
          showID: false,
          array: [],
          showAll: false,
          pic:"../../static/img/userPhto.png"
        }
      },
      methods:{
          Regster(){

              this.showAll = false
              this.showID = false
            let params = {
              username: this.username,
              password: this.password,
              pic:this.pic
            }
            if (this.ischeck && $(".userPhone").val()!=""){
              $(".longinBoxs").removeAttr("disabled","disabled");
              $(".longinBoxs").css({
                opacity:1
              })
              this.$http.post('/api/user/register',params).then((res)=>{
                console.log(res)
                if(res.data.status == 1000){
                  alert(res.data.message)
                }else{
                  alert(res.data.message)
                }
              }).catch((err)=>{
                console.log(err)
              })
            }else
            {
              alert("请填写相关内容")
            }

          },
        lonIn(){
          if (this.ischeck && $(".userPhone").val()!=""){
            $(".longinBoxs").removeAttr("disabled","disabled");
            $(".longinBoxs").css({
              opacity:1
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

            })
          }
          changeColor();
        },

      updated() {
        this.lonIn()

      },

    }
</script>

<style scoped>
.registerBox{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
  .header{
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
  }
  .header ul{
    display: flex;
    justify-content: space-between;
  }
  .icop{
    margin-left: -10px;
  }
 .LogoBox{
   width: 100%;
   height: 200px;
  display: flex;
   align-items: center;
   justify-content: space-around;

 }
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
  top:50px;
  color:#f05911 ;
  font-size: 12px;
  display: none;
}
.code{
  font-size: 15px;
}
</style>
