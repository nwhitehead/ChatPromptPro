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

<section>
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
</section>

<section class="border-t px-12 w-full">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto flex flex-row space-x-4 md:space-x-16">
        <div class="max-w-xl flex-1">
            <img
                alt="Art"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-full shadow-lg"
            />
            <h2 class="text-xl font-bold mt-6">
                1. <span class="text-sky-600">Write</span> your prompt
            </h2>
            <p class="mt-2">
                Use regular text and highlight parts that are inputs.
            </p>
        </div>
        <div class="max-w-xl flex-1">
            <img
                alt="Art"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-full shadow-lg"
            />
            <h2 class="text-xl font-bold mt-6">
                2. <span class="text-sky-600">Create</span> your AI tool
            </h2>
            <p class="mt-2">
                Customize how it looks and what is shown to users. All powered by ChatGPT.
            </p>
        </div>
        <div class="max-w-xl flex-1">
            <img
                alt="Art"
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="w-full shadow-lg"
            />
            <h2 class="text-xl font-bold mt-6">
                3. <span class="text-sky-600">Share</span> it anywhere
            </h2>
            <p class="mt-2">
                Share a public link or embed directly on your site.
            </p>
        </div>
    </div>
</section>

<section class="bg-blue-100 text-gray-800 px-12 w-full">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
        <div class="max-w-xl">
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
                        <CreditCardIcon class="h-6 w-6" />
                </span>
                <div>
                    <h2 class="text-lg font-bold">Premium Accounts</h2>
                    <p class="mt-1 text-sm text-gray-700">
                        Paid accounts have access to the full prompt library,
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
                        Publish your own prompts as standalone AI tools. Share as a link or
                        embed direclty into your site.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p class="mb-5 text-gray-500 sm:text-xl dark:text-gray-400">
            Unlock the potential of AI for your business.
          </p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Try it out and see how AI can help you now.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">FREE</span>
                  <span class="text-gray-500 dark:text-gray-400">(forever)</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Create 1 prompt</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Use prompts 50 times / month</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Chat Prompt PRO branding</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Online support on discussion pages</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Share with public link or embed code</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Hobby</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use or small teams & for your next project.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$19</span>
                  <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400>/month</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Create 10 prompts</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Use prompts 1,000 times / month</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Publish with your own branding</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium email support in addition to online support</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Share with public link, embed code, and platform plugins</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Pro</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for serious companies .</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$399</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Create 100 prompts</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Use prompts 10,000 times / month</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Publish with your own branding</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Priority email support</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Share with public link, embed code, and platform plugins</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Fully customizable code</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Run backend API interface server on your hardware</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
      </div>
  </div>
</section>

</template>
