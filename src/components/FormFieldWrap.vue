<template>
  <fieldset className="field-wrap">
    <slot></slot>
  </fieldset>
</template>

<style>
.field-wrap {
  border: none;
  padding: 0;
  margin: 30px 0 0;
}

@media screen and (min-width: 425px) {
  .field-wrap {
    margin-top: 48px;
  }
}
</style>
