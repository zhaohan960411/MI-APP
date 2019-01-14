import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var users=JSON.parse(localStorage.getItem("users") || '[]')
var cart = JSON.parse(localStorage.getItem("cart") || '[]')
var CartList = JSON.parse(localStorage.getItem("CartList") || '[]')
//通过vuex来创建一个中央仓库
var pic = JSON.parse(localStorage.getItem("pic"))
export default new Vuex.Store({
    state:{
        cart: cart,
        select: true,
        users:users,
        pic:pic,
        CartList:CartList,
          nunm:0
        },
    mutations:{
      getPhotto(state,pic){
        state.pic=pic;
        // console.log(state.pic);
        localStorage.setItem("pic",JSON.stringify( state.pic))
      },
      loginuser(state,usersd){
        let p=0
        var flage=false
        state.users=usersd
        localStorage.setItem("users",JSON.stringify( state.users))
      },
        addcart(state, goodsInfo) {
            var flag = false
            state.cart.some(item => {
                if (item.id == goodsInfo.id) {
                    item.count += goodsInfo.count
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.cart.push(goodsInfo);

            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
      GetCartList(state,DataList){
        state.CartList=DataList;
        localStorage.setItem("CartList", JSON.stringify(state.CartList))
      },
        /**
        * 
        * @param 计算加减 
        */
        addcount(state, data) {
          // console.log(data);
          console.log(12);
          state.CartList.forEach((item) => {
            // alert(12)
                if (item.id== data){
                  item.count++
                  // console.log(item.id);
                  // console.log(item.count);
                  // console.log(state.CartList);
                }
            });
        },

        minuscount(state, data) {
            state.CartList.forEach((item) => {
                if (item.id == data) {
                    item.count--
                    if (item.count <= 1) {
                        item.count = 1
                    }
                }

            });

        },
        /**
          * 店铺的全选
          * @constructor
          */
        CartAllChecked(state) {
            state.CartList.some(item => {
                item.checked = state.select
            })
        },
        //加入购物车之后蒙版淡入淡出
        addsec(){
            let t1
            $(function () {
            window.setTimeout(inAndOut(), 1000);
            window.clearTimeout(t1);//去掉定时器 
            })
        function inAndOut() {
            $(".addsec").fadeIn(1000);
            $(".addsec").fadeOut(500);
            }
        },

        //删除购物车商品
        removecar(state,id){
          state.CartList.some((item,id) =>{
            if(item.id == id){
              state.cart.splice(id,1)

            }
          })
          localStorage.removeItem("cart")
            //将删除完毕后最新的购物车数据同步到本地存储中

            localStorage.setItem("CartList", JSON.stringify(state.CartList))
        },
      ChangeCartNum(state,CartNum){
        state.cart=CartNum

      }
    },


    getters: {
        qal(state) {
            var x = 0
          if (state.cart.length>0) {
            state.cart.forEach(item => {
              x += item.count
            });
          }else {

            x=0
          }
            return x
        },

        /**
             * 统计总价格
             * @param totalmoney
             * @private
             */
        totalmoney(state) {
            let shop = {
                count: 0,
                totalprice: 0
            }
            state.CartList.forEach(item => {
                if (item.checked) {
                    shop.count += item.count //footer下的角标
                    /**
                     * @param totalmoney
                     * 计算购物车总价
                     */
                    shop.totalprice += item.price * item.count
                }
            })
                return shop
        },
      UserPhoto(state){
        return state.pic
      },
      num(state){
          return state.nunm
      }
    }
})
