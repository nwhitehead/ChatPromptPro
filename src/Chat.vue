<script setup>

import { reactive } from 'vue';
import Dropdown from './Dropdown.vue';
import { PlusIcon } from '@heroicons/vue/24/outline'
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import demo_convo from '../dialog.json?json';
import chatgpt_img from '../images/chatgpt.png';
import { generateUUID, WS_SERVER } from './config.js';

// A map with keys of id and values of:
//   data: current value
//   update_callback: callback to call on updated incremental values
let response_map = {};

let connection = new WebSocket(`${WS_SERVER}/api/v1/wschat`);

connection.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    console.log('Vue app got message', msg);
    if (msg.id === undefined) {
        console.log('Message did not include id, ignoring');
        return;
    }
    let resp = response_map[msg.id];
    if (response_map[msg.id] === undefined) {
        console.log('Could not find incremental response to update');
        return;
    }
    if (msg.tag === 'update') {
        response_map[msg.id].data += msg.data;
        const done = false;
        response_map[msg.id].update_callback(response_map[msg.id].data, done);
    } else if (msg.tag === 'done') {
        const done = true;
        response_map[msg.id].update_callback(response_map[msg.id].data, done, msg.data);
        delete response_map[msg.id];
    } else {
        console.log('Unknown msg.tag');
    }
});

// Call with data having OpenAI fields (e.g. model, messages, etc)
// callback is called on incremental update and for final update
// Always called with latest value, second arg is "final" (true on final update)
async function callChat(data, update_callback) {
    const id = generateUUID();
    const request = { id, tag: "chat", data };
    response_map[id] = { data: "", update_callback };
    connection.send(JSON.stringify(request));
}


//const dialog = defineProps(['dialog']);
let dialog = reactive(demo_convo);

function striped(item) {
    return {
        'bg-stone-100': item.who === 'gpt'
    };
}

function handleClick(msg) {
    console.log('click');
    dialog.contents.dialog = [
        { who: 'human', what: msg},
        { who: 'gpt', what: ''},
    ];
    callChat({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content:"You are a helpful cheerful assistant."}, 
            {role: "user", content: msg},
        ],
        temperature: 0.5,
        max_tokens: 200,
        stream: true,
    }, (txt, done, reason) => {
        console.log('Update partial result: ', txt, done, reason);
        dialog.contents.dialog[1].what = txt;
    });
}

</script>

<template>
    <button class="btn-blue" @click="handleClick('Which is taller, an ant or a dog? Put your answer in a table.')">Taller</button>

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
