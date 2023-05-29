
import { createRouter, createWebHistory } from 'vue-router';

import Chat from './Chat.vue';
import Hero from './Hero.vue';
import NotFound from './NotFound.vue';



export const SERVER = (import.meta.env.MODE === 'development') ? 'http://localhost:5000' : location.origin;

export const routes = [
    { path: '/', component: Hero },
    { path: '/chat', component: Chat},
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
