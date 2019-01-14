<template>
    <div class="MassgeBox">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
          <div>商品总价</div>
          <div><em>￥</em>{{$store.getters.totalmoney.totalprice}}</div>
        </li>
        <li class="mui-table-view-cell">
          <div>运费</div>
          <div>包邮</div>
        </li>
        <li class="mui-table-view-cell">

          <div>优惠卷</div>
          <div class="noYou">无可用 <span class="mui-icon mui-icon-arrowright"></span></div>
        </li>
        <li class="mui-table-view-cell">
          <div>礼品卡</div>
          <div class="noYou">无可用 <span class="mui-icon mui-icon-arrowright"></span></div>

        </li>
        <li class="mui-table-view-cell">
          <span class="sallMoney">小计</span><span class="sallMoney"><em>￥</em>{{$store.getters.totalmoney.totalprice}}</span>
        </li>

      </ul>
      <div class="invoice">
          <p>发票</p>
          <p>电子发票-个人<span class="mui-icon mui-icon-arrowright"></span></p>

      </div>
    </div>
</template>

<script>
    export default {
        name: "orderBodymassge"
    }
</script>

<style scoped lang="scss">
  .mui-icon {
    font-family: Muiicons;
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
  }
  .MassgeBox{
    width: 100%;
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
    ul{
      li{
        display: flex;
        padding: 15px 10px 15px 10px;
        justify-content: space-between;
        .noYou{
          color: #bfbfbf;
        }
        div{
          position: relative;
          font-weight: 400;
          em{
            font-size: 10px;
            position: absolute;
            top: -2px;
            left: -10px;
          }
        }
        .sallMoney{
          position: relative;
          color: #ff7200;
          em{
            font-size: 10px;
            position: absolute;
            left: -10px;
            top: -2px;
          }
        }
      }
    }

  }
  .invoice{
    margin-top: 8px;
    background-color: #fff;
    display: flex;
    padding: 15px 10px;
    justify-content: space-between;
  }
</style>
