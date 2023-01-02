<script lang="ts">
export default {
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
    props: {
        text: {
            type: String,
            required: false,
        },
    },
}
</script>

<template>
    <button @click="onClick">{{ text }}</button>
</template>