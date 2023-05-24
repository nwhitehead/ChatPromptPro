
import { createRouter, createWebHistory } from 'vue-router';

import Chat from './Chat.vue';
import Hero from './Hero.vue';
import Demo from './Demo.vue';
import NotFound from './NotFound.vue';



export const SERVER = (import.meta.env.MODE === 'development') ? 'http://localhost' : location.origin;
export const GOOGLE_PROJECT_ID="610703108422-bnh8qtob09pm06c9sb0nties8g9rn3i9.apps.googleusercontent.com";

export const routes = [
    { path: '/', component: Hero },
    { path: '/chat', component: Chat},
    { path: '/demo', component: Demo },
    { path: '/:pathMatch(.*)', component: NotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

let uuid = 0;

export function generateUUID() {
    uuid++;
    return uuid.toString();
}
