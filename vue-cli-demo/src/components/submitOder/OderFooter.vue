<template>
    <div class="PayMoney">
      <div>
        <ul>
          <li><p>共计{{$store.getters.totalmoney.count}}件,</p><p>应付金额:<em>￥</em><span>{{$store.getters.totalmoney.totalprice}}</span></p></li>

          <li>
            <button class="button">去付款</button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "OderFooter"
    }
</script>

<style scoped lang="scss">
.PayMoney{
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  padding: 0px 10px;
  div{
    ul{
      display: flex;
      justify-content: space-between;
      li{
        display: flex;
        padding: 10px 0;
        .button{
          width: 100px;
          height: 40px;
          background-color: #fe6c00;
          color: white;
          border-radius: 20px;


        }
        p{
          padding-top: 10px;
          font-size: 18px;
          color: #000;
          position: relative;
          font-weight: 400;
          span{
            padding-left: 13px;
            color: #fe6c00;
            font-weight: 600;
          }
          em{
            position: absolute;
            left: 57%;
            top: 8px;
            font-size: 12px;
            color: #fe6c00;
          }
        }
      }
    }
  }
}
</style>
