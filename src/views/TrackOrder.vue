<template>

<f7-page class="bg-white" safe-area @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
    <f7-block class="flex justify-center">
        <img src="../assets/image/Received.png" class="w-60 mt-20" />
    </f7-block>
    <f7-block class="flex justify-center">
        <p class="text-2xl font-bold">Order Received!</p>
    </f7-block>
    <f7-block class="flex justify-center">
        <p class="text-lg">Your order <span class="text-red-500 font-bold">No. 19049585</span> has successfully take and
        now being processed. Kindly wait for our notification regarding to your order
        </p>
    </f7-block>

    <f7-block>
        <f7-button fill color="red" text="Track Order" href="#"></f7-button>
    </f7-block>
    
    <div class="flex justify-center">
    <f7-link href="/home/">
        <p class="text-red-500 text-lg font-bold">Back to Home</p>
    </f7-link>
    </div>
</f7-page>
</template>

<script>
import { f7Page, f7Block, f7Button, f7Link } from 'framework7-vue'

export default{
    components: {
        f7Page,
        f7Block,
        f7Button,
        f7Link
    }
}
</script>