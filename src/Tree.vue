<script setup>

import PathDiv from './PathDiv.vue';

const props = defineProps(['data', 'path', 'pathColor', 'pathThickness']);
// slot (default) - will be given data to display a node in the tree
//     data - generic data to be passed to slot to render current root node
//     path - array of ints depecting position in tree
//     leaf - boolean, true if no children
// 'path': array of int describing the position of this tree root
// 'pathColor': string color to draw connecting paths
// 'pathThickness': string thickness to draw connecting paths

function computedConnect(i, length) {
    let result = [ 'b' ];
    const over = props.over || 0;
    if (i > 0) {
        result.push('l');
    }
    if (i < length - 1) {
        result.push('r');
    }
    if (i === over) {
        result.push('t');
    }
    return result;
}

</script>

<style>
.outer {
    min-width: fit-content;
    min-height: fit-content;
    align-items: center;
}
.flexcol {
    display: flex;
    flex-direction: column;
}
.flexrow {
    display: flex;
    flex-direction: row;
}
.wfit {
    width: fit-content;
}
.path {
    height: 20px;
    width: 100%;
}
</style>

<template>

    <div class="outer flexcol wfit">
        <div class="flexcol wfit">
            <slot :data="props.data" :path="props.path"></slot>
            <PathDiv v-if="props.data.children.length > 0" :connect="['b']" :color="props.pathColor" class="path" />
        </div>
        <div class="flexrow wfit">
            <div v-for="(item, index) in props.data.children" class="flexcol">
                <PathDiv :connect="computedConnect(index, props.data.children.length)" :color="props.pathColor" class="path" />
                <Tree
                    :data="item"
                    :path="props.path.concat([index])"
                    :pathColor="props.pathColor"
                    v-slot="{ data, path }"
                >
                    <slot :data="data" :path="path"></slot>
                </Tree>
            </div>
        </div>
    </div>

</template>
