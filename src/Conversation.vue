<script setup>

import { marked } from 'marked';
import DOMPurify from 'dompurify';
import chatgpt_img from '../images/chatgpt.png';
import me_img from '../images/me.png';
import system_img from '../images/robot1.png';

const props = defineProps(['dialog', 'options']);

function striped(item) {
    return {
        'bg-stone-100': item.who === 'gpt'
    };
}

function getOption(name, default) {
    if (props.options === undefined) {
        return default;
    }
    if (props.options.name === undefined) {
        return default;
    }
    return props.options.name;
}

</script>

<template>

    <div class="flex flex-col text-stone-700">
        <div v-for="item in props.dialog" class="group w-full border-b" :class="striped(item)">
            <div class="group w-full border-b">
                <div class="container mx-auto md:max-w-3xl">
                    <div class="flex gap-x-6 p-4 whitespace-pre-wrap">
                        <template v-if="item.who === 'system'">
                            <div class="w-[30px] whitespace-normal flex-none">
                                <img :src="system_img">
                            </div>
                            <p>{{ item.what }}</p>
                        </template>
                        <template v-if="item.who === 'human'">
                            <div class="w-[30px] whitespace-normal flex-none">
                                <img :src="me_img">
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
