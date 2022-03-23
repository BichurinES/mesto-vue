<template>
  <ModalOverlay :onClose="onClose">
    <div class="container" :class="{ ['container_type_fullscreen-image']: isImage  }">
      <slot></slot>
      <button
        type="button"
        name="close-button"
        class="close-button button"
        :class="{
          [`close-button_type_${name}`]: name,
          'close-button_type_fullscreen-image': isImage,
        }"
        @click="onClose">
      </button>
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

  .close-button {
    position: absolute;
    right: -28px;
    top: -28px;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    padding: 0;
    background-image: url('../assets/images/popup__close-button.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .close-button_type_fullscreen-image {
    right: 0px;
    top: -40px;
  }

  @media screen and (min-width: 425px) {
    .container {
      padding: 34px 36px 37px;
    }

    .container_type_fullscreen-image {
      padding: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .close-button {
      right: -40px;
      top: -40px;
      width: 40px;
      height: 40px;
    }

    .close-button_type_fullscreen-image {
      right: -40px;
      top: -40px;
    }
  }
</style>
