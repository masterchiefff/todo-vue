<script setup lang="ts">
import listVue from '@/components/list.vue';
</script>


<template>
    <div class="w-full overflow-x-auto mt-5 bg-white px-0 sm:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="flow-root">
            <ul role="list">
                <listVue />
            </ul>
        </div>
    </div>
</template>