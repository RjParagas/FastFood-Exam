<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  MainMenu  from './components/MainMenu.vue';
import { kProvider } from 'konsta/vue'
import './assets/main.css'
</script>

<script>
import PointsView from './views/PointsView.vue'
import TrackOrder from './views/TrackOrder.vue'
import CheckoutView from './views/OrderSummary.vue'
import FoodDetail from './views/FoodDetails.vue'
import OrderView from './views/OrderNow.vue'
import HomeView from './views/HomeView.vue'


export default {

  data() {
    return {
      f7params: {
     
        routes: [
        {
              path: '/',
              component: HomeView,
            },
            {
              path: '/home/',
              component: HomeView,
            },
          {
            
            path: '/fooddetail/',
            component: FoodDetail
          },
          {
            path: '/ordernow/',
            component: OrderView
          },
      
          {
            path: '/checkoutview/',
            component: CheckoutView
          },
          {
            path: '/received/',
            component: TrackOrder
          },
          {
            path: '/loyaltypoints/',
            component: PointsView
          },
        ],

      }
    };
  },
}
</script>

<template>
  <k-provider theme="ios">

    <f7-app v-bind="f7params">
      <f7-view main url="/" ></f7-view>
    </f7-app>
    <main-menu></main-menu>
    </k-provider>
    

</template>

<style scoped>

</style>
