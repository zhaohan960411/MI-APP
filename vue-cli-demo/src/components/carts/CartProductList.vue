<template>
 <div class="productlist">
    <Cart-Product :data = "data"></Cart-Product>
 </div>
</template>

<script>
import  CartProduct from './CartProduct.vue'
export default {
    props:['data'],
 data() {
  return {

  }
 },
 components: {
     CartProduct
 },
 mounted() {
     
 },
}
</script>

<style scoped>
.productlist{
    width:100%;
    display: flex;
    flex-direction: column;
    background: #fafafa;
}
</style>
