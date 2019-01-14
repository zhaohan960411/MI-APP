<template>
  <div>
  <section class="life">
    <ul>
      <li>
        <h3>品质生活</h3>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">小米盒子4c</p>
                                    <p class="qian">￥199</p>
                                </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">米家石英表</p>
                                    <p class="qian">￥349</p>
                                </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">小米米家插...</p>
                                    <p class="qian">￥39起</p>
                                </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">小米6X</p>
                                    <p class="qian">￥1249起</p>
                                </span>
        </a>
      </li>
    </ul>
  </section>
  <!-- ==================出行必备================== -->
  <section class="out">
    <ul>
      <li>
        <h3>出行必备</h3>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                        <p class="name">90分金属登机箱（米家定制）</p>
                                        <p class="qian">￥999</p>
                                    </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                        <p class="name">小米米家电动滑板车</p>
                                        <p class="qian">￥1999</p>
                                    </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                        <p class="name">90分旅行箱</p>
                                        <p class="qian">￥299</p>
                                    </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                        <p class="name">70迈 智能记录仪</p>
                                        <p class="qian">￥199</p>
                                    </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                        <p class="name">移动电源2</p>
                                        <p class="qian">￥79</p>
                                    </span>
        </a>
      </li>
    </ul>
  </section>
  <!-- ==================长假游玩================== -->
  <section class="play">
    <ul>
      <li>
        <h3>长假游玩</h3>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">小米小背包</p>
                                    <p class="qian">￥29</p>
                                </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">小米随身蓝牙音箱</p>
                                    <p class="qian">￥69</p>
                                </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">移动电源2（500mAh）</p>
                                    <p class="qian">￥299</p>
                                </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">米动手表</p>
                                    <p class="qian">￥399</p>
                                </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span>
                                    <p class="name">小米小钢炮蓝牙音箱2</p>
                                    <p class="qian">￥129</p>
                                </span>
        </a>
      </li>
    </ul>
  </section>
  </div>
</template>

<script>
    export default {
        name: "FaxianMainList"
    }
</script>

<style scoped>
  main .life{width:3.75rem;height: 4.86rem;background: #fff;}
  main .life ul{display:flex; flex-wrap:wrap; justify-content:space-between;}
  main .life a{ display:block; height:100%; display:flex; flex-direction:column;  }
  main .life li:first-child{width: 100%;height: .41rem;padding-left:.16rem;}
  main .life h3{font-size: .17rem;height: .41rem;line-height: .41rem;}
  main .life li:nth-child(2){width:2.48rem;height:2.22rem;}
  main .life li:nth-child(3){width:1.25rem;height:2.22rem;}
  main .life li:nth-child(5){width:2.48rem;height:2.22rem;}
  main .life li:nth-child(4){width:1.25rem;height:2.22rem;}

  main .life li:nth-child(2) a span:nth-child(1){width:2.48rem;height: 1.66rem; background:url(../../../static/img/Zlist1.png) no-repeat; background-size:cover;}
  main .life li:nth-child(3) a span:nth-child(1){width:1.25rem;height: 1.66rem; background:url(../../../static/img/Zlist2.png) no-repeat; background-size:cover;}
  main .life li:nth-child(4) a span:nth-child(1){width:1.25rem;height: 1.66rem; background:url(../../../static/img/Zlist3.png) no-repeat; background-size:cover;}
  main .life li:nth-child(5) a span:nth-child(1){ width:2.48rem;height: 1.66rem;background:url(../../../static/img/Zlist4.png) no-repeat; background-size:cover;}

  main .life li span:nth-child(2){height:.56rem;width:auto;padding:.06rem .15rem}
  main .life li span:nth-child(2) p.name{height: .22rem;line-height:.22rem;color:#161616;}
  main .life li p.qian{height: .22rem;line-height:.22rem;color:#ff5f00;}

  /* =================出行必备=================== */
  main .out{width:3.75rem;height:auto;background: #fff;margin-top: .08rem;}
  main .out ul{display:flex; flex-wrap:wrap; justify-content:space-between}
  main .out a{ display:block; height:100%; display:flex; flex-direction:column;  }
  main .out li:first-child{width: 100%;height: .41rem;padding-left:.16rem;}
  main .out h3{font-size: .17rem;height: .41rem;line-height: .41rem;}
  main .out li:nth-child(2){width:3.75rem;height:3.05rem;}
  main .out li:nth-child(3){width:2.49rem;height:1.81rem;}
  main .out li:nth-child(4){width:1.24rem;height:1.81rem;}
  main .out li:nth-child(5){width:2.49rem;height:1.82rem;}
  main .out li:nth-child(6){width:1.24rem;height:1.82rem;}

  main .out li:nth-child(2) a span:nth-child(1){width:100%;height: 2.5rem; background:url(../../../static/img/Zout1.png) no-repeat; background-size:cover;}
  main .out li:nth-child(3) a span:nth-child(1){width:2.49rem;height:1.24rem; background:url(../../../static/img/Zout2.png) no-repeat; background-size:cover;}
  main .out li:nth-child(4) a span:nth-child(1){width:1.24rem;height:1.24rem; background:url(../../../static/img/Zout3.png) no-repeat; background-size:cover;}
  main .out li:nth-child(5) a span:nth-child(1){width:2.49rem;height:1.25rem;background:url(../../../static/img/Zout4.png) no-repeat; background-size:cover;}
  main .out li:nth-child(6) a span:nth-child(1){ width:1.24rem;height:1.24rem;background:url(../../../static/img/Zout5.png) no-repeat; background-size:cover;}
  main .out li span:nth-child(2){height:.56rem;width:auto;padding:.06rem .15rem}
  main .out li span:nth-child(2) p.name{height: .22rem;line-height:.22rem;color:#161616;}
  main .out li p.qian{height: .22rem;line-height:.22rem;color:#ff5f00;}

  /* =================长假游玩=================== */
  main .play{width:3.75rem;height:auto;background: #fff;margin-top: .08rem;}
  main .play ul{display:flex; flex-wrap:wrap; justify-content:space-between;margin-bottom: .08rem;}
  main .play a{ display:block; height:100%; display:flex; flex-direction:column;  }
  main .play li:first-child{width: 100%;height: .41rem;padding-left:.16rem;}
  main .play h3{font-size: .17rem;height: .41rem;line-height: .41rem;}
  main .play li:nth-child(2){width:1.24rem;height:2.22rem;}
  main .play li:nth-child(3){width:2.49rem;height:2.22rem;}
  main .play li:nth-child(4){width:2.49rem;height:2.22rem;}
  main .play li:nth-child(5){width:1.24rem;height:2.22rem;}
  main .play li:nth-child(6){width:3.75rem;height:3.05rem;}

  main .play li:nth-child(2) a span:nth-child(1){width:1.24rem;height:1.66rem; background:url(../../../static/img/Zplay1.png) no-repeat; background-size:cover;}
  main .play li:nth-child(3) a span:nth-child(1){width:2.49rem;height:1.66rem; background:url(../../../static/img/Zplay2.png) no-repeat; background-size:cover;}
  main .play li:nth-child(4) a span:nth-child(1){width:2.49rem;height:1.66rem;background:url(../../../static/img/Zplay3.png) no-repeat; background-size:cover;}
  main .play li:nth-child(5) a span:nth-child(1){ width:1.24rem;height:1.66rem;background:url(../../../static/img/Zplay4.png) no-repeat; background-size:cover;}
  main .play li:nth-child(6) a span:nth-child(1){width:100%;height: 2.5rem; background:url(../../../static/img/Zplay5.png) no-repeat; background-size:cover;}
  main .play li span:nth-child(2){height:.56rem;width:auto;padding:.06rem .15rem}
  main .play li span:nth-child(2) p.name{height: .22rem;line-height:.22rem;color:#161616;}
  main .play li p.qian{height: .22rem;line-height:.22rem;color:#ff5f00;}
</style>
