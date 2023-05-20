<script setup>

import { BeakerIcon } from '@heroicons/vue/24/outline'
import { TrophyIcon } from '@heroicons/vue/24/outline'
import { TableCellsIcon } from '@heroicons/vue/24/outline'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
import { UsersIcon } from '@heroicons/vue/24/outline'
import { CreditCardIcon } from '@heroicons/vue/24/outline'
import { BookOpenIcon } from '@heroicons/vue/24/outline'
import { CurrencyDollarIcon } from '@heroicons/vue/24/outline'

</script>

<template>
    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Chat Prompt PRO
            </p>
        </div>
        <div class="my-8">
            <p class="my-4 text-lg text-gray-800">
                Unleash the power of AI for your business with PRO prompts.
            </p>
        </div>

<section class="bg-blue-100 text-gray-800 px-12 w-full">
  <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold sm:text-4xl">Features</h2>

      <p class="mt-4 text-gray-700">
         Motto
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
            Curated collection of amazing and working prompts that can start working for your business instantly.
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
            Every prompt includes demonstration examples showing what it can do.
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
            Join the community for free. Try out prompts immediately.
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
            no weekly token limits, and upgraded AI models
            (GPT-4).
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <span class="shrink-0 rounded-lg bg-blue-300 p-4">
            <CurrencyDollarIcon class="h-6 w-6" />
        </span>
        <div>
          <h2 class="text-lg font-bold">Publish Prompts</h2>
          <p class="mt-1 text-sm text-gray-700">
            Publish your own prompts for others, get paid when people use them.
            No programming required.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

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
