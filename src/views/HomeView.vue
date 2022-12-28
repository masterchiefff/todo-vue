<script setup lang="ts">
import Cards from '../components/Cards.vue';
</script>


<template>
    <div class="w-full max-w-md p-4 bg-white rounded-b-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flow-root">
            <ul ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <Cards></Cards>
            </ul>
        </div>
    </div>
</template>