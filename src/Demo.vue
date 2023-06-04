<script setup>

import Node from './Node.vue';

</script>

<template>

<section class="px-12 w-full bg-grid">
    <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto">
        <div class="h-[800px;]">
            <Node :x="200" :y="200" />
        </div>
    </div>
</section>

</template>
