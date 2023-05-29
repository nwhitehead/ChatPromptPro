<script setup>
import Dropdown from './Dropdown.vue';
import { PlusIcon } from '@heroicons/vue/24/outline'
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import demo_convo from '../dialog.json?json';
import chatgpt_img from '../images/chatgpt.png';
import { WS_SERVER } from './config.js';

let connection = new WebSocket(`${WS_SERVER}/api/v1/wschat`);
connection.addEventListener("message", (event) => {
    console.log('Vue app got message', event);
});

//const dialog = defineProps(['dialog']);
const dialog = demo_convo;

function striped(item) {
    return {
        'bg-stone-100': item.who === 'gpt'
    };
}

function handleClick(msg) {
    console.log('click');
    const request = {
        tag: "chat",
        data: msg,
    }
    connection.send(JSON.stringify(request));
}

</script>

<template>
    <button @click="handleClick('Say hi')">HI</button>
    <button @click="handleClick('Say bye')">BYE</button>

    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Chat
            </p>
        </div>
    </div>

    <div class="flex flex-col text-stone-700">
        <div v-for="item in dialog.contents.dialog" class="group w-full border-b" :class="striped(item)">
            <div class="group w-full border-b">
                <div class="container mx-auto md:max-w-3xl">
                    <div class="flex gap-x-6 p-4 whitespace-pre-wrap">
                        <template v-if="item.who === 'human'">
                            <div class="w-[30px] whitespace-normal flex-none">
                                <img :src="dialog.contents.avatar">
                            </div>
                            <p>{{ item.what }}</p>
                        </template>
                        <template v-if="item.who === 'gpt'">
                            <div class="w-[30px] whitespace-normal flex-none">
                                <img :src="chatgpt_img">
                            </div>
                            <div
                                class="markdown whitespace-normal"
                                v-html="DOMPurify.sanitize(marked(item.what))"
                            />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
