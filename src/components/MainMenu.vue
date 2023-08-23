<template>
 
  <f7-panel side="left"
  :opened="menuOpen"
  @backdropclick="() => toggleMenu()"
  >


  <f7-page class="bg-white">
    
       <f7-block class="mx-auto">
        <img src="../assets/image/crown.png" class="w-10 absolute mt-8 ml-24" />
        
        <div class="absolute mt-7 ml-36">
        <f7-link
         href="/loyaltypoints/" >
          <p class="color-green">0 Points</p>
        </f7-link>
        </div>
        <img alt="avatar"
        src="../assets/image/pham_hannie.jpg"
        class="p-2 rounded-full mt-4 w-24 h-24 mb-2"
        />
        <p class="text-2xl font-bold">Pham Hanni</p>
        <p>+63 912 345 789</p>
       </f7-block>
  
       <f7-block class="flex-1">

      <f7-list class="flex-1 mx-auto">
     <f7-list-item
        link="/"
       title="Home"
       :active="selected === 'home'"
       @click="() => setSelected('home', true)"
      
       
     >
     <template #media >
      <f7-icon f7="house" color="red"></f7-icon>
     </template>
     </f7-list-item>


     <f7-list-item
     link="/ordernow/"
       title="Order"
       :active="selected === 'ordernow'"
       @click="() => setSelected('ordernow', true)"
     >
       <template #media>
        <f7-icon f7="cart_badge_plus" color="red"></f7-icon>
       </template>
     </f7-list-item>

     <f7-list-item
     link
       title="Notification"
       :active="selected === 'notif'"
       @click="() => setSelected('notif', true)" >
     <template #media >
      <f7-icon f7="bell" color="red"></f7-icon>
     </template>

     <template #after>
      <f7-badge color="red">5</f7-badge>
     </template>
     </f7-list-item>

     <f7-list-item
     link
       title="Store Locator"
       :active="selected === ''"
       
     >
       <template #media>
        <f7-icon f7="map" color="red"></f7-icon>
       </template>
     </f7-list-item>

     <f7-list-item
     link
       title="FAQ's"
       :active="selected === 'faqs'"
     >
       <template #media>
        <f7-icon f7="info_circle_fill" color="red"></f7-icon>
       </template>
     </f7-list-item>

     </f7-list>



     <f7-list>
      <f7-list-item
      link
       title="My Order"
       :active="selected === 'myorder'"

     >
       <template #media>
        <f7-icon f7="bag" color="red"></f7-icon>
       </template>

       <template #after>
        <f7-badge color="red">5</f7-badge>
     </template>
     </f7-list-item>

     <f7-list-item
     link
       title="My Account"
       :active="selected === ''"
       
     >
       <template #media>
        <f7-icon f7="person" color="red"></f7-icon>
       </template>
     </f7-list-item>

     <f7-list-item
     link
       title="My Favorites"
       :active="selected === ''"
       
     >
       <template #media>
        <f7-icon f7="star" color="red"></f7-icon>
       </template>
     </f7-list-item>


     <f7-list-item
     link
       title="Order Tracker"
       :active="selected === ''"
       
     >
       <template #media>
        <f7-icon f7="square_list" color="red"></f7-icon>
       </template>
     </f7-list-item>

     <f7-list-item
    link
       title="Order History"
       :active="selected === ''"
       
     >
       <template #media>
        <f7-icon f7="clock" color="red"></f7-icon>
       </template>
     </f7-list-item>

     </f7-list>
     <f7-button fill color="red" class=" h-[40px] border rounded-2xl">Logout</f7-button>
       </f7-block>
   </f7-page>
  </f7-panel>

</template>

<script setup>
import { useMainMenu } from '../composables/userMainMenu';
import 'framework7-icons';

const { menuOpen, toggleMenu, selected, setSelected } = useMainMenu()
</script>

<script>
import { f7App, f7Page, f7Navbar, f7Panel, f7Link, f7ListItem, f7List, f7Block,f7Badge, f7Button } from 'framework7-vue';
export default {
  components: {
    f7App,
    f7App, f7Page, f7Navbar, f7Panel, f7Link, f7ListItem, f7List, f7Block,f7Badge, f7Button
  }
}

</script>
<style scoped>
.size-17 {
    font-size: 17px;
  }
  .size-22 {
    font-size: 22px;
  }
  .size-32 {
    font-size: 32px;
  }
  .size-56 {
    font-size: 56px;
  }
  
  
  .color-black {
  color: #000;
}
.color-white {
  color: #fff;
}
.color-green {
  color:#32a852;
}
  </style>