<script lang="ts">

export default {
    data() {
        return {
            active: false,
            parentMessage: 'Parent',
            todos: [{ message: 'Learn view js' }, { message: 'Go to bed' },{ message: 'Go to bed' }, ]
        }
    },
    methods: {
        markDone (  ) {
            this.active = !this.active
            const el = document.querySelector('#todo')?.classList;
            this.active ? el?.remove('text-grey') : ''
        }
    }
}
    
</script>

<template>
    <li class="py-3 sm:py-4" id="todo" v-for="(todo) in todos">
        <div class="flex items-center space-x-4">
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray truncate" :class="[ active ? 'text-grey-light' : 'text-grey' ]">
                    {{ todo.message }}
                </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900" @click="markDone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" v-if="active" class="w-6 h-6 text-green done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" v-else class="w-6 h-6 text-green done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    </li>
</template>