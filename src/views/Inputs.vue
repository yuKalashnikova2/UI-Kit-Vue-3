<script setup>
import { ref, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { helpers, minLength, email } from '@vuelidate/validators'

import Inputs from '../components/Inputs.vue'

const nameField = ref('')
const emailField = ref('')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Любой текст ошибки здесь`, minLength(3)),
  },
  emailField: {
    email: helpers.withMessage(`Вы ввели неверный email`, email),
  },
}))

const v = useValidate(rules, { nameField, emailField })
</script>

<template>
  <h1>Inputs</h1>
  <h2>Hi there! I'm input</h2>
  <form>
    <Inputs
      placeholder="Enter your name"
      name="name"
      label="Your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Inputs
      placeholder="Enter your email"
      name="email"
      label="Your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
  </form>
</template>
