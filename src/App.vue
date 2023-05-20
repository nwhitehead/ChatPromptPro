<script setup>

import { computed, reactive, ref, onMounted, watch } from 'vue';
import { GOOGLE_PROJECT_ID } from './config.js';

const authenticated = ref(null);
let gis_initialized = false;

onMounted(async () => {
    window.addEventListener("load", () => {
        google.accounts.id.initialize({
            client_id: GOOGLE_PROJECT_ID,
            callback: async (response) => {
                const resp = await authenticateWithServer(response.credential);
                authenticated.value = await checkIfAuthenticated();
            },
        });
        gis_initialized = true;
        google.accounts.id.renderButton(
            document.getElementById("googleButton"),
            {
                theme: "outline",
                size: "large",
            }
        );
    });
    authenticated.value = await checkIfAuthenticated();
});

watch(authenticated, (value) => {
    if (value) {
        // Update anything from server...
    } else {
        // If value turned to false, render the Google button directly (e.g. on logout)
        if (gis_initialized) {
            google.accounts.id.renderButton(
                document.getElementById("googleButton"),
                {
                    theme: "outline",
                    size: "large",
                }
            );
        }
    }
});

// Google GIS scripts need the appAuthenticate callback to be in global window scope
window.appAuthenticate = (arg) => {
    token.value = arg.credential;
    updateConversationsFromServer();
}

</script>

<template>
    <div class="w-full absolute top-0 bg-white">
        <div class="max-w-screen-xl mx-5 xl:mx-auto flex justify-between items-center h-16 min-w-[350px]">
            <div class="flex flex-row items-center">
                <router-link to="/" class="text-2xl font-bold flex flex-row px-4">
                    <img src="/images/logo.svg" width="32" height="32" class="mr-2">
                    <span class="hidden md:block">Chat Prompt PRO</span>
                </router-link>
                <router-link to="/browse" class="px-4">Browse</router-link>
                <router-link to="/doc" class="px-4">Docs</router-link>
                <router-link to="/support.html" class="px-4">Support</router-link>
                <router-link to="/privacy.html" class="px-4">Privacy</router-link>
            </div>

            <div v-show="!authenticated" id="googleButton" class="my-4"></div>

        </div>
    </div>

    <div class="min-w-[300px] pt-16 w-full">
        <div>
            <router-view
                :authenticated="authenticated"
            >
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
