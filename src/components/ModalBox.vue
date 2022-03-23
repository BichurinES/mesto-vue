<template>
  <ModalOverlay :onClose="onClose">
    <div class="container" :class="{ ['container_type_fullscreen-image']: isImage  }">
      <slot></slot>
    </div>
  </ModalOverlay>
</template>

<script>
import ModalOverlay from '@/components/ModalOverlay.vue';

export default {
  props: {
    isImage: Boolean,
    onClose: {
      type: Function,
      required: true,
    },
  },
  components: {
    ModalOverlay,
  },
};
</script>

<style scoped>
  .container {
    position: relative;
    z-index: 10;
    max-width: 430px;
    min-width: 240px;
    width: 75%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 30px 20px;
    background-color: #fff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }

  @media screen and (min-width: 425px) {
    .container {
      padding: 34px 36px 37px;
    }
  }

  .container_type_fullscreen-image {
    display: flex;
    justify-content: center;
    max-width: 75vw;
    min-width: 320px;
    width: auto;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
  }
</style>
