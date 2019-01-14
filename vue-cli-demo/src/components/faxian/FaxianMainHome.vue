<template>
  <ul class="home">
    <li><img src="img/Zshop.png"</li>
    <li>
      <p class="one">小米之家西安高新大都荟店</p>
      <p class="two">距离3.59公里</p>
    </li>
    <li><p class="three">其他零售店</p><i class="iconfont">&#xe603;</i></li>

  </ul>
</template>

<script>
    export default {
        name: "FaxianMainHome"
    }
</script>

<style scoped>
  main .home{width:100%;height:.72rem;display:flex;padding: .14rem .14rem;margin-bottom: .08rem; background: #fff;}
  main .home li:nth-child(1) img{ width:.66rem;flex:1; height:.44rem;}
  main .home li:nth-child(2){width: 1.76rem;height: .44rem;padding-left:.11rem;}
  main .home li:nth-child(2) p.one{color: #171717;height: .25rem;line-height: .25rem;font-size: .12rem;}
  main .home li:nth-child(2) p.two{ font-size: .1rem;line-height:.19rem;height:.19rem;color:#989898;}
  main .home li:nth-child(3){ width:1.04rem;height: .44rem;display: flex;padding-left: .23rem;}
  main .home li:nth-child(3) p{height: .44rem;line-height: .44rem;font-size: .12rem;}
  main .home li:nth-child(3) i{height: .44rem;line-height: .44rem;font-size: .12rem;}
</style>
