<script setup>

import MarkdownItModule from 'markdown-it';
import MarkdownItAttrs from 'markdown-it-attrs';
import MarkdownItIns from 'markdown-it-ins';
import MarkdownItMark from 'markdown-it-mark';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

import DOMPurify from 'dompurify';
import chatgpt_img from '../images/chatgpt.png';
import me_img from '../images/me.png';
import system_img from '../images/robot1.png';

const props = defineProps(['dialog', 'options']);
const md = new MarkdownItModule({

})
    .use(MarkdownItAttrs)
    .use(MarkdownItIns)
    .use(MarkdownItMark);

function striped(item) {
    return {
        'bg-stone-100': item.who === 'gpt'
    };
}

function getOption(name, defaultValue) {
    if (props.options === undefined) {
        return defaultValue;
    }
    if (props.options.name === undefined) {
        return defaultValue;
    }
    return props.options.name;
}

</script>

<template>

    <div class="flex flex-col text-stone-700">
        <div v-for="item in props.dialog" class="group w-full border-b" :class="striped(item)">
            <div class="group w-full border-b">
                <div class="container mx-auto md:max-w-3xl">
                    <div class="flex gap-x-6 px-4 pt-4 whitespace-pre-wrap max-h-32">
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
                                <button class="py-2 my-0 px-4 relative">
                                    <ChevronDownIcon class="h-4 w-4 mx-auto" />
                                </button>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
