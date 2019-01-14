<template>
    <div class="warp">
      <everyday-choose-header :data="navinfo" v-if="navinfo"></everyday-choose-header>
      <div class="content">
         <everyday-choose-content :data="navinfo" v-if="navinfo" ></everyday-choose-content>
      </div>
    </div>
</template>

<script>
    import everydaychooseApis from "../apis/everydaychooseApis";
    import EverydayChooseHeader from "../components/everydaychoose/EverydayChooseHeader";
    import EverydayChooseContent from "../components/everydaychoose/EverydayChooseContent";
    export default {
        name: "EverydayChoose",
      components: {EverydayChooseContent, EverydayChooseHeader},
      mounted(){

        $(".content").scroll(function () {
         if($(".content").scrollTop()>=250){
           $(".nav").css("display","block")
         }else {
           $(".nav").css("display","none")
         }
        })
      },
      data(){
        return{
          navinfo:null

        }
      },
      methods:{
        _initPageData(){
          everydaychooseApis.getNavData(data=>{
            this.navinfo=data
            // console.log(this.);
          })
        }
      },
      created(){
        this._initPageData()
      }
    }
</script>

<style scoped>
  .warp{
    display:flex;
    flex-direction: column;
    height: 100%;
  }
  .content{
    width: 100%;
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #f5f5f5;
  }
</style>
