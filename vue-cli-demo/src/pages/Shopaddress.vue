<template>

  <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
  />
</template>

<script>
  import areaList from "../assets/js/area"
    export default {
        name: "Shopaddress",

        data(){
          return{
            areaList,
            searchResult: []
          }
        }

    }
</script>

<style scoped>

</style>
