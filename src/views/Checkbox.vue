<script setup>
import { ref } from 'vue'
import Checkbox from '../components/Checkbox/Checkbox.vue'

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)
</script>

<template>
  <h1>Checkbox</h1>

    <h2>Checkbox Active</h2>
    {{ checkboxActive }}
    <div class="line">
    <Checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="like"
      v-model:checked="checkboxActive"
    />
  </div>

  <h2>Checkbox Disabled</h2>
    {{ checkboxDisabled }}
    <div class="line">
    <Checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="like"
      disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
</template>
