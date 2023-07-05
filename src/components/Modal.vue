<script setup>
import { Transition } from 'vue'
import Button from './Button.vue'

const props = defineProps(['show'])
const emits = defineEmits(['close'])
</script>

<template>
  <Transition>
    <div class="modal__overlay" v-if="show" @click.self="emits('close')">
      <div class="modal">
        <div class="modal__header">
          <Button label="&times;" @click="emits('close')"></Button>
        </div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 500ms ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.modal {
  background-color: #fff;
  width: 18rem;
  min-height: 300px;
  position: relative;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 15px 10px;
  word-break: break-all;
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      padding-right: 15px;
    }
    button {
      position: absolute;
      width: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem !important;
      right: 1rem;
      top: 2rem;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(156, 169, 229, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
