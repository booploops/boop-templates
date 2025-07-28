<script setup lang="ts">
const count = ref(0);
</script>

<template>
    <div class="main-view">
        <h1>Hello world!</h1>
        <p>You clicked the button {{ count }} times.</p>
        <button @click="count++">Click me</button>
    </div>
</template>

<style scoped lang="scss">

</style>