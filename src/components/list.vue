<script>
import axios from "axios";


import ButtonVue from './Button.vue';
import todos from '../assets/todos.json';


export default {
    data() {
        return {
            editedTodoId: null,
            total_todos: 0,
            todos: []
        }
    },
    methods: {
        async getData() {
            try {
                const response = await axios.get("http://localhost:4000/api/v1/todos");
                return this.todos = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        markDone (index) {
            const object = this.todos[index];
            if (object.is_completed) {
                this.todos[index].is_completed = 0;
			}else {
                this.todos[index].is_completed = 1;
                
			}
			this.total_todos = this.todos.length;
        },
        editItem(index) {
            
            if (index) {
                this.editedTodoId = index;

                const data = {title: this.newTodo, is_completed: 0}

                axios.put(`http://localhost:4000/api/v1/todos/${this.editedTodoId}`, data)
                    .then(res => {
                        console.log('data edited')
                    })
                    .catch(err => console.log(err));
            } else {
                this.editedTodoId = null;
            }
        },

        async deleteItem(index) {
            this.editedTodoId = index;
            const result = this.todos.find(obj => {
                return obj.id === 33
            })
            axios.delete(`http://localhost:4000/api/v1/todos/${result.id}`)
                .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
                .catch(err => console.log(err));

        //this.todos = this.todos.filter(todo => todo.id !== id);
        //    await axios.delete(`http://localhost:4000/api/v1/todos/`)
            // this.todos.splice(index, 1);
            // this.total_todos = this.todos.length;
            // console.log(`${index}th element deleted! `);
        }
    },
    created () {
        this.getData();
    }
}
    
</script>

props: ['todo'],

<template>
    <li class="py-3 sm:py-4 dark:bg-card-dark"  v-for="(todo, index) in todos" :key="todo.id">
        <template v-if="editedTodoId === todo.id">
            <div class="flex dark:bg-card-dark">
                <input type="text" v-model="todo.title" :ref="`field${todo.id}`" class="w-48 bg-gray-50 text-gray text-sm rounded-lg focus:outline-0 dark:bg-card-dark block p-2.5"/>
                <button class="ml-2 mt-2 ext-white bg-yellow hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" @click.prevent="editItem">save</button>
            </div>
        </template>
        <template v-else>
            <div class="flex items-center">
                <div class="flex-1 min-w-0">
                    <p @click.prevent="editItem(todo.id)" class="text-sm font-medium truncate dark:text-grey-light" :class="[ todo.is_completed ? 'text-gray-light  line-through' : 'text-gray' ]">
                        {{ todo.title }}
                    </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900" @click="markDone(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" v-if="todo.is_completed" class="w-6 h-6 text-green done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
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
        </template>
    </li>
</template>