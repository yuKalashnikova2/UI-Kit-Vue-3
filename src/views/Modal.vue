<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
import Button from '../components/Button.vue'

const isShow = ref(false)
</script>

<template>
  <h1>Modal</h1>
  <h2>Hi there! I'm Modal. Push button show me!</h2>
  <Button label="Show modal" @click="isShow = !isShow"></Button>
  <Modal :show="isShow" @close="isShow = false">Some content is here</Modal>
</template>
