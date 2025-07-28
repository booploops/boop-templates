<script setup lang="ts">

const count = ref(0);

</script>

<template>
    <q-page class="q-pa-lg">
        <div class="text-h5 text-bold">Hello world!</div>
        <div class="text-subtitle2">You clicked the button {{ count }} times.</div>
        <q-btn
            class="q-mt-md"
            color="primary"
            label="Click me"
            @click="count++"
        />
    </q-page>
</template>

<style scoped lang="scss">

</style>