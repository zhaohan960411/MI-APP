<template>
 <div class="container">
        <Cart-Header></Cart-Header>
        <main>
        <Cart-ProductList :data="itemInfo">
        </Cart-ProductList>
        <Cart-Groom :data="CartsDatas"></Cart-Groom>
        </main>
        <Cart-FullSelect></Cart-FullSelect>
        <Index-Footer></Index-Footer>
 </div>
</template>

<script>
import  CartHeader from '../components/carts/CartHeader.vue'
import  CartProductList from '../components/carts/CartProductList.vue'
import  CartFullSelect from '../components/carts/CartFullSelect.vue'
import  CartGroom from '../components/carts/CartGroom.vue'
import  CartsData from  '../apis/Carts.js'
import  IndexFooter from '../components/index/IndexFooter'//尾部
export default {
 data() {
  return {
      itemInfo:{},
      CartsDatas :null,
  }
 },
 components: {
     CartHeader,
     CartProductList,
     CartFullSelect,
     CartGroom,
     IndexFooter
 },
 methods: {

     GetProductList(){
           //1.获取store中商品Id 然后拼接出一个 用逗号分割的 字符串
       this.itemInfo=this.$store.state.CartList
     },
     CartsData(){
         CartsData.GoodsInfo(data=>{
             this.CartsDatas = data.product
         })
     }
 },

 created() {
     this. GetProductList()

 },
    mounted() {
        this.CartsData()


    },
  update() {
    this.data
  }

}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
}
main{
    position: relative;
    overflow: auto;
    flex: 1;
}
</style>
