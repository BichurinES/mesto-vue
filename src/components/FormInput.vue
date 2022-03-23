<template>
  <input
    v-bind="$attrs"
    class="form-field"
    :class="{ ['form-field_type_error']: !isValid }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-on:input="validInput"
    novalidate
    :disabled="isLoading"
  />
  <span class="error" :class="{ ['error_visible']: !isValid }">{{ errorMsg }}</span>
</template>

<script>
export default {
  data() {
    return {
      isValid: true,
      errorMsg: '',
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    modelValue: String,
  },
  methods: {
    validInput({ target }) {
      const { validity, validationMessage } = target;
      this.isValid = validity.valid;
      this.errorMsg = validationMessage;
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
  .form-field {
    display: block;
    width: 100%;
    padding-bottom: 8px;
    margin-top: 20px;
    outline: 0;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    font-family: inherit;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #000;
  }

  .form-field:first-child {
    margin-top: 0;
  }

  .form-field_type_error {
    border-bottom: 1px solid #ff0000;
    opacity: 1;
  }

  .error {
    display: none;
    margin-top: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #FF0000;
  }

  .error_visible {
    display: inline;
  }

  @media screen and (min-width: 425px) {
    .form-field {
      margin-top: 30px;
      font-size: 14px;
      line-height: 17px;
    }
  }
</style>
