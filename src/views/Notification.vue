<script setup>
import { kApp, kPage, kNavbar, kBlock, kButton, kLink } from 'konsta/vue';
import { useMainMenu } from '../composables/userMainMenu';

const { toggleMenu } = useMainMenu();

</script>

<template>
<k-page class="bg-white" theme="ios">
  <k-navbar title="Our Foods" class="bg-white">

      <template #left>
                <k-link navbar @click="() => toggleMenu()">
                  <i class="f7-icons bold">menu</i>
            </k-link>
            </template>
  </k-navbar>
    <k-block>
      <p>notification</p>
    </k-block>
</k-page>
</template>

<style scoped>
.bold{
  font-weight: bold;
  font-size: 30px;
  color: red;
}
</style>
