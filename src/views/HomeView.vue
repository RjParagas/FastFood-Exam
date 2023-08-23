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
    
          <f7-link navbar @click="() => toggleMenu()">
                 <f7-icon f7="menu">
                  <f7-badge color="red">5</f7-badge>
                </f7-icon>
                
            </f7-link>

            <div class="flex w-72 justify-center p-2">
              <img src="../assets/image/crown.png" class="w-10 h-10"  />
              <p>0 Points</p>
              <f7-icon f7="chevron_right" class="mt-5 ml-2" size="18px" color="red"></f7-icon>
              </div>
          
            <template #right>
              <f7-link>
               <i class="f7-icons">bag</i>
             </f7-link>
            </template> 
  </f7-navbar>
<f7-block>
  <div class="flex justify-center ">
      <img src="../assets/image/food-bg.png" 
      class="w-52 h-52"
      />
      </div>

 
      
      <f7-list inset-ios strong-ios>
      <f7-list-input
        label="Search"
        floating-label
        type="text"
        placeholder="Try New Samgyupsal"
        outline="ios-light-surface-1">

        <template #media>
          <f7-link href="order">
          <i class="f7-icons">search</i>
          </f7-link>
        </template>
       

      </f7-list-input>

    </f7-list>

      <p class="text-lg font-bold">Special Offer</p>
      <swiper-container
      :pagination="false"
      :space-between="10"
      :slides-per-view="'1'"
    >
    
      <swiper-slide>
      <div
          class="h-48 w-full p-4 flex bg-cover bg-center border rounded-lg material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://possector.com/wordpress/wp-content/uploads/2013/09/restaurant-menu-special0.jpg)',
          }"
        ></div>

      </swiper-slide>
      <swiper-slide>
        <div
          class="h-48 w-full p-4 flex bg-cover border rounded-lg bg-center material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://possector.com/wordpress/wp-content/uploads/2013/09/restaurant-menu-special0.jpg)',
          }"
        ></div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="h-48 w-full p-4 flex bg-cover bg-center border rounded-lg material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://possector.com/wordpress/wp-content/uploads/2013/09/restaurant-menu-special0.jpg)',
          }"
        ></div>
      </swiper-slide>
    </swiper-container>
 

      <p class="text-lg font-bold">Category</p>
      <swiper-container
      :pagination="false"
      :space-between="10"
      :slides-per-view="'2'"
    >
      <swiper-slide>
      <div
          class="h-72 w-full p-4 flex bg-cover bg-center border rounded-lg material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium)',
          }"
        ></div>

      </swiper-slide>
      <swiper-slide>
        <div
          class="h-72 w-full p-4 flex bg-cover border rounded-lg bg-center material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://anestisxasapotaverna.gr/wp-content/uploads/2021/12/ARTICLE-1.jpg)',
          }"
        ></div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="h-72 w-full p-4 flex bg-cover bg-center border rounded-lg material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
          }"
        ></div>
      </swiper-slide>
    </swiper-container>



      <p class="text-lg font-bold">What's New?</p>
      <swiper-container
      :pagination="false"
      :space-between="10"
      :slides-per-view="'1'"
    >
      <swiper-slide>
      <div
          class="h-48 w-full p-4 flex bg-cover bg-center border rounded-lg material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://i.pinimg.com/originals/35/02/cf/3502cfdf362b2671c05f4f87b66d5fb0.jpg)',
          }"
        ></div>

      </swiper-slide>
      <swiper-slide>
        <div
          class="h-48 w-full p-4 flex bg-cover border rounded-lg bg-center material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://i.pinimg.com/originals/35/02/cf/3502cfdf362b2671c05f4f87b66d5fb0.jpg)',
          }"
        ></div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="h-48 w-full p-4 flex bg-cover bg-center border rounded-lg material:rounded-xl mb-4 "
          :style="{
            'background-image':
              'url(https://i.pinimg.com/originals/35/02/cf/3502cfdf362b2671c05f4f87b66d5fb0.jpg)',
          }"
        ></div>
      </swiper-slide>
    </swiper-container>



    <p class="text-lg font-bold">Most Popular</p>

  
    <div class="flex justify-center space-x-1">
        <f7-card class="flex w-52">
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
    <f7-fab position="right-bottom" text="Order Now!" class="fab" color="red"
    href="/ordernow/"
    >
    </f7-fab>

</f7-page>
</template>

<style scoped>
.fab{
  width: 40%;
  font-weight: bold;
  font-size: x-large;
  right: 5%;
}
</style>
