<script setup>

import { reactive } from 'vue';
import Node from './Node.vue';
import PathDiv from './PathDiv.vue';
import Tree from './Tree.vue';
import Conversation from './Conversation.vue';
import demo_convo from '../dialog.json?json';
import demodrawing_svg from '../demodrawing.svg';

// reactive(demo_convo.contents.dialog)

const dialog = reactive([
    { who:'system', what:'You are a helpful and friendly assistant.'},
    { who:'human', what:"I'm trying to write an email campaign about ==an office cleaning service==. Suggest 5 email subjects and contents."},
    demo_convo.contents.dialog[1],
    { who:'human', what:"Rewrite the suggestions but ==with more energy and pizzazz.=="},
    demo_convo.contents.dialog[3],
]);

function leafData(w, h, c, children) {
    return { 'w': w, 'h': h, 'background-color': c, 'children': children }
}

const tree = leafData('40px', '40px', '#000', [
    leafData('40px', '40px', '#f00', [
        leafData('40px', '40px', '#0f0', [

        ]),
    ]),
    leafData('128px', '128px', '#ff0', []),
    leafData('128px', '200px', '#00f', []),
]);

</script>

<template>

    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Demo
            </p>
        </div>
    </div>

    <div class="p-8 bg-stone-300/50">
        <Tree :data="tree" v-slot="{ data }">
            <!-- This slot shows how to render data -->
            <div :style="
                {
                    'width': data.w,
                    'height': data.h,
                    'background-color': data['background-color'],
                }">
            </div>
        </Tree>
    </div>

    <div class="my-16" />

    <div class="p-8 bg-stone-300/50">
        <div class="grid justify-items-center auto-cols-min min-w-fit min-h-fit">
            <div class="col-start-2 col-end-2 row-start-1 row-end-1 bg-black w-8 h-8" />
            <PathDiv class="h-4 w-full col-start-1 col-end-1 row-start-2 row-end-2" :connect="['b', 'r']" />
            <PathDiv class="h-4 w-full col-start-2 col-end-2 row-start-2 row-end-2" :connect="['l', 'b', 't', 'r']" />
            <PathDiv class="h-4 w-full col-start-3 col-end-3 row-start-2 row-end-2" :connect="['l', 'b']" />
            <div class="col-start-1 col-end-1 row-start-3 row-end-3 bg-red-400 w-64 h-64" />
            <div class="col-start-2 col-end-2 row-start-3 row-end-3 bg-yellow-400 w-32 h-32" />
            <div class="col-start-3 col-end-3 row-start-3 row-end-3 bg-blue-400 w-32 h-48" />
        </div>
    </div>

    <div class="my-16" />

    <img :src="demodrawing_svg" class="w-64" >

    <section class="">
        <Conversation :dialog="dialog" />
    </section>

    <div class="py-32" />

    <section class="px-12 w-full bg-grid">
        <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
            <div class="h-[800px;]">
                <Node :x="200" :y="200" />
            </div>
        </div>
    </section>

</template>
