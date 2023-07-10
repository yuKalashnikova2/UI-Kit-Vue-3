<script setup>
        const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        group: {
            type: Boolean,
            default: false
    }
    })

    const emit = defineEmits(['update:checkedValue'])

    const handleChecked = (event) => {
        emit('update:checkedValue', event.target.value)

        console.log(event.target.checked)
    }
</script>

<template>

<input
    class="radiobutton"
    type="radio"
    :name="name"
    :id="id"
    :value="value"
    :checked="checked"
    :disabled="disabled"
    @input="handleChecked($event)"
 />

 <label :for="id">{{label}}</label>

</template>

<style lang="scss">
    .radiobutton {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  & + label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 6px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 50%;
  }
  &:checked + label::before {
    border-color: var(--primary);
    background-color: var(--primary);
    background-image: url("https://emojinarium.com/img/apple/white-circle_26aa.png");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--primary-hover);
  }
  &:not(:disabled):active + label::before {
    background-color: var(--primary);
    border: 1px solid #ECEBED;
  }
  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }
  &:focus:not(:checked) + label::before {
    border-color: var(--primary);
  }
  &:disabled + label::before {
    background-color: #e9ecef;
    border: 1px solid #ECEBED;
    background-image: url("https://emojinarium.com/img/apple/white-circle_26aa.png");
  }
}
</style>