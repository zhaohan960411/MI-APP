<template>
  <div>
    <div class="loadeingBox">
      <van-loading color="gray" size="50px"/>
    </div>
    <div class="box2">

    </div>
  </div>

</template>
  <script>

    export default {
      name: "huakuai",
      data(){
        return{

        }
      },
      created() {
        setTimeout(()=>{
          $(".loadeingBox").css(
            {
              "display":"none"
            }
          )
        },3000)
      }


    }
  </script>

<style scoped>
.loadeingBox{
  width: 100%;
  height: 100%;
  background-color:rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
}
  .box2{
    width: 1000%;
    height: 500px;
    background-color:red;
  }
</style>



