<template>

  <f7-page class="bg-white" safe-area @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
  
      <f7-navbar title="Order Summary" back-link="back" bg-class="bg-white" class="mt-4">
  </f7-navbar>
  
    
          <f7-list media-list strong inset-md outline-ios dividers-ios>
              <f7-list-item swipeout title="Pham Hanni"  subtitle="+63 912 345 789" text="nwjsnHanni@gmail.com">
               
                <template #after>
                  <f7-icon f7="ellipsis_vertical" class="fixed"></f7-icon>
                </template>
                  <f7-swipeout-actions right>
                      <f7-swipeout-button>
                     <f7-icon f7="pencil" color="yellow" ></f7-icon></f7-swipeout-button>
                     <f7-swipeout-button>
                     <f7-icon f7="trash" color="red"></f7-icon></f7-swipeout-button>
                </f7-swipeout-actions>
              </f7-list-item>

              <f7-list-item swipeout title="My Home Address" subtitle="No.21 St. Agustin Street Brgy, De jose" text="Delgado City 2234 Philippines" radio radio-icon="end" name="demo-radio-end">
              <f7-swipeout-actions right>
                  <f7-swipeout-button>
                 <f7-icon f7="pencil" color="yellow" ></f7-icon></f7-swipeout-button>
                 <f7-swipeout-button>
                 <f7-icon f7="trash" color="red"></f7-icon></f7-swipeout-button>
            </f7-swipeout-actions>
          </f7-list-item>

          <f7-list-item swipeout title="Work/Office" subtitle="18th flr Bighit Entertainment "  text="Bldg Manila Philippines" radio radio-icon="end" name="demo-radio-end">
              <f7-swipeout-actions right>
                  <f7-swipeout-button>
                 <f7-icon f7="pencil" color="yellow" ></f7-icon></f7-swipeout-button>
                 <f7-swipeout-button>
                 <f7-icon f7="trash" color="red"></f7-icon></f7-swipeout-button>
            </f7-swipeout-actions>
          </f7-list-item>
          </f7-list>
  
    <f7-block>
      <p class="text-2xl font-bold">Orders</p>
    </f7-block>

    <f7-list media-list strong inset-md outline-ios dividers-ios>
      <f7-list-item swipeout title="Special Chicken" subtitle="1x coke"  text="1x chicken sauce">
        <template #media>
          <img src="https://pngimg.com/d/turkey_food_PNG14.png" class="w-10">
        </template>
              <f7-swipeout-actions right>
                  <f7-swipeout-button>
                 <f7-icon f7="pencil" color="yellow" ></f7-icon></f7-swipeout-button>
                 <f7-swipeout-button>
                 <f7-icon f7="trash" color="red"></f7-icon></f7-swipeout-button>
            </f7-swipeout-actions>
          </f7-list-item>
          
          <f7-list-item
        :chevron-material="false"
        color="red">

        <template #media>
          <p class="text-lg font-bold text-red-600">P 260</p>
        </template>

        <f7-stepper
            :value="value"
            outline
            small
            @plus="increase"
            @minus="decrease"
            class="float-right mt-4"
          />
      </f7-list-item>
    </f7-list>


    <f7-block>
      <p class="text-2xl font-bold">Payment Option</p>
    </f7-block>

    <f7-list media-list strong inset-md outline-ios dividers-ios>
      <f7-list-item radio radio-icon="end" name="demo-radio-end">
        <p class="text-lg font-bold">Cash on Delivery</p>
        <p class="text-sm">Pay when you received the order</p>
      </f7-list-item>

      <f7-list-item radio radio-icon="end" name="demo-radio-end">
        <p class="text-lg font-bold">Loyalty Points <span class="text-red-500">(0 Points)</span></p>
        <p class="text-sm">Pay using your loyalty points</p>
      </f7-list-item>

      <f7-list-item radio radio-icon="end" name="demo-radio-end">
        <img src="../assets/image/PayPal.png" class="w-18" />
        <p class="text-sm">A new tab will open to access your account</p>
      </f7-list-item>
      <f7-list-item radio radio-icon="end" name="demo-radio-end">
        <img src="../assets/image/Gcash.png" class="w-18" />
        <p class="text-sm">A new tab will open to access your account</p>
      </f7-list-item>
    </f7-list>

    <f7-block>
     
      <div className="flex justify-start ios:hidden space-x-64 rtl:space-x-reverse">
        <p class="text-lg font-bold">Subtotal</p>
        <p class="text-lg font-bold">P 260</p>
          </div>
      
          <div className="flex justify-start ios:hidden space-x-52 rtl:space-x-reverse">
        <p class="text-lg font-bold">Delivery Charge</p>
        <p class="text-lg font-bold">P 59</p>
          </div>

    </f7-block>
    <f7-card class="p-2 mb-72">
          <p>Change for</p>
          <p>e.g 1,000</p>
         </f7-card> 

      <div class="fixed left-1/2 bg-white bottom-safe transform -translate-x-1/2 z-10 w-full">
        <div class="flex-1 columns-2 p-4">
        <p>Grand Total</p>
        <p class="text-lg font-bold">P 319</p>
        <f7-button fill color="red" class="right-4 top-8" href="/received/">Place Order</f7-button>
        </div>
      </div>
      
     

  </f7-page>
  </template>
  
  <script>
  import { f7Page, f7Navbar, f7Link, f7SwipeoutActions, f7SwipeoutButton, f7Block, f7List, f7ListItem, f7Card, f7Toolbar, f7Button} from 'framework7-vue';
  export default {
      components: {
          f7Page,
          f7Navbar,
          f7Link,
          f7SwipeoutActions,
          f7SwipeoutButton,
          f7Block,
          f7List,
          f7ListItem,
          f7Card,
          f7Toolbar,
          f7Button
  
      },
     
  }
  
  </script>
