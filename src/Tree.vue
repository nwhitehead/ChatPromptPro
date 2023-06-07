<script setup>

const props = defineProps(['children', 'data', 'centered']);
// children - array of data for children below current root (or empty)
// data - dict with 'type': ['node', 'text'], 'who': string, 'what': string
//   type 'node' means to just draw circle, type 'text' means to draw text
//   'who' is one of ['gpt', 'human']
//   'what' is markdown text for the entry
//   'collapse' is true if text should be shown small (not expanded)
// 'centered': int is which child should be shown centered below root

</script>

<template>

<div class="">
</div>

</template>
