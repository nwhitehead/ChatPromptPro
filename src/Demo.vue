<script setup>

import { reactive } from 'vue';
import Node from './Node.vue';
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

</script>

<template>

    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Demo
            </p>
        </div>
    </div>

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
