<script setup lang="ts">
const count = ref(0);
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Hello world!</h1>
        <p class="text-lg text-gray-600 mb-6">You clicked the button {{ count }} times.</p>
        <button @click="count++" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
            Click me
        </button>
    </div>
</template>

<style scoped lang="scss">

</style>