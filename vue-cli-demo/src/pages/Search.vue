<template>
<div class="seacBoxs">
  <header id="header" class="mui-bar mui-bar-nav">
    <div class="SeacherNav">
      <h1 class="mui-title"><input type="text" placeholder="商品输入框" v-model="searchString" @focus="getSechData" @blur="removeData" class="inputSech"></h1>
      <router-link to="/Index" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left iocn-left"></router-link>
    </div>
    <button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right SeacWord">搜索</button>
  </header>
  <div class="SetcBody">
    <div class="Nav-top">
      <div><p class="Hot-Secter">热门搜索</p></div>
    </div>
    <div><img src="../../static/img/seach.png" alt="" class="seacImg"></div>
    <div class="Nav-top">
      <ul class="uls">
        <li class="pInkBox">净水滤芯免费领</li>
        <li class="pInkBox">小米无线鼠标</li>
        <li class="cYan">飞利浦吸顶灯</li>
        <li class="yeLLowBox">防蓝光护目镜</li>
        <li class="pInkBox">小米无人机</li>
      </ul>
    </div>
    <div class="Nav-top">
      <div>
        <p class="Hot-classify">热门分类</p>
        <ul class="classifyUls">
          <li>手环</li>
          <li>配件</li>
          <li>个性配件</li>
          <li>平板配件</li>
          <li>影音配件</li>
          <li>VR</li>
          <li>婴童</li>
          <li>手机保护壳</li>
          <li>插座</li>
          <li>投影</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="sechList">
    <ul>
      <li class="mui-table-view-cell mui-radio mui-left" v-for="(item, key) in filteredArticles" v-if="filteredArticles">
      {{item.title}}
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  // import search from 'vue-search';
  export default {
    data(){
      return{
      searchString: "",
        searchVal:""
      }
    },
    methods:{
     getSechData(){
        $(".SetcBody").hide();
        $(".sechList").show()
         fetch("http://localhost:3000/vue-cli-server/datas/Serch").then(res => {
           res.json().then(data => {
             this.searchVal=data.articles
           })

         })
      },
      removeData(){
       if ($(".inputSech").val()==""){
         $(".SetcBody").show();
         $(".sechList").hide()
       }
        else {
         $(".SetcBody").hide();
         $(".sechList").show()
       }

      }
    },
    mounted(){

    },
    computed:{
      // 计算数学，匹配搜索
      filteredArticles: function () {
        var articles_array = this.searchVal,
          searchString = this.searchString;

        if(!searchString){
          return articles_array;
        }

        searchString = searchString.trim().toLowerCase();

        articles_array = articles_array.filter(function(item){
          if(item.title.toLowerCase().indexOf(searchString) !== -1){
            return item;
          }
        })

        // 返回过来后的数组
        return articles_array;;
      }
  },
    mounted(){

    },
    created() {

    }


  }


</script>
<style lang="scss" scoped>
.SeacherNav{
  border: 1px solid #d6d6d6;
  height: 42px;
  width: 88%;
  float: left;
  margin:auto 0 ;
  background-color: #fff;
  margin-top: 6px;
  border-radius: 3px;
}
.mui-bar{
  height: 55px;
}
.mui-bar .mui-btn-link {
  font-size: 16px;
  line-height: 44px;
  top: 2px;
  padding: 0;
  color: #007aff;
  border: 0;
}
  .mui-bar .mui-icon {
    font-size: 24px;
    position: relative;
    z-index: 20;
    padding-top: 7px;
    padding-bottom: 10px;
  }
.mui-bar-nav {
  top: 0;
  -webkit-box-shadow: 0 1px 6px #fafafa;
   box-shadow: 0 1px 6px #fafafa;
}
.mui-bar-nav.mui-bar .mui-icon {
  margin-right: -10px;
   margin-left: 0px;
  padding-right: 10px;
  padding-left: 10px;
}
  .iocn-left{
    color: #b2b2b2;
  }
  /*.SeacWord{*/
    /*color: #b2b2b2;*/
  /*}*/
.mui-bar .mui-btn-link[data-v-4da00568] {
  font-size: 16px;
  line-height: 44px;
  top: 5px;
  padding: 0;
  color: black;
  border: 0;
}
.mui-bar .mui-title {
  right: 54px;
  left: 47px;
  display: inline-block;
  overflow: hidden;
  width: auto;
  margin: 0;
  text-overflow: ellipsis;
}
.mui-title {
  font-size: 14px;
  font-weight: 500;
   line-height: 0px;
  position: absolute;
  display: block;
  width: 100%;
  margin: 0 -10px;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  color: #000;
}
  .input[type=color], input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=month], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], select, textarea {
    line-height: 21px;
    width: 100%;
    height: 39px;
     margin-bottom: 0px;
    padding: 10px 15px;
    -webkit-user-select: text;
    border: 0;
    border-radius: 3px;
    outline: 0;
    background-color: #fff;
    -webkit-appearance: none;
  }
  .SetcBody{
    padding-top: 55px;
    width: 100%;
    background-color: #fff;
    height:100%;

  }
  .Nav-top{

    width: 92%;
    margin: 0 auto;
  }
  .Hot-Secter{
    font-size: 18px;
    padding: 10px 0;
    font-weight: 400;
    color: black;
  }
  .seacImg{
    width: 100%;
  }
  .uls{
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
.uls li{
padding: 10px 13px;
  white-space: nowrap;
  font-weight: 400;
  font-size: 12px;
  margin: 10px 5px 0 5px;
  color: #473d3c;
}
  .pInkBox{
    background-color: #f9ebea;
    border: 1px solid #f1a6ad;
  }
  .cYan{
    background: #f0f6ea;
    border: 1px solid #c3cb9a;
  }
  .yeLLowBox{
    background-color: #f9f1ee;
    border: 1px solid #f6c783;
  }
  .Hot-classify{
    font-size: 18px;
    color: black;
    font-weight: 400;
  }
  .classifyUls{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    
  }
.classifyUls li{
  padding: 10px 10px;
  white-space: nowrap;
  background-color: #f5f5f5;
  font-size: 12px;
  margin: 10px 5px 0 5px;
  font-weight: 400;
  color: #797979;
}
  .seacBoxs{
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  input{
    font-size: 14px;
  }
  .sechList{
    width: 91%;
    margin: 0 auto;
    padding-top: 55px;
    height: 100%;
    background-color: #fff;
    display: none;

  }
  .sechList ul li{
    background-color: #fff;
  }
.mui-table-view-cell:after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0px;
  height: 1px;
  content: '';
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  background-color: #c8c7cc;
}
  .table-view-cell.mui-radio.mui-left {
    padding-left: 0px;
  }
.mui-table-view-cell {
  position: relative;
  overflow: hidden;
  padding: 11px 0px;
  -webkit-touch-callout: none;
}
.mui-table-view-cell.mui-checkbox.mui-left, .mui-table-view-cell.mui-radio.mui-left {
   padding-left: 0px;
}
  #app{
    background-color: #fff;
  }
</style>
