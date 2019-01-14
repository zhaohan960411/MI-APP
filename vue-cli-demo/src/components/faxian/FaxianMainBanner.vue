<template>
  <div>
  <!-- ===================banner====================== -->
  <img src="../../../static/img/Zbg.png" class="banner" />
  <!-- ===================商城早报====================== -->
  <section class="zao">
    <h2>商城早报</h2>
  </section>
  <!-- ===================商品列表====================== -->
    <section class="Pic">
      <ul>
        <li>
          <a href="#">
            <img src="../../../static/img/Zmenu1.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../../static/img/Zmenu2.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../../static/img/Zmenu3.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../../static/img/Zmenu4.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../../static/img/Zmenu5.png" />
          </a>
        </li>
      </ul>
    </section>
  <!-- ===================广告====================== -->
  <section class="adj">
    <ul>
      <li >
        <img src="../../../static/img/Zadj5.png" />
        <a href="#">
          <h3>米家互联网洗烘一体机一次能够洗多少衣物？</h3>
          <h4>一起来看看米家互联网洗烘一体机到底有多厉害</h4>
          <span><p class="time">4小时前</p><p class="many">19518阅读</p></span>
        </a>
      </li>
      <li>
        <img src="../../../static/img/Zadj2.png" />
        <a href="#">
          <h3>红米Redmi 全新独立品牌发布会，1月10日见</h3>
          <h4>永远相信美好的事情即将发生</h4>
          <span><p class="time">4小时前</p><p class="many">19518阅读</p></span>
        </a>
      </li>
      <li>
        <img src="../../../static/img/Zadj3.png" />
        <a href="#">
          <h3>超爱&福利：米家小饭煲用户专享福利活动</h3>
          <h4>米家小饭煲的好要用福利说出来，评价晒图送好礼</h4>
          <span><p class="time">4小时前</p><p class="many">19518阅读</p></span>
        </a>
      </li>
      <li>
        <img src="../../../static/img/Zadj4.png" />
        <a href="#">
          <h3>2199元！米家投影仪青春版众筹开启</h3>
          <h4>米家投影仪青春版众筹开启，想看什么一句话搞定</h4>
          <span><p class="time">23小时前</p><p class="many">12322阅读</p></span>
        </a>
      </li>
      <li>
        <img src="../../../static/img/Zadj5.png" />
        <a href="#">
          <h3>米家互联网洗烘一体机一次能够洗多少衣物？</h3>
          <h4>一起来看看米家互联网洗烘一体机到底有多厉害</h4>
          <span><p class="time">1天前</p><p class="many">11974阅读</p></span>
        </a>
      </li>
    </ul>
  </section>
  <!-- ===============查看更多============== -->
  <section class="look">
    <a href="#">
      <p>查看更多商城早报</p>
      <i class="iconfont">&#xe603;</i>
    </a>
  </section>
  <!-- ====================like=============== -->
  <section class="like">
    <img src="../../../static/img/Zlike.png" class="first">
    <span>
                        <img src="../../../static/img/Zlikezuo.png">
                        <p>实时推荐你的心心念念</p>
                        <img src="../../../static/img/Zlikeyou.png">
                    </span>
  </section>
  </div>
</template>

<script>
    export default {
        name: "FaxianMainBanner",
        props:["banner"],
    }
</script>

<style scoped>
  main .banner{ width:100%;height: 1.04rem;margin-bottom: .08rem}
  /* ====================商城早报================= */
  main .zao{height: .42rem;width: 100%;background: #fff;padding-left: .16rem;}
  main .zao h2{height: .42rem;line-height:.42rem;font-size: .17rem;}
  /* ====================商品列表================= */
  main .Pic{padding: .04rem .04rem; height:1.28rem;overflow-x: auto;overflow-y: hidden;}
  main .Pic ul{ height: 100%; display:flex;}
  main .Pic ul li{height:100%;flex:1; text-align:center;margin-right: .04rem;}
  main .Pic ul li a{ display:block;  flex-direction:column;}
  main .Pic ul li a img{ height:1.2rem;display:block; margin:0 auto;}
  /* ====================广告================= */
  main .adj{height:auto;width: 100%;background: #fff;border-bottom: 1px solid #ccc;}
  main .adj ul{ height: auto;}
  main .adj ul li{height:2.77rem;flex:1; }
  main .adj ul li img{ height:1.88rem;display:block; width: 100%;}
  main .adj ul li a{ display:block;width:100%;height: .89rem; padding: .11rem .15rem;}
  main .adj ul li a h3{ height:.25rem;line-height:.25rem;font-size:.12rem;color: #141414;}
  main .adj ul li a h4{ height:.21rem;line-height:.21rem;font-size:.11rem;color: #a9a9a9;font-weight: 400;}
  main .adj ul li a span{display: flex;width: 100%;height: .22rem;justify-content: space-between}
  main .adj ul li a span p.time{line-height: .22rem;height: .22rem;font-size:.11rem;color: #a9a9a9;}
  main .adj ul li a span p.many{line-height: .22rem;height: .22rem;font-size:.11rem;color: #a9a9a9;}
  /* ====================look=============== */
  main .look{height: .45rem;width: 100%;padding-left: 1.28rem;background: #fff;}
  main .look a{display: flex;height: .45rem;line-height: .45rem;font-size: .12rem;}
  main .look a p{height: .45rem;line-height: .45rem;text-align: center}
  /* ====================like=============== */
  main .like{height: .63rem;width: 3.75rem;padding:.15rem .26rem;}
  main .like img.first{height: .14rem;width: 1.15rem;margin: 0 auto;}
  main .like span{display: flex;height: .23rem; width: 100%;padding-top: .05rem;}
  main .like span img{width: .98rem;height: .01rem;margin: 0 auto;margin-top: .07rem}
  main .like span p{font-size: .12rem;color: #878787}
</style>
