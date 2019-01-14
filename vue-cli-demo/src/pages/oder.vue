<template>
    <div>
      <OderHeader></OderHeader>
      <OderBody :data="CartOrd" v-if="CartOrd"></OderBody>
      <OrderBodymassge></OrderBodymassge>
      <OderFooter></OderFooter>
    </div>
</template>

<script>
    import OderHeader from "../components/submitOder/oderHeader";
    import OderBody from "../components/submitOder/oderBody";
    import OrderBodymassge from "../components/submitOder/orderBodymassge";
    import OderFooter from "../components/submitOder/OderFooter";
    export default {
        name: "oder",
        components: {OderFooter, OrderBodymassge, OderBody, OderHeader},
        data(){
          return{
            CartOrd:[]
          }
        },
      methods:{
          getCartListOrd(){
            this.CartOrd=this.$store.state.cart
            console.log(this.CartOrd);
          }
      },
      created() {
          this. getCartListOrd()
      }

    }
</script>

<style scoped>

</style>
