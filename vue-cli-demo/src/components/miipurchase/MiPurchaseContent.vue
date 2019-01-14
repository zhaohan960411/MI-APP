<template>
  <div class="content">
    <img class="toppic" src="../../../static/img/m1.png" alt="">
    <ul v-for="p in data.salltime" v-if="data.salltime">
      <li class="productlist" v-for="l in p.hotlist">
        <img :src="l.pic" alt="">
        <div class="sa">
            <p class="list-top">
              <span class="inr">{{l.inr}}</span>
              <span class="inrl">{{l.inrl}}</span>
            </p>
            <p class="list-bottom">
              <span>
                 <span class="money">
                   <span class="pric">{{l.pric}}</span>
                   <span class="opric">{{l.opric}}</span>
                 </span>
                <span class="remind">{{l.remind}}</span>
              </span>
              <span class="sanp">{{l.snap}}</span>
            </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "MiPurchaseContent",
        props:["data"]
    }
</script>

<style scoped>
  .content{
    width: 100%;
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #f5f5f5;
  }
  .toppic{
    width: 100%;
    height: 1.5rem;
  }
  .productlist{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /*align-items: center;*/
    background: white;
    margin-bottom: .02rem;
    padding: .1rem 0;
  }
  .sa{
    width: 60%;
  }
  .productlist img{
    width: 40%;
    height: 1.5rem;
    margin:0  .06rem;
  }
  .inr{
    font-size:.16rem ;
    color: #404040;
    display: block;
    margin-bottom: .1rem;
  }
  .inrl{
    font-size:.15rem ;
    color: #9a9a9a;
  }
  .list-top{
    margin-bottom: .4rem;
  }
  .list-bottom{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .money{
    display: block;
    margin-bottom: .1rem;
  }
  .pric{
    font-size:.18rem ;
    color: orangered;
  }
  .opric{
    font-size:.14rem ;
    color: #d0d0d0;
    text-decoration:line-through;
  }
  .sanp{
    display: block;
    width:.7rem ;
    height:.3rem ;
    background: #6d6d72;
    text-align: center;
    line-height: .3rem;
  }

</style>
