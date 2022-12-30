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
            axios.post('src/assets/todos.json', {
                title: this.newTodo


            })
            .then(response => {
                this.todos.push({
                    id: response.data.id,
                    message: this.newTodo,
                    completed: false
                });
                console.log(this.todos)
                this.newTodo = '';
                
            })
            .catch(error => {
                console.log(error);
            });
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
                <input type="text" v-model="newTodo" placeholder="Create a todo" class="w-48 border-transparent focus:border-transparent focus:ring-0 block mb-2 text-sm font-medium text-gray px-2.5"/>
                <button class="ml-2 ext-white bg-purple text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Create Todo</button>
            </div>
        </div>
    </form>
</template>