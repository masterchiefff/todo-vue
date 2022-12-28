<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue';
</script>

<template>
  <div class="container flex justify-center py-8">
    <div class="relative">
      <HeaderVue></HeaderVue>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
