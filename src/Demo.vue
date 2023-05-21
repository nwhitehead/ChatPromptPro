<script setup>
import Dropdown from './Dropdown.vue';

</script>

<template>
    <div class="flex flex-col items-center justify-center pt-12 w-full">
        <div class="text-5xl md:text-7xl font-display font-semibold text-gray-800">
            <p>
                Demo Pages
            </p>
            <Dropdown :label="'Theme'" :items="['Fairy tale', 'Love lost']" />
        </div>
    </div>
</template>
