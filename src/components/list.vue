<script>
import axios from "axios";
import { ref, onMounted } from 'vue'

import ButtonVue from './Button.vue';
import todos from '../assets/todos.json';


export default {
    data() {
        return {
            editedTodoId: null,
            total_todos: 0,
            todos: [],
            days: []
        }
    },
    methods: {
        getDay(date){
            const fullDate = new Date(date);
            const days = [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                ]

            const dayIndex = fullDate.getDay();
            const dayName = days[dayIndex];

            return dayName;
        },

        getDate(date){
            const fullDate = new Date(date);
            const dates = fullDate.getDate();

            return dates;
        },

        getTime(date){
            const fullDate = new Date(date);
            const hours = fullDate.getHours();
            const minutes = fullDate.getMinutes();

            return hours + ":" + minutes;
        },

        async getData() {
            try {
                
                const response = await axios.get("http://localhost:4000/api/v1/todos");
                this.todos = response.data.data;

                const objPriority = this.todos.map(todo => todo.priority);
                // console.log(this.$refs.input);
                // switch (objPriority) {
                //     case objPriority.includes('priority'):
                //         break;

                //     case objPriority.includes('medium'):
                //         break;
                
                //     default:
                //         break;
                // }
                return this.todos

            } catch (error) {
                console.log(error);
            }
        },
        async markDone (index) {
            const object = this.todos[index];
            if (object.is_completed) {
                object.is_completed = 0;
                axios.put(`http://localhost:4000/api/v1/todos/${object.id}`, {is_completed: 0})
                .then(response => {})
                .catch(error => {
                    console.log(error);
                });
			}else {
                object.is_completed = 1;
                axios.put(`http://localhost:4000/api/v1/todos/${object.id}`, {is_completed: 1})
                .then(response => {})
                .catch(error => {
                    console.log(error);
                });
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
            // const result = this.todos.find(obj => {
            //     return obj.id === 33
            // })
            this.todos.splice(index,1);
			this.total_todos = this.todos.length;
            // axios.delete(`http://localhost:4000/api/v1/todos/${result.id}`)
            //     .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
            //     .catch(err => console.log(err));
        }
    },
    created () {
        // const dayName = days[dayIndex];
        // this.day = dayName;
        this.getData();
        
    },
}
    
</script>

<template>
    <li class="py-3 sm:py-4 dark:bg-card-dark"  v-for="(todo, index) in todos" :key="todo.id" >
        <template v-if="editedTodoId === todo.id">
            <div class="flex dark:bg-card-dark">
                <input ref="input" type="text" v-model="todo.title" :ref="`field${todo.id}`" class="w-48 bg-gray-50 text-gray text-sm rounded-lg focus:outline-0 dark:bg-card-dark block p-2.5"/>
                <button class="ml-2 mt-2 ext-white bg-yellow hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" @click.prevent="editItem">save</button>
            </div>
        </template>
        <template v-else>
            <div class="flex items-center">
                <div class="flex-1 min-w-0">
                    <p @click.prevent="editItem(todo.id)" class="text-md font-medium truncate dark:text-grey-light" :class="[ todo.is_completed ? 'text-gray-light  line-through' : 'text-gray' ]">
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
        <!-- <div>
            <p class="text-sm text-grey-dark-xs">This is a simple description</p>
            <div class="flex">
                <div class="left flex-1">
                    <p class="text-xs text-blue">Tue 26 3:00 PM - Fri 29 4:30PM</p>
                </div>
                <div class="right inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                </div>
            </div>
        </div> -->
        <div class="flex items-center">
            <div class="flex-1 min-w-0">
                <p class="text-xs text-grey-dark-xs">{{ todo.description }}</p>
                <p class="text-xs text-blue">{{ this.getDay(todo.date_start) }} {{ this.getDate(todo.date_start) }} {{ this.getTime(todo.date_start) }} - {{ this.getDay(todo.date_start) }} {{ this.getDate(todo.date_start) }} {{ this.getTime(todo.date_start) }}</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                <p class="text-xs font-bold bottom-0 text-grey-dark-xs">Priority: <span id="priority" ref="pri"  class="text-blue">{{ todo.priority }}</span></p>
            </div>
        </div>
    </li>
</template>