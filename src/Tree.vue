<script setup>

import PathDiv from './PathDiv.vue';

const props = defineProps(['data', 'over', 'pathColor', 'pathThickness']);
// slot (default) - will be given data to display a node in the tree
// data - 
//   generic data to be passed to slot to render current root node
//   needs to have 'children' field that is array of data for children
// //   dict with 'type': ['node', 'text'], 'who': string, 'what': string
// //   type 'node' means to just draw circle, type 'text' means to draw text
// //   'who' is one of ['gpt', 'human']
// //   'what' is markdown text for the entry
// 'over': int is which child should be shown centered below root
// 'pathColor': string color to draw connecting paths
// 'pathThickness': string thickness to draw connecting paths

function computedStyleNode() {
    return {
        'grid-column-start': 2,
        'grid-column-end': 2,
        'grid-row-start': 1,
        'grid-row-end': 1,
    }
}

function computedStyleChild(i) {
    return {
        'grid-column-start': i + 1,
        'grid-column-end': i + 1,
        'grid-row-start': 3,
        'grid-row-end': 3,
    }
}

function computedConnect(i, length) {
    let result = [ 'b' ];
    if (i > 0) {
        result.push('l');
    }
    if (i < length - 1) {
        result.push('r');
    }
    if (i === props.over) {
        result.push('t');
    }
    return result;
}

function computedStylePathDiv(i) {
    return {
        'grid-column-start': i + 1,
        'grid-column-end': i + 1,
        'grid-row-start': 2,
        'grid-row-end': 2,
        'height': '20px',
        'width': '100%',
    }
}

</script>

<template>

    <!-- <div class="grid justify-items-center auto-cols-min min-w-fit min-h-fit">
        <div class="col-start-2 col-end-2 row-start-1 row-end-1 bg-black w-8 h-8" />
        <PathDiv class="h-4 w-full col-start-1 col-end-1 row-start-2 row-end-2" :connect="['b', 'r']" />
        <PathDiv class="h-4 w-full col-start-2 col-end-2 row-start-2 row-end-2" :connect="['l', 'b', 't', 'r']" />
        <PathDiv class="h-4 w-full col-start-3 col-end-3 row-start-2 row-end-2" :connect="['l', 'b']" />
        <div class="col-start-1 col-end-1 row-start-3 row-end-3 bg-red-400 w-64 h-64" />
        <div class="col-start-2 col-end-2 row-start-3 row-end-3 bg-yellow-400 w-32 h-32" />
        <div class="col-start-3 col-end-3 row-start-3 row-end-3 bg-blue-400 w-32 h-48" />
    </div> -->

    <div :style="{
        'display': 'grid',
        'justify-items': 'center',
        'grid-auto-columns': 'min-content',
        'min-width': 'fit-content',
        'min-height': 'fit-content',
    }">
        <div :style="computedStyleNode()">
            <slot :data="props.data"></slot>
        </div>
        <PathDiv
            v-for="(item, index) in props.data.children"
            :style="computedStylePathDiv(index)"
            :connect="computedConnect(index, props.data.children.length)"
        />
        <div
            v-for="(item, index) in props.data.children"
            :style="computedStyleChild(index)">
            <slot :data="item"></slot>
        </div>
    </div>

</template>
