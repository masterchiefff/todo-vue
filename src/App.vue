<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';
</script>

<template>
  <div class="container-lg bg-grey-light-md w-full m-0 max-auto flex justify-center p-20">
    <div class="relative">
      <div class="w-96 max-w-md p-4 bg-white rounded-sm shadow-sm sm:p-8">
        <HeaderVue />
        <RouterView/>
      </div>
      <FooterVue />
    </div>
  </div>
</template>