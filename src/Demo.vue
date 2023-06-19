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

const select = reactive([0]);
let lastSelectPosition = {};

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
            selected: true,
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

function samePath(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}

function conversationClass(item, path) {
    return {
// Stripe background based on participant
        'bg-white/50': item.who === 'human',
        'bg-stone-200/50': item.who === 'gpt',
        'bg-blue-200/50': item.who === 'system',
// Select markers
        'border-yellow-500': samePath(select, path),
        'border-4': samePath(select, path),
    };
}

function handleUp() {
    if (select.length > 0) {
        lastSelectPosition[select.length - 1] = select[select.length - 1];
        select.pop();
    }
}
function handleDown() {
    let t = tree;
    for (let i = 0; i < select.length; i++) {
        const choice = select[i];
        t = t.children[choice];
    }
    const p = lastSelectPosition[select.length] || 0;
    if (t.children.length > p) {
        select.push(p);
    }
}
function handleLeft() {
    if (select.length > 0) {
        const choice = select[select.length - 1];
        if (choice > 0) {
            select[select.length - 1] = choice - 1;
        }
    }
}
function handleRight() {
    if (select.length > 0) {
        let t = tree;
        for (let i = 0; i < select.length - 1; i++) {
            t = t.children[select[i]];
        }
        const choice = select[select.length - 1];
        if (choice < t.children.length - 1) {
            select[select.length - 1] = choice + 1;
        }
    }
}
function handleEnter() {
    console.log('enter');
    let t = tree;
    for (let i = 0; i < select.length; i++) {
        t = t.children[select[i]];
    }
    const node = {
        children: [],
    };
    t.children.push(node);
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

    <div
        class="p-8 bg-stone-100/50"
        @keyup.up="handleUp"
        @keyup.down="handleDown"
        @keyup.left="handleLeft"
        @keyup.right="handleRight"
        @keyup.enter="handleEnter"
        tabindex="-1">
        <Tree :data="tree" :path="[]" :pathColor="'#bbb'" v-slot="{ data, path }">
            <div :class="conversationClass(data, path)" class="bg-stone-200/50 border border-stone-400 rounded shadow flex gap-x-4 mx-2 px-4 pt-4 whitespace-pre-wrap max-h-32 max-w-lg min-w-[200px]">
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

</template>
