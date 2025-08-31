<script setup lang="ts">

const count = ref(0);

</script>

<template>
    <q-page class="q-pa-lg">
        <div class="text-h5 text-bold">Hello world!</div>
        <div class="text-subtitle2  p-12 bg-red-700">You clicked the button {{ count }} times.</div>
        <button
            @click="count++"
            class="tw-bg-blue-500 hover:tw-bg-blue-700  tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-transition-colors tw-duration-200"
        >
            Click me
        </button>
        <q-btn
            class="q-mt-md"
            color="primary"
            label="Click me"
            @click="count++"
        />
    </q-page>
</template>

<style scoped lang="scss"></style>