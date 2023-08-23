<template>
<f7-page class="bg-white" safe-area>

    <f7-navbar class="h-14 bg-white">
    
    <f7-link navbar @click="() => toggleMenu()">
           <i class="f7-icons bold">menu</i>
      </f7-link>
      <p class="text-2xl font-bold">Loyalty Points</p>
</f7-navbar>

    <f7-block class="flex w-full justify-start">
        <img src="../assets/image/crown.png" class="w-12 h-10" />
        <div class="flex space-x-32">
          <p class="text-lg font-bold mt-2 ml-4">Beginner Tier</p>
        <p class="font-bold text-red-500">View All ></p>
        </div>
    </f7-block>

    <f7-block class="flex justify-center">
        <p class="text-gray-400">Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
    </f7-block>

     <f7-block strong-ios outline-ios class="text-align-center">
          <f7-gauge
            type="circle"
            :value="0.0"
            value-text="0/160"
            :border-width="10"
             :size="250"
            border-color="#f44336"
             border-bg-color="#c2c2c2"
             bg-color="#c9c9c9"
          />
    </f7-block>

    <f7-block>
      <div class="flex space-x-44">
    <p class="text-lg font-bold mt-2 ml-4">Beginner Tier</p>
        <p class="font-bold text-red-500 ">View All ></p>
  </div>
    </f7-block>

    <swiper-container
      :pagination="false"
      class="demo-swiper-multiple p-2"
      :space-between="5"
      :slides-per-view="4"
    >
      <swiper-slide>
        <f7-button fill color="red" rounded class="f7-color-brand-green">All</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button rounded color="red" raised outline>Beginner</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button rounded color="red" raised outline>Intermediate</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button rounded color="red" raised outline>Loyalty</f7-button>
      </swiper-slide>
    </swiper-container>

    <f7-list>
      <f7-list-item
        :chevron-material="false"
       >
        <template #media>
          <img
            class=" "
            src="https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png"
            width="80"
            alt="demo"
          />
          <div class="flex-1">
          <p class="text-sm font-bold ml-2">Burger & Fries</p>
          <p class="ml-2">Meat</p>
          <div class="flex">
          <img src="../assets/image/crowns.png" class="w-6 h-6 ml-2 mt-4" />
          <p class="text-lg font-bold text-red-600 ml-2">20 Points</p>
          </div>
          </div>

        </template>
      </f7-list-item>
      </f7-list>
</f7-page>
</template>

<script setup>
import { useMainMenu } from '../composables/userMainMenu';

const { toggleMenu } = useMainMenu();

</script>
<script>
import { f7Page, f7Navbar, f7Block, f7Button, f7Link, f7Badge, f7Icon, f7Card, f7Fab, f7ListInput, f7List, f7ListItem, f7Gauge } from 'framework7-vue'

export default {
  components: {
    f7Page, f7Navbar, f7Block, f7Button, f7Link, f7Badge, f7Icon, f7Card, f7Fab, f7ListInput, f7List, f7ListItem, f7Gauge
  }
}
</script>