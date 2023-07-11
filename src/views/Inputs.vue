<script setup>
import { ref, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { minLength } from '@vuelidate/validators'

import Inputs from '../components/Inputs.vue'

const nameField = ref('')

const rules = computed(() => ({
    nameField: {
        minLength: minLength(3)
    }
}))

const v = useValidate(rules, {nameField})

</script>

<template>
    <h1>Inputs</h1>
    <form>  
        <Inputs 
            placeholder="Enter your name"
            name="name"
            label="Your name"
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors"
        />

    </form>
 
    {{ nameField }}
</template>