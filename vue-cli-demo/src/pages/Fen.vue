<template>
    <div class="all">
      <div class="loadeingBox">
        <van-loading color="skyblue" size="50px"/>
      </div>
        <fen-header></fen-header>
        <main>
            <div class="content">
                <div class="zuo">
                    <Fen-Zuo :data="goodlist"></Fen-Zuo>
                </div>
                <div class="you">
                    <Fen-You :data="item" v-if="item"></Fen-You>   
                </div>
            </div>
        </main>
        <Index-Footer></Index-Footer>
    </div>
</template>

<script>
     
    import FenHeader from "../components/Fen/FenHeader";
    import  IndexFooter from '../components/index/IndexFooter'//尾部
    import FenZuo from "../components/Fen/FenZuo";
    import FenYou from "../components/Fen/FenYou";
    import  showphone from '../apis/Fen'

    export default {
        name: "Fen",
        data() {
        return {
            PhoneList:null,
            goodlist:null,
            item:{}
        }
        },
        methods:{
            _InitPhone(){
                let paramsid = this.$route.params.id;
                showphone.FenYou(data=>{
                    this.PhoneList=data.product
                    this.goodlist =data.titlelists
                    this.item=data.product[paramsid];

                });
            },
        },
        created () {
            this._InitPhone();
          setTimeout(()=>{
            $(".loadeingBox").remove()
          },1000)
        },
        mounted() {
            this._InitPhone()
        },
        updated() {
            this._InitPhone()
        },
        components:{FenHeader, IndexFooter,FenZuo,FenYou}
        }
</script>

<style>
  .loadeingBox{
    width: 100%;
    height: 85%;
    background-color:rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    z-index: 20;
    top: 49px;
  }
.all{ 
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background: white;
    }
main{
    position: relative;
    overflow: auto;
    flex: 1;
}
.content{
    width:100%;
    display: flex;
}
.you{
    width: 80%;
    height:auto;
    overflow-x: hidden;
    overflow-y: auto;
}
.zuo{
    width: 20%;
    height:auto;
    overflow-x: hidden;
    overflow-y: auto;
}
.zuo::-webkit-scrollbar{
    display: none;
}
.you::-webkit-scrollbar{
    display: none;
}

</style>
