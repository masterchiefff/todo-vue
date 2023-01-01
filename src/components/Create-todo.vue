<script>
import axios from 'axios';
import todos from '../assets/todos.json'

export default {
    data() {
        return {
            newTodo: '',
            todos: []
        }
    },
    methods: {
        submitItem (id, text, completed) {
            if(this.newTodo === '' || this.newTodo === null || this.newTodo === 0) {
                console.log('field is empty')
            }else {
                const data = {title: this.newTodo, is_completed: 0}
                axios.post('http://localhost:4000/api/v1/todos', data)
                .then(response => {
                    const todo = this.todos.push(data);
                    this.newTodo = ''; 
                    
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    },
    created() {
        this.todos = todos;
    }
}
</script>

<template>
    <form action="submit" v-on:submit.prevent='submitItem'>
        <div class="p-4 bg-white rounded-lg shadow md:flex md:items-center mt-4 md:justify-between md:p-6 dark:bg-gray-800">
            <div class="flex">
                <input type="text" v-model="newTodo" placeholder="Create a todo" class="w-48 border-transparent focus:outline-0 mb-2 text-sm font-medium text-gray px-2.5"/>
                <button class="ml-2 ext-white bg-purple text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Create Todo</button>
            </div>
        </div>
    </form>
</template>