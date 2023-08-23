<template>
 

<f7-page class="bg-white" safe-area @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">

  <f7-navbar title="Chicken" back-link="Back" color="white" class="mt-4">

      <template #right>
        <f7-link>
            <i class="f7-icons">bag</i>
        </f7-link>
      </template>
    </f7-navbar>


  <f7-card class="p-4">
    <div class="flex justify-center p-8">
        <img src="https://pngimg.com/d/turkey_food_PNG14.png"/>
    </div>
  </f7-card>
 

    <div class="flex justify-start p-4">
        <p class="text-xl font-bold">Special Chicken</p>
    </div>

    <vue3-star-ratings v-model="rating" showControl="false" class="float-left"   starSize="15" inactiveColor="#ff9800"  controlSize="0"/>
 <f7-block>
    <div>
        <p class="text-justify">
            Lorem ipsum dolor sit amet. Sed consectetur expedita cum ipsa labore ut labore consectetur? Ea unde illum
             ex sint internos sed quia voluptatibus et obcaecati officiis. Qui aspernatur repudiandae sed ullam deserunt
            ut facere itaque non galisum earum sed debitis iusto. Et tenetur iusto aut doloribus quam ut dicta amet ad
             iste corporis id esse consequatur qui consequatur omnis.
        </p>
    </div>
 </f7-block>
 <f7-stepper
            :value="value"
            outline
            @plus="increase"
            @minus="decrease"
            class="float-right mr-4"
          />

    <p class="text-2xl text-red-600 font-bold ml-4">P 260</p>
   
   <f7-block>
    <p class="text-xl font-bold">Beverages</p>
    <f7-list>
      <f7-list-input
        outline
        label="Beverages"
        type="select"
        
        placeholder="Please choose beverages"
      >
        <option value="Coke">Coke</option>
        <option value="Sprite">Sprite</option>
        <option value="Milktae">MilkTae</option>
      </f7-list-input>
    </f7-list>
   
   </f7-block>

   <div class="flex justify-center columns-3 p-4 space-x-2">
         <f7-button rounded raised outline>Regular</f7-button>
         <f7-button rounded raised outline>Large</f7-button>
          <f7-button rounded raised outline>X-large</f7-button>
    </div>

    <f7-block>
        <p class="text-xl font-bold">Add-Ons</p>
      <f7-list>
        <f7-list-item
        :chevron-material="false"
        title="Chicken Sauce"
        subtitle="P 40"

      >
      <template #after>
        <f7-stepper
            :value="value"
            outline
            small
            @plus="increase"
            @minus="decrease"
            class="float-right mr-4"
          />
      </template>
      
        <template #media>
          <img
            class=" "
            src="https://pngimg.com/d/sauce_PNG60.png"
            width="80"
            alt="demo"
          />
        </template>
      </f7-list-item>

      <f7-list-item
        :chevron-material="false"
        title="Chicken Sauce"
        subtitle="P 40"

      >
      <template #after>
        <f7-stepper
            :value="value"
            outline
            small
            @plus="increase"
            @minus="decrease"
            class="float-right mr-4"
          />
      </template>
      
        <template #media>
          <img
            class=" "
            src="https://pngimg.com/d/sauce_PNG60.png"
            width="80"
            alt="demo"
          />
        </template>
      </f7-list-item>
      </f7-list>
       
    </f7-block>

    
    <f7-fab
      
      class="fixed left-1/2 w-72 bottom-4-safe transform -translate-x-1/2 z-20 text-white"
      text="Add to Bag"
      color="red"
      @click="() => (alertOpened = true)"
      >
    </f7-fab>

    <k-dialog
      :opened="alertOpened"
      @backdropclick="() => (alertOpened = false)"
    >
      <template #title>Successfully Added!</template>
      <p>What do you want to do now?</p>
      <f7-button fill color="red" href="/checkoutview/">Proceed to Checkout</f7-button>
      <f7-link class="mt-2 font-bold text-lg text-red-500" href="/home/">back to home</f7-link>
    </k-dialog>

</f7-page>

</template>

<script >
import {
  f7View,
  f7Navbar,
  f7Link,
  f7Page,
  f7Block,
  f7Card,
  f7Button,
  f7Fab,
  f7,
  f7Stepper,
  f7List,
  f7ListInput,
  f7ListItem } from 'framework7-vue';
  import { ref } from 'vue';

  import { kDialog } from 'konsta/vue';

export default {
    components: {
  f7View,
  f7Navbar,
  f7Link,
  f7Page,
  f7Block,
  f7Card,
  f7Button,
  f7Fab,
  f7,
  f7Stepper,
  f7List,
  f7ListInput,
  f7ListItem,
  kDialog 
    },

    setup() {
      const value = ref(1);
      const increase = () => {
        value.value += 1;
      };
      const decrease = () => {
        value.value = value.value - 1 < 0 ? 0 : value.value - 1;
      };
      const inputValue = ref(1);
      const increaseInput = () => {
        const v = parseInt(inputValue.value, 10);
        if (isNaN(v)) inputValue.value = 0;
        else inputValue.value = v + 1;
      };
      const decreaseInput = () => {
        const v = parseInt(inputValue, 10);
        if (isNaN(v)) inputValue.value = 0;
        inputValue.value = v - 1 < 0 ? 0 : v - 1;
      };
      const onInputInput = (e) => {
        inputValue.value = parseInt(e.target.value, 10);
      };
      const onInputBlur = () => {
        if (isNaN(parseInt(inputValue.value, 10))) inputValue.value = 0;
      };
      const alertOpened = ref(false);
     

      return {
        value,
        increase,
        decrease,
        inputValue,
        increaseInput,
        decreaseInput,
        onInputInput,
        onInputBlur,
        alertOpened
      };
    },


  };

</script>