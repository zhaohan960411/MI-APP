<template>
  <div class="warp">
    <mi-purchase-header :data="hotsallinfo" v-if="hotsallinfo"></mi-purchase-header>
    <mi-purchase-content :data="hotsallinfo" v-if="hotsallinfo"></mi-purchase-content>
  </div>

</template>

<script>
    import mipurchaseApis from "../apis/mipurchaseApis";
    import MiPurchaseHeader from "../components/miipurchase/MiPurchaseHeader";
    import MiPurchaseContent from "../components/miipurchase/MiPurchaseContent";
    export default {
        name: "MiPurchase",
      components: {MiPurchaseContent, MiPurchaseHeader},
      data(){
        return{
          hotsallinfo:null

        }
      },
      methods:{
        _initPageData(){
          mipurchaseApis.getHotSallData(data=>{
            this.hotsallinfo=data
            console.log(this.hotsallinfo);
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
</style>
