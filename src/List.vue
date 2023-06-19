<script setup>

const props = defineProps(['data']);
// slot (default) - will be given data to display a node in the list
//     item - generic data to be passed to slot to render
//     index - int depecting position in list (starting at 0)
//     last - boolean, true if last item

</script>

<template>

    <template v-for="(item, index) in props.data">
        <slot :item="item" :index="index"></slot>
    </template>

</template>
