<script setup>
import { RouterView } from 'vue-router'

import NavVue from './components/Nav.vue';
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';
import ToastVue from './components/Toast.vue';
import CreateTodo from './components/Create-todo.vue';


</script>

<template>
  <div class="container-lg scrol h-max bg-grey-light-md w-full m-0 max-auto flex justify-center p-8 dark:bg-bg-dark">
    <div class="relative">
      <NavVue />
      <div class="w-96 max-w-md p-4 bg-white rounded-sm shadow-sm sm:p-8 dark:bg-card-dark">
        <HeaderVue />
        <RouterView/>
      </div>
      <Create-todo />
      <FooterVue />
      <ToastVue class="hidden"/>
    </div>
  </div>

</template>