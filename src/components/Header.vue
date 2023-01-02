<script>
import axios from "axios";

export default {
    data(){
        return {
            day: '',
            month:'',
            year: '',
            weekDay: '',
            id: 0
        }
    },

    async created(){
        try {
            const date = new Date()
            const year = date.getFullYear();
            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
                ]

            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                ]

            const monthIndex = date.getMonth();
            const monthName = months[monthIndex];
            const dayIndex = date.getDay();
            const dayName = days[dayIndex];
            const dates = date.getDate();


            this.year = year;
            this.month = monthName;
            this.day = dayName;
            this.date = dates;

            if(this.date < 10){
                this.date = '0' + this.date;
            }
            

        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="date flex">
            <h1 class="text-2xl font-black leading-none text-gray dark:text-white" style="font-size: 41px!important;">{{ this.date }}</h1>
            <div class="date-sm ml-2">
                <p class="text-sm font-medium text-gray uppercase font-black dark:text-white">{{ this.month }}</p>
                <p class="text-sm font-medium text-gray dark:text-white" style="">{{ this.year }}</p>
            </div>
        </div>
        <p class="text-sm font-medium text-gray uppercase font-bold dark:text-white">
            {{ this.day }}
        </p>
   </div>
</template>
