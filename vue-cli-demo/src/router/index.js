import Vue from 'vue'
import Router from 'vue-router'
import GoodsInfo from '@/pages/GoodsInfo'
import Carts from '@/pages/Carts'
import Index from '@/pages/index'
import Hot from '@/pages/Hot'
import Fen from '@/pages/Fen'
import MiPurchase from '@/pages/MiPurchase'
import EverydayChoose from '@/pages/EverydayChoose'
import MyPageHome from '@/pages/MyPageHome'
import faxian from '@/pages/faxian'
import Lingin from '../pages/Lingon'
import UsersLon from '../pages/UsersLog'
import LingonsU from '../pages/LingonsU'
import Register from '../pages/register'
import CarCeshi from '../components/carts/CarCeshi'
import Serch from '../pages/Search'
import HuaKuai from '../pages/huakuai'
import Ord from '../pages/oder'
import Shopaddress from '../pages/Shopaddress'
import ShopAddres from '../pages/ShopAdress'
Vue.use(Router)

//子路由
import IndexPhone from '../components/index/phone/phoFlex'
import IndexRecommend from '../components/index/recommend/indexFlex'
import IndexCapacity from '../components/index/capacity/capaFlex'
import IndexTcl from '../components/index/tcl/tclFlex'
import IndexNote from '../components/index/note/noteFlex'
import IndexAround from '../components/index/around/aroFlex'
import IndexHouse from '../components/index/house/housFlex'


export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/Index/IndexRecommend",
    },
    {
      path: '/Index',
      name: 'IndexPage',
      component: Index,
      redirect: "/Index/IndexRecommend",
      children: [
        {
          path: "IndexRecommend",
          name: 'IndexRecommend',
          component: IndexRecommend
        },
        {
          path: "IndexPhone",
          name: 'IndexPhone',
          component: IndexPhone
        },
        {
          path: "IndexCapacity",
          name: "IndexCapacity",
          component: IndexCapacity
        },
        {
          path: "IndexTcl",
          name: "IndexTcl",
          component: IndexTcl
        },
        {
          path: "IndexNote",
          name: "IndexNote",
          component: IndexNote
        },
        {
          path: "IndexAround",
          name: "IndexAround",
          component: IndexAround
        },
        {
          path: "IndexHouse",
          name: "IndexHouse",
          component: IndexHouse
        }
      ],
    },
    {
      path: '/goodsinfo/:id',
      name: 'GoodsInfoPage',
      component: GoodsInfo
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts
    },
    {
      path: '/Hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/Fen',
      name: 'FenPage',
      component: Fen
    },
    {
      path: '/Fen',
      component: Fen,
      redirect: "/Fen/0"
    },
    {
      path: '/Fen/:id',
      component: Fen
    },

    {
      path: '/MiPurchase',
      name: 'MiPurchase',
      component: MiPurchase
    },
    {
      path: '/EverydayChoose',
      name: 'EverydayChoose',
      component: EverydayChoose
    },
    {
      path: '/MyPageHome',
      name: 'MyPageHome',
      component: MyPageHome
    },
    {
      path: '/faxian',
      name: 'faxian',
      component: faxian
    },
    {
      path: '/LingonsU',
      redirect:'/LingonsU/UsersLon',
    },
    {
      path: '/LingonsU',
      name: 'LingonsUPage',
      component: LingonsU,
      children:[
        {
          path: 'Lingin',
          name: 'LinginPage',
          component: Lingin
        },
        {
          path: 'UsersLon',
          name: 'UsersLonPage',
          component: UsersLon
        }

      ]
    },
    {
      path: '/Register',
      name: 'RegisterPage',
      component: Register
    },
    {
      path: '/MyPageHome',
      name: 'MyPageHomePage',
      component: MyPageHome
    },
    {
      path: '/Serch',
      name: 'SerchPage',
      component: Serch
    },
    {
      path: '/CarCeshi',
      name: 'CarCeshiPage',
      component: CarCeshi
    },
    {
      path: '/HuaKuai',
      name: 'HuaKuaiPage',
      component: HuaKuai
    },
    {
      path: '/Ord',
      name: 'OrdPage',
      component: Ord
    },
    {
      path: '/Shopaddress',
      name: 'ShopaddressPage',
      component: Shopaddress
    },
    {
      path: '/ShopAddres',
      name: 'ShopAddressPage',
      component: ShopAddres
    }
  ],
  linkActiveClass: "link"

})
