<script setup>

import { CommandLineIcon } from '@heroicons/vue/24/outline';
import { TrophyIcon } from '@heroicons/vue/24/outline';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/outline';
import RobotPNG from '../images/robot1.png';

</script>

<template>

<section>
    <div class="container mx-auto max-w-screen-xl flex flex-col items-center justify-center px-16">
        <div class="flex flex-row space-x-2 w-full">
            <span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">ChatGPT</span>
            <span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">GPT-3.5</span>
            <span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">GPT-4</span>
        </div>

        <div class="text-4xl md:text-6xl font-display font-semibold text-blue-950">
            <p class="text-center leading-relaxed">
                <span class="text-pink-700">Branch out</span> with Chat Prompt PRO
            </p>
            <p class="text-center leading-relaxed text-3xl">
                For conversations as complex as your work
            </p>
        </div>
        <div class="my-8">
            <p class="my-4 text-lg text-blue-950">
                A more effective interface to ChatGPT for serious work
            </p>
        </div>
    </div>
</section>

<section class="bg-pink-100/50 text-gray-800 px-12 w-full">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
        <h2 class="text-3xl font-bold sm:text-4xl mb-2">The Problem</h2>
        <img
            alt="Art"
            :src="RobotPNG"
            class="w-40 shadow-lg float-right mx-4"
        />
        <p>
            Using ChatGPT gives you a glimpse of a potential future where
            conversational AI works with you as a partner and helps with all
            kinds of work. Then reality sets in as you start to use it for more
            than just toy examples. 
        </p>
        <p>
            <ul class="list-none mt-0 space-y-2">
                <li><span class="font-bold">Prompting</span> can be trickier than it appears. With trial and error you can develop powerful
                and effective prompts. Once you have the prompts you like using them over and over again takes some annoying copy and paste work.
                </li>
                <li><span class="font-bold">Context</span> is the previous conversation that is given to ChatGPT at each step of response. Building
                up a good context is crucial for ChatGPT to understand your domain, your problem, and what you want it to do. This might be either one
                large initial prompt or a series of back-and-forth interaction. For more realistic projects, keeping track of the context for
                multiple queries can be tricky. Conversations can grow out of control. Minor requests can side track an entire long conversation.
                </li>
            </ul>
        </p>
    </div>
</section>

<section class="bg-blue-100 text-gray-800 px-12 w-full">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
        <div class="max-w-screen-xl flex flex-row">

            <h2 class="text-3xl font-bold sm:text-4xl">Features</h2>

        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-12">

            <div class="flex flex-col items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <CommandLineIcon class="h-10 w-10" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">No coding? No problem!</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Sophisticated prompting and templating with graphical interface lets you get work done fast
                        with no coding needed.
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <ChatBubbleBottomCenterTextIcon class="h-10 w-10" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Maintain context, gain clarity</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Use the interface to build up a sophisticated context then re-use the context
                        for multiple queries. Change the context to update along with your project.
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-start gap-4">
                <span class="shrink-0 rounded-lg bg-blue-300 p-4">
                        <TrophyIcon class="h-10 w-10" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Save time, increase productivity</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Stop fighting with ChatGPT and start working like a team. Save state at every point so
                        you can get more done with less clicking and typing.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

</template>
