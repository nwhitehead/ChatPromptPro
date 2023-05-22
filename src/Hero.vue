<script setup>

import { BeakerIcon } from '@heroicons/vue/24/outline'
import { TrophyIcon } from '@heroicons/vue/24/outline'
import { TableCellsIcon } from '@heroicons/vue/24/outline'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
import { UsersIcon } from '@heroicons/vue/24/outline'
import { CreditCardIcon } from '@heroicons/vue/24/outline'
import { BookOpenIcon } from '@heroicons/vue/24/outline'
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'

</script>

<template>
    <div class="flex flex-col items-center justify-center px-16 container mx-auto max-w-screen-xl">
        <div class="text-4xl md:text-6xl font-display font-semibold text-blue-950">
            <p class="text-center leading-relaxed">
                Write your prompt, <span class="text-pink-700">create your own ChatGPT</span>, add it to your website
            </p>
        </div>
        <div class="my-8">
            <p class="my-4 text-lg text-blue-950">
                Create custom AI tools to use anywhere. No coding required.
            </p>
        </div>
    </div>

<section class="border-t px-12 w-full">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto flex flex-row space-x-4 md:space-x-16">
        <div class="max-w-xl flex-1">
            <img
                alt="Art"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-full shadow-lg"
            />
            <h2 class="text-3xl font-bold sm:text-4xl">
                1
            </h2>
        </div>
        <div class="max-w-xl flex-1">
            <img
                alt="Art"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-full shadow-lg"
            />
            <h2 class="text-3xl font-bold sm:text-4xl">
                2
            </h2>
        </div>
        <div class="max-w-xl flex-1">
            <img
                alt="Art"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-full shadow-lg"
            />
            <h2 class="text-3xl font-bold sm:text-4xl">
                3
            </h2>
        </div>
    </div>
</section>

<section class="bg-blue-100 text-gray-800 px-12 w-full">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
        <div class="max-w-xl">
            <h2 class="text-3xl font-bold sm:text-4xl">Features</h2>

            <p class="mt-4 text-gray-700">
                 Unleash the power of AI.
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
                        Curated collection of amazing and working prompts to get you started instantly.
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
                        Every pre-made prompt includes demonstration examples showing what it can do.
                        Pick choices from dropdown menus and see what happens.
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
                        No complicated setup or copy/paste needed.
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
                        New users get FREE tokens.
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <CreditCardIcon class="h-6 w-6" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Premium Accounts</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Paid accounts have access to premium-only prompts,
                        large token limits, and upgraded AI models
                        (GPT-4). Publish your prompt tool with your own branding.
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
                        Publish your own prompts as standalone AI tools. Share as a link,
                        embed into your site, or integrate the API.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

    <div class="flex flex-col items-center justify-center px-16 w-full">
        <div class="my-8">
            <p>
                Using this site means agreeing to the
                <router-link to="/terms" class="text-blue-700 hover:text-blue-500">
                    Terms of Service.
                </router-link>
            </p>
        </div>
    </div>
</template>
