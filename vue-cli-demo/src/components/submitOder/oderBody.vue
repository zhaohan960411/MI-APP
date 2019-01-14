<template>
    <div class="oderBodyBox">
      <ul>
        <li class="ImgBox">
          <img :src="ord.pic" alt="" v-for="(ord,idx) in data" v-if="data">
        </li>
        <li class="PicBox">
          <div>
            <h3><em>￥</em>{{$store.getters.totalmoney.totalprice}}</h3>
            <p><span>x</span>{{$store.getters.totalmoney.count}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "oderBody",
      props:["data"]
    }
</script>

<style scoped lang="scss">
  .oderBodyBox{
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    top: -2px;
    border-radius:5px;
    z-index: 20;
    ul{
      display: flex;
      width: 100%;
      justify-content: space-between;
      li{

        padding:10px 10px 10px 10px ;
        img{
          width: 80px;
          height: 80px;
        }
      }
      .ImgBox{
        width: 80%;
        overflow: hidden;
      }
      .PicBox{
        width: 20%;
        div{
          p{
            padding-top: 20px;
          }
          h3{
            font-size: 20px;
            font-weight: 400;
            padding-top: 10px;
            position: relative;
            em{
              font-size: 10px;
              position: absolute;
              left: -10px;
              top: 10px;
            }

          }

        }
      }
    }

  }

</style>
