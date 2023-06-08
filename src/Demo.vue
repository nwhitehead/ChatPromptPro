<script setup>

import { reactive } from 'vue';
import Node from './Node.vue';
import PathDiv from './PathDiv.vue';
import Tree from './Tree.vue';
import Conversation from './Conversation.vue';
import demo_convo from '../dialog.json?json';
import demodrawing_svg from '../demodrawing.svg';

import MarkdownItModule from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';
import MarkdownItIns from 'markdown-it-ins';
import MarkdownItMark from 'markdown-it-mark';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

import DOMPurify from 'dompurify';
import chatgpt_img from '../images/chatgpt.png';
import me_img from '../images/me.png';
import system_img from '../images/robot1.png';

// reactive(demo_convo.contents.dialog)

const dialog = reactive([
    { who:'system', what:'You are a helpful and friendly assistant.'},
    { who:'human', what:"I'm trying to write an email campaign about ==an office cleaning service==. Suggest 5 email subjects and contents."},
    demo_convo.contents.dialog[1],
    { who:'human', what:"Rewrite the suggestions but ==with more energy and pizzazz.=="},
    demo_convo.contents.dialog[3],
]);

const tree = {
    who: 'system',
    what: 'You are a helpful and friendly assistant.',
    children:[
        {
            who: 'human',
            what: "I'm trying to write an email campaign about ==an office cleaning service==. Suggest 5 email subjects and contents.",
            children: [],
        }, {
            who: 'human',
            what: "I'm trying to write an email campaign about ==a property management service==. Suggest 5 email subjects and contents.",
            children: [
                {
                    who: 'gpt',
                    what: "blah blah blha",
                    children: [],
                },
            ],
        },
    ],
};

const md = new MarkdownItModule({

})
    .use(MarkdownItAttrs)
    .use(MarkdownItIns)
    .use(MarkdownItMark);

</script>

<template>

    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Demo
            </p>
        </div>
    </div>

    <div class="p-8 bg-stone-100/50">
        <Tree :data="tree" v-slot="{ data }">
            <div class="border flex gap-x-6 px-4 pt-4 whitespace-pre-wrap max-h-32">
                <template v-if="data.who === 'system'">
                    <div class="w-[30px] whitespace-normal flex-none">
                        <img :src="system_img">
                    </div>
                    <div
                        class="markdown whitespace-normal"
                        v-html="DOMPurify.sanitize(md.render(data.what))"
                    />
                </template>
                <template v-if="data.who === 'human'">
                    <div class="w-[30px] whitespace-normal flex-none">
                        <img :src="me_img">
                    </div>
                    <div
                        class="markdown whitespace-normal"
                        v-html="DOMPurify.sanitize(md.render(data.what))"
                    />
                </template>
                <template v-if="data.who === 'gpt'">
                    <div class="w-[30px] whitespace-normal flex-none">
                        <img :src="chatgpt_img">
                    </div>
                    <div class="flex flex-col">
                        <div
                            class="markdown whitespace-normal overflow-scroll"
                            v-html="DOMPurify.sanitize(md.render(data.what))"
                        />
                        <button class="py-2 my-0 px-4 relative">
                            <ChevronDownIcon class="h-4 w-4 mx-auto" />
                        </button>
                    </div>
                </template>
            </div>
        </Tree>
    </div>

    <div class="my-16" />

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
