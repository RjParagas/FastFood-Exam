<script setup>
import { useMainMenu } from '../composables/userMainMenu';

const { toggleMenu } = useMainMenu();

</script>

<script>
import { f7Page, f7Navbar, f7Block, f7Button, f7Link, f7Badge, f7Icon, f7Card, f7Fab, f7ListInput, f7List, f7ListItem } from 'framework7-vue'

export default {
  components: {
    f7Page, f7Navbar, f7Block, f7Button, f7Link, f7Badge, f7Icon, f7Card, f7Fab, f7ListInput, f7List, f7ListItem
  }
}
</script>

<template>
<f7-page class="bg-white" safe-area>
  
  <f7-navbar class="h-14" color="white">
    <template #left>
          <f7-link navbar @click="() => toggleMenu()">
            <f7-icon f7="menu">
                  <f7-badge color="red">5</f7-badge>
                </f7-icon>
            </f7-link>
            <p class="text-xl font-bold">Our Foods</p>
          </template>

          
            <template #right>
              <f7-link>
               <i class="f7-icons">bag</i>
             </f7-link>
            </template> 
  </f7-navbar>

    <f7-block>
      <f7-list inset-ios strong-ios>
      <f7-list-input
        label="Search"
        floating-label
        type="text"
        placeholder="Try New Samgyupsal"
        outline="ios-light-surface-1">

        <template #media>
          <f7-link>
          <i class="f7-icons">slider_horizontal_3</i>
          </f7-link>
        </template>
       

      </f7-list-input>

    </f7-list>


    <swiper-container
      :pagination="false"
      class="demo-swiper-multiple p-2"
      :space-between="5"
      :slides-per-view="5"
    >
      <swiper-slide>
        <f7-button fill color="red" rounded>All</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button color="red" rounded raised outline>Breakfast</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button color="red" rounded raised outline>Burger</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button color="red" rounded raised outline>Chicken</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button color="red" rounded raised outline>Cupcakes</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button color="red" rounded raised outline>Dessert</f7-button>
      </swiper-slide>
      <swiper-slide>
        <f7-button color="red" rounded raised outline>Dinner</f7-button>
      </swiper-slide>
    </swiper-container>

    <div class="flex justify-center space-x-1">
        <f7-card class="flex w-52">
          <f7-link href="/fooddetail/">
       <div class="p-2 border border-gray-300 bg-gray-100 rounded-lg">
          <img src="https://pngimg.com/d/turkey_food_PNG14.png" />
          <p class="mt-4 text-base font-bold text-black">Special Chicken</p>
          <p class="mt-2 text-sm font-bold text-black">Chicken</p>

          <div className="flex columns-2 space-x-2">
            <p class="text-red-500 font-bold text-lg">P 260</p>
            <div class="mt-5">
              <vue3-star-ratings v-model="rating"   starSize="12" inactiveColor="#ff9800"  controlSize="0"/>
            </div>
          </div>
        </div>
        </f7-link>
        </f7-card>

       <f7-card class="flex w-52">

          <div class="p-2 border border-gray-300 bg-gray-100 rounded-lg">
          <img src="https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png" />
          <p class="mt-2 text-base font-bold text-black">Snacks Bundle</p>
          <p class="text-sm font-bold text-black">Burger&Fries </p>

          <div
            className="flex justify-start space-x-[-2px]"
          >
            <p class="text-red-500 font-bold text-lg">P 160</p>
            <div class="mt-5">
              <vue3-star-ratings v-model="rating"   starSize="12" inactiveColor="#ff9800"  controlSize="0"/>
        </div>
          </div>

        </div>
        </f7-card>
      </div>

      <div class="flex columns-2 space-x-1 justify-center mb-40">
        <f7-card class="flex w-52">
          <div class="p-2 border border-gray-300 bg-gray-100 rounded-lg">
          <img src="https://www.pngall.com/wp-content/uploads/9/Dessert-Muffin-PNG-Free-Download.png" />
          <p class="text-base font-bold text-black">Choco Cupcake</p>
          <p class="text-sm font-bold text-black">Dessert</p>

          <div
            className="flex justify-start space-x-[-2px]"
          >
            <p class="text-red-500 font-bold text-lg">P 80</p>
            <div class="mt-5">
              <vue3-star-ratings v-model="rating"   starSize="12" inactiveColor="#ff9800"  controlSize="0"/>
        </div>
          </div>
          </div>
        </f7-card>
        <f7-card class="flex w-52">
          <div class="p-2 border border-gray-300 bg-gray-100 rounded-lg">
          <img src="https://www.pngkey.com/png/full/70-709043_chicken-nuggets-chicken-nugget.png" class="mt-14"  />
          <p class="text-base font-bold text-black">Chicken Nuggets</p>
          <p class="text-sm font-bold text-black">Chicken</p>

          <div
            className="flex justify-start space-x-[-2px]"
          >
            <p class="text-red-500 font-bold text-lg">P 100</p>
            <div class="mt-5">
              <vue3-star-ratings v-model="rating"   starSize="12" inactiveColor="#ff9800"  controlSize="0"/>
        </div>
          </div>
          </div>
        </f7-card>
      </div>

</f7-block>

</f7-page>
</template>
