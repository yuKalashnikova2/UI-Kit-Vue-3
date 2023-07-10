<script setup>
import { ref } from 'vue'
import Inputs from '../components/Inputs.vue'

const nameField = ref('')
</script>

<template>
    <h1>Inputs</h1>
    <Inputs 
    placeholder="Enter your name"
    name="name"
    label="Your name"
    v-model:value="nameField"
    />
    {{ nameField }}
</template>