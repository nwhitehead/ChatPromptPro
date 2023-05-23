<script setup>
import Dropdown from './Dropdown.vue';
import Editor from '@tinymce/tinymce-vue';
import { PlusIcon } from '@heroicons/vue/24/outline'

</script>

<template>
    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Demo Pages
            </p>
        </div>
        <p class="my-40">
        </p>
        <!-- <Dropdown :label="'Theme'" :items="['Fairy tale', 'Love lost']" /> -->

        <div class="flex flex-col justify-items-start">

            <h1 class="text-4xl py-8">
                Name your <span class="text-pink-700">PRO</span> Prompt
            </h1>

            <input
                type="text"
                id="promptname"
                placeholder="Idea Generator"
                class="w-full rounded-md border-gray-200 px-2 py-2.5 pe-10 shadow-lg sm:text-sm"
                value="Email Subject Generator"
            />
            <button type="button" class="btn-green my-4 py-2">Submit</button>
        </div>

        <p class="my-20" />

        <div class="flex flex-col justify-items-start">

            <h1 class="text-4xl py-8">
                Enter your <span class="text-pink-700">PRO</span> Prompt text
            </h1>

            <Editor
                :init="{
                    plugins: 'lists link image table code help wordcount',
                    promotion: false,
                    branding: false,
                }"
            />
        </div>

        <p class="my-20" />

        <div class="flex flex-col justify-items-start">

            <h1 class="text-4xl py-8">
                Design your <span class="text-pink-700">PRO</span> Prompt tool
            </h1>

            <Editor
                :init="{
                    plugins: 'lists link image table code help wordcount',
                    promotion: false,
                    branding: false,
                }"
            />
            <div class="flex flex-row content-center mt-4">
                <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
                <input type="checkbox" id="AcceptConditions" class="peer sr-only" />

                <span
                    class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
                ></span>

                <span
                    class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"
                ></span>
                </label>
                <p class="ml-4 mt-1">Show filled-in prompt to user</p>
            </div>
            <div class="flex flex-row content-center mt-4">
                <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
                <input type="checkbox" id="AcceptConditions" class="peer sr-only" />

                <span
                    class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
                ></span>

                <span
                    class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"
                ></span>
                </label>
                <p class="ml-4 mt-1">Show sections marked hidden to user</p>
            </div>
        </div>

        <p class="my-20" />

        <div class="flex flex-col justify-items-start">

            <h1 class="text-4xl py-8">
                Add followups to your <span class="text-pink-700">PRO</span> Prompt
            </h1>

            <input type="text" id="followup1" class="w-full my-2 rounded-md border-gray-200 px-2 py-2.5 pe-10 shadow-lg sm:text-sm"
                value="Rewrite the suggestions but with more energy and pizzazz" />
            <input type="text" id="followup1" class="w-full my-2 rounded-md border-gray-200 px-2 py-2.5 pe-10 shadow-lg sm:text-sm"
                value="Rewrite the suggestions with a more informal tone" />
            <input type="text" id="followup1" class="w-full my-2 rounded-md border-gray-200 px-2 py-2.5 pe-10 shadow-lg sm:text-sm"
                value="Rewrite the suggestions with a more formal tone" />
            <button type="button" class="btn-blue my-4 w-12 h-10">
                <PlusIcon />
            </button>
            <button type="button" class="btn-green my-4 py-2">Submit</button>
        </div>

        <p class="my-20" />
        <p class="my-20" />
        <p class="my-20" />
    </div>
</template>
