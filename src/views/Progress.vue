<script setup>
import { ref } from 'vue'
import ProgressBar from '../components/ProgressBar.vue'
import Button from '../components/Button.vue'

const percent = ref(15)

const addPercent = () => {
  percent.value += 10
  if (percent.value > 100) {
    percent.value = 100
  }
}
</script>
<template>
  <h1>Progress Bar</h1>
  <div class="line line_block">
    <ProgressBar maxWidth="1000px" :percent="percent" color="success" />
    <Button label="add 10%" @click="addPercent" />
  </div>
</template>
