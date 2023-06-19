<script setup>

import { reactive } from 'vue';
import List from './List.vue';
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

const dialog = reactive([
    { who:'system', what:'You are a helpful and friendly assistant.'},
    { who:'human', what:"I'm trying to write an email campaign about ==an office cleaning service==. Suggest ==5== email subjects and contents."},
    demo_convo.contents.dialog[1],
    { who:'human', what:"Rewrite the suggestions but ==with more energy and pizzazz==."},
    demo_convo.contents.dialog[3],
]);

const select = reactive([0]);

const md = new MarkdownItModule({})
    .use(MarkdownItAttrs)
    .use(MarkdownItIns)
    .use(MarkdownItMark);

function conversationClass(item) {
    return {
// Stripe background based on participant
        'bg-white/50': item.who === 'human',
        'bg-stone-200/50': item.who === 'gpt',
        'bg-blue-200/50': item.who === 'system',
    };
}

</script>

<template>

    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Demo
            </p>
        </div>
    </div>

    <div class="p-8 bg-stone-100/50 flex flex-col text-stone-700" tabindex="-1">
        <List :data="dialog" v-slot="{item, index}">
            <div class="group w-full border-b" :class="conversationClass(item)">
                <div class="group w-full border-b">
                    <div class="container mx-auto md:max-w-3xl">
                        <div class="flex gap-x-6 px-4 pt-4 whitespace-pre-wrap">
                            <template v-if="item.who === 'system'">
                                <div class="w-[30px] whitespace-normal flex-none">
                                    <img :src="system_img">
                                </div>
                                <div
                                    class="markdown whitespace-normal"
                                    v-html="DOMPurify.sanitize(md.render(item.what))"
                                />
                            </template>
                            <template v-if="item.who === 'human'">
                                <div class="w-[30px] whitespace-normal flex-none">
                                    <img :src="me_img">
                                </div>
                                <div
                                    class="markdown whitespace-normal"
                                    v-html="DOMPurify.sanitize(md.render(item.what))"
                                />
                            </template>
                            <template v-if="item.who === 'gpt'">
                                <div class="w-[30px] whitespace-normal flex-none">
                                    <img :src="chatgpt_img">
                                </div>
                                <div class="flex flex-col">
                                    <div
                                        class="markdown whitespace-normal overflow-scroll"
                                        v-html="DOMPurify.sanitize(md.render(item.what))"
                                    />
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </List>
    </div>

    <div class="my-16" />

</template>
