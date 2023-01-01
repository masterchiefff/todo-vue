<script>
import axios from 'axios';
import todos from '../assets/todos.json'

export default {
    data() {
        return {
            newTodo: '',
            newDescription: '',
            modalOpen: true,
            todos: []
        }
    },
    methods: {
        openModal(){
            const modal = document.querySelector('#authentication-modal');
            if(this.modalOpen){
                modal.classList.remove('hidden')
                this.modalOpen = false;
            } 
        }, 

        closeModal(){
            const modal = document.querySelector('#authentication-modal');
            if(!this.modalOpen){
                modal.classList.add('hidden')
                this.modalOpen = true;
            } 
        },

        submitItem (id, text, completed, description) {
            if(this.newTodo === '' || this.newTodo === null || this.newTodo === 0 && this.newDescription === '' || this.newDescription === null || this.newDescription === 0) {
                console.log('field is empty')
            }else {
                const data = {title: this.newTodo, is_completed: 0, description: this.newDescription }
                axios.post('http://localhost:4000/api/v1/todos', data)
                .then(response => {
                    const todo = this.todos.push(data);
                    console.log(data);
                    this.newTodo = ''; 
                    this.newDescription = ''; 
                    
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
    <div class="flex w-full">
        <div @click="openModal" class="w-96 block bg-purple relative w-20 h-20 rounded-sm mt-5 item-center justify-center cursor-pointer flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 item-center justify-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
    </div>
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="animate__bounceIn fixed top-0 h-screen left-0 right-0 z-50 flex w-full hidden overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="overlay absolute h-full w-full opacity-70 bg-black dark:bg-card-dark"></div>
        <div class="relative w-full flex justify-center item-center md:h-auto h-screen">
            <!-- Modal content -->
            <div class="relative h-96 bg-white justify-center mt-20 item-center rounded-lg shadow dark:bg-card-dark">
                <button type="button" @click="closeModal" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create Todo</h3>
                    <form class="space-y-6" action="#" v-on:submit.prevent='submitItem'>
                        <div>
                            <!-- <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> -->
                            <input type="text" v-model="newTodo" placeholder="Create a todo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-bg-dark dark:border-card-dark dark:placeholder-gray-400 dark:text-white">
                        </div>
                        <div>
                            <!-- <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> -->
                            <textarea id="message" v-model="newDescription" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-bg-dark dark:border-card-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe your todo"></textarea>
                        </div>
                        <button type="submit" class="w-full text-white bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Todo</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
</template> 