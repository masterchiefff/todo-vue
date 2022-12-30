<script>
export default {
    data () {
        return {
            theme: true,
        }
    },
    mounted() {
        let localTheme = localStorage.getItem('theme');
        document.documentElement.setAttribute('data-theme', localTheme);
    },
    toggleTheme() {
        console.log('data working')
    }
}
</script>
<template>
    <nav class="p-4 sm:p-8 bg-white rounded-t-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" /> -->
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-grey">Todo</span>
            </a>
            <button data-collapse-toggle="theme" aria-label="Toggle themes" @click:prevent="toggleTheme" class="focus:outline-0 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <!-- <span class="sr-only">Open main menu</span> -->
                <svg xmlns="http://www.w3.org/2000/svg" v-if = "this.theme" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-grey done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" v-else fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-grey done transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>

            </button>
        </div>
    </nav>
</template>