<script setup>
import Button from '../components/Button.vue'
</script>
<template>
  <h1 class="heading-1">Button</h1>
  <h2>Disabled</h2>
  <div class="line">
    <Button label="Primary" color="primary" disabled />
    <Button label="Second" color="second" disabled />
  </div>

  <h2>Colors</h2>
  <div class="line">
    <Button label="Primary" color="primary" />
    <Button label="Second" color="second" />
    <Button label="Success" color="success" />
    <Button label="Info" color="info" />
    <Button label="Warning" color="warning" />
    <Button label="Danger" color="danger" />
  </div>

  <h2>Rounded</h2>
  <div class="line">
    <Button label="Primary" color="primary" rounded />
    <Button label="Second" color="second" rounded />
    <Button label="Success" color="success" rounded />
    <Button label="Info" color="info" rounded />
    <Button label="Warning" color="warning" rounded />
    <Button label="Danger" color="danger" rounded />
  </div>

  <h2>Outlined</h2>
  <div class="line">
    <Button label="Primary" color="primary" outlined />
    <Button label="Second" color="second" outlined />
    <Button label="Success" color="success" outlined />
    <Button label="Info" color="info" outlined />
    <Button label="Warning" color="warning" outlined />
    <Button label="Danger" color="danger" outlined />
  </div>

  <h2>Icons</h2>
  <div class="line">
    <Button color="primary" icon="heart" />
    <Button color="second" icon="hand" outlined />
    <Button color="success" icon="address-book" />
    <Button color="info" icon="credit-card" />
    <Button color="warning" icon="lemon" />
    <Button color="danger" icon="hourglass" />
  </div>

  <h2>Size</h2>
  <div class="line">
    <Button label="Normal" />
    <Button label="Large" size="large"/>
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
