<script setup>

const props = defineProps(['color', 'x', 'y']);

function computedStyle() {
    return {
        'left': props.x + 'px',
        'top': props.y + 'px',
    }
}

</script>

<template>

<div class="relative w-48 h-24 bg-neutral-600 rounded-lg text-white p-0 flex flex-col" :style="computedStyle()">
    <span class="w-full bg-neutral-600 p-2 rounded-t-lg border-t-2 border-l-2 border-r-2 border-black">Email campaign generator</span>
    <span class="w-full bg-neutral-800 p-2 border-l-2 border-r-2 border-black">Input</span>
    <span class="w-full bg-neutral-800 p-2 rounded-b-lg border-b-2 border-l-2 border-r-2 border-black">Output</span>
</div>

</template>
