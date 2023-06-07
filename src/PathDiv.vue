<script setup>

// This component is a div that has optional path lines connecting the sides.
// Size can be set by user of component in classes or styles
// Drawing style is orthogonal lines from sides to center
const props = defineProps(['connect', 'color', 'thickness']);
// connect is array of choices from ['l', 'r', 't', 'b']
// Each choice draws a line from that side to center
// color:string is hex color like '#ff00ff' (default is black)
// thickness:string is css width like '2px' or '10%' (default is 1px)

// Start with dict of styles for background images
// Extend existing dict with new details from extend argument
function concatenateStyle(start, extend) {
    for (const [key, value] of Object.entries(extend)) {
        if (start[key] === undefined) {
            start[key] = value;
        } else {
            start[key] += `, ${value}`;
        }
    }
    return start;
}

function computedStyle() {
    const color = props.color || '#000';
    const thickness = props.thickness || '2px';
    if (props.connect.length === 0) {
        return {};
    }
    // Start with dot in middle (to connect corners)
    let result = {
        'background-image': `linear-gradient(${color}, ${color})`,
        'background-repeat': 'no-repeat',
        'background-size': `${thickness} ${thickness}`,
        'background-position': 'center center',
    };
    // Define four connectors
    const left = {
        'background-image': `linear-gradient(${color}, ${color})`,
        'background-repeat': 'no-repeat',
        'background-size': `50% ${thickness}`,
        'background-position': '0 center',
    };
    const right = {
        'background-image': `linear-gradient(${color}, ${color})`,
        'background-repeat': 'no-repeat',
        'background-size': `50% ${thickness}`,
        'background-position': '100% center',
    };
    const top = {
        'background-image': `linear-gradient(${color}, ${color})`,
        'background-repeat': 'no-repeat',
        'background-size': `${thickness} 50%`,
        'background-position': 'center 0',
    };
    const bottom = {
        'background-image': `linear-gradient(${color}, ${color})`,
        'background-repeat': 'no-repeat',
        'background-size': `${thickness} 50%`,
        'background-position': 'center 100%',
    };
    // Concatenate connectors to result
    for (const value of props.connect) {
        if (value === 'l') { concatenateStyle(result, left); }
        if (value === 'r') { concatenateStyle(result, right); }
        if (value === 't') { concatenateStyle(result, top); }
        if (value === 'b') { concatenateStyle(result, bottom); }
    }
    return result;
}

</script>

<template>

<div :style="computedStyle()">
</div>

</template>
