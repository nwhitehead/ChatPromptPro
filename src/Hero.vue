<script setup>

import { BeakerIcon } from '@heroicons/vue/24/outline'
import { TrophyIcon } from '@heroicons/vue/24/outline'
import { TableCellsIcon } from '@heroicons/vue/24/outline'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
import { UsersIcon } from '@heroicons/vue/24/outline'
import { CreditCardIcon } from '@heroicons/vue/24/outline'
import { BookOpenIcon } from '@heroicons/vue/24/outline'
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import { KeyIcon } from '@heroicons/vue/24/outline'

</script>

<template>

<section>
    <div class="flex flex-col items-center justify-center px-16 container mx-auto max-w-screen-xl">
        <div class="text-4xl md:text-6xl font-display font-semibold text-blue-950">
            <p class="text-center leading-relaxed">
                <span class="text-pink-700">Branch out</span> with Chat Prompt PRO
            </p>
            <p class="text-center leading-relaxed text-3xl">
                For conversations as complex as your business
            </p>
        </div>
        <div class="my-8">
            <p class="my-4 text-lg text-blue-950">
                A more effective interface to ChatGPT for serious work
            </p>
        </div>
    </div>
</section>

<section class="bg-blue-100 text-gray-800 px-12 w-full">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
        <div class="max-w-xl flex flex-row">
            <!-- <img
                alt="Art"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-40 shadow-lg"
            /> -->

            <h2 class="text-3xl font-bold sm:text-4xl">Features</h2>

            <p class="mt-4 text-gray-700">
            </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <TrophyIcon class="h-6 w-6" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">High Quality</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Curated collection of amazing and working prompts to inspire you and get you started instantly.
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <InformationCircleIcon class="h-6 w-6" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Examples</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Add demonstration examples showing what your prompt can do.
                        Users pick choices from dropdown menus and see what happens.
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <TableCellsIcon class="h-6 w-6" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Easy Interface</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Easy to use right on the webpage. Fill in your text and click to generate.
                        No complicated setup or coding needed.
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <UsersIcon class="h-6 w-6" />
                </span>

                <div>
                    <h2 class="text-lg font-bold">Free sign up</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Join the community for free. Try out prompts and create your own variations with a click.
                        New users get limited FREE tokens to power their prompts.
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <KeyIcon class="h-6 w-6" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Private Internals</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Expose exactly the parts of your prompt that you want.
                        Users see what you choose.
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <PaperAirplaneIcon class="h-6 w-6" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Publish</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Publish your own prompts as standalone AI tools. Share as a link or
                        embed direclty into your site.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

</template>
