<template>
  <header id="header">
    <ul>
      <li class="last">
        <a href="#"><i class="iconfont">&#xe62b;</i>净水滤芯免费领</a>
      </li>
      <li><i class="iconfont">&#xe602;</i></li>
    </ul>
  </header>
</template>

<script>
    export default {
        name: "FaxianHeader"
    }
</script>

<style scoped>
  header{ height:.4rem; background:#fff;}
  header ul{ display:flex; height:100%; padding:.04rem .11rem; justify-content:space-between;}
  header ul li:nth-child(1){ width:3.09rem;border:1px solid #ccc;height:.32rem; background:#f8f8f8;  padding-left:.07rem; color:#8f8f8f; border-radius: 5px;}
  header ul li:nth-child(1) a{font-size:.12rem;line-height:.32rem;color: #a4a4a4; }
  header ul li:nth-child(2){ width:.44rem;height: .4rem;padding: .05rem .1rem;}
  header ul li:nth-child(2) i{ font-size:.2rem; color:#8f8f8f; }
</style>
