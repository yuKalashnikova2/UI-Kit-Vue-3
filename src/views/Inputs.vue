<script setup>
import { ref, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { helpers, minLength, email, sameAs } from '@vuelidate/validators'

import Inputs from '../components/Inputs.vue'
import Button from '../components/Button.vue'


const nameField = ref('')
const emailField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Любой текст ошибки здесь`, minLength(3)),
  },
  emailField: {
    email: helpers.withMessage(`Вы ввели неверный email`, email),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      `Пароли не совпадают`,
      sameAs(passwordField.value)
    ),
  },
}))

const v = useValidate(rules, { nameField, emailField, confirmPasswordField })

const submitForm = () => {
    v.value.$touch()
    if(v.value.$error) return
    alert('Form submitted')
}
</script>

<template>
  <h1>Inputs</h1>
  <h2>Hi there! I'm input</h2>
  <form @submit.prevent="submitForm">
    <Inputs
      type="text"
      placeholder="Enter your name"
      name="name"
      label="Your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Inputs
      type="email"
      placeholder="Enter your email"
      name="email"
      label="Your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Inputs
      type="password"
      placeholder="Enter your password"
      name="password"
      label="Your password"
      v-model:value="passwordField"
      :error="v.emailField.$errors"
    />
    <Inputs
      type="password"
      placeholder="Confirm your password"
      name="confirmPasswordField"
      label="Confirm your password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
    />
    <Button label="Submit" color="info" />

  </form>
</template>
