<script lang="ts">

export default {
    data() {
        return {
            isDone: false,
            parentMessage: 'Parent',
            todos: [{ id:'1', message: 'Learn view js' }, { id:'2', message: 'Work on the delete functionality' },{ id:'3', message: 'Go to bed' }, ]
        }
    },
    methods: {
        markDone () {
            this.isDone = !this.isDone
        },

        deleteItem(index) {
            this.todos.splice(index, 1);
            console.log(`${index}th element deleted! `);
        }
    }
}
    
</script>

props: ['todo'],

<template>
    <li class="py-3 sm:py-4"  v-for="(todo, index) in todos" :key="todo.message">
        <div class="flex items-center ">
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium truncate" :class="[ isDone ? 'text-gray-light line-through' : 'text-gray' ]">
                    {{ todo.message }}
                </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900" @click="markDone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" v-if="isDone" class="w-6 h-6 text-green done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" v-else class="w-6 h-6 text-green done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="rela">
                <svg xmlns="http://www.w3.org/2000/svg" @click="deleteItem(index)" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-red done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    </li>
</template>