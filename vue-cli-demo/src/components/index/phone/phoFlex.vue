<template>
    <div class="box2">
      <pho-nav :ac="pho.act"></pho-nav>
      <pho-section :ph="pho"></pho-section>
    </div>
</template>

<script>
    import PhoNav from "./phoNav";
    import PhoSection from "./phoSection";
    export default {
        name: "phoFlex",
      data(){
        return{
          pho:{}
        }
      },
      components: {PhoSection, PhoNav},
      created(){
          fetch("http://localhost:3000/vue-cli-server/datas/index").then(res=>{
            res.json().then(data=>{
              this.pho=data[1]

            })
          })
      }
    }
</script>

<style scoped>

</style>
