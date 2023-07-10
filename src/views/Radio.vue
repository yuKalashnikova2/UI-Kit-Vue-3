<script setup>
import { ref } from 'vue'
import Radio from '../components/Radio.vue'

const groceryList = ref([
    {name: 'Bread', id: 'g1'},
    {name: 'Banana', id: 'g2'},
    {name: 'Lemon', id: 'g3'},
    {name: 'Salmon', id: 'g4'},
])

const selectedGrocery = ref('')

const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>
<template>
    <h1>Radio button</h1>
    <h2>Grocery List</h2>
    <div class="line line_block"> 
        <p>Selected Grocery: {{ selectedGrocery }}</p>

        <div v-for="grocery in groceryList" :key="grocery.id">
            <Radio 
            :value="grocery.name"
            :label="grocery.name"
            :id="grocery.id"
            name="grocery"
            v-model:checked-value="selectedGrocery"
            />
        </div>
    </div>

    <div class="line">
    <Radio
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="RadiobuttonDisabled"
      name="RadiobuttonDisabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"/>
  </div>
    
</template>