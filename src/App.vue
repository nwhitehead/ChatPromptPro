<script setup>

import { computed, reactive, ref, onMounted, watch } from 'vue';
import { GOOGLE_PROJECT_ID } from './config.js';

</script>

<template>
    <div class="w-full top-0 bg-white">
        <div class="max-w-screen-xl px-16 py-20 lg:mx-auto flex justify-between items-center h-16 min-w-[350px]">
            <div class="flex flex-row items-center">
                <div class="bg-blue-500 w-[5px] h-[2em]">
                </div>
                <router-link to="/" class="sm:text-2xl font-bold flex flex-row px-4">
                    Chat Prompt PRO
                </router-link>
            </div>

        </div>
    </div>

    <div class="min-w-[300px] pt-16 w-full bg-white">
        <div>
            <router-view>
            </router-view>
        </div>
    </div>

    <div class="px-20 pt-15 py-20 text-gray-500 border-t flex flex-col max-w-screen-xl xl:mx-auto">
        <p class="pr-4">Copyright © 2023, Nathan Whitehead.</p>
        <div class="flex flex-row pt-4">
            <p class="pr-2">Made with</p><div class="grayscale hover:grayscale-0 hover:animate-wiggle">💖</div>
        </div>
    </div>

</template>
