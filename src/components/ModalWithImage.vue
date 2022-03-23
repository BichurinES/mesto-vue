<template>
  <ModalBox :onClose="onClose" :isImage="true">
    <figure class="figure">
      <img :src="link" :alt="title" class="image" />
      <figcaption class="image-caption">{{ title }}</figcaption>
    </figure>
  </ModalBox>
</template>

<script>
import ModalBox from '@/components/ModalBox.vue';

export default {
  props: {
    onClose: {
      type: Function,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    ModalBox,
  },
};
</script>

<style scoped>
  .figure {
    margin: 0;
    font-size: 0;
  }

  .image {
    display: block;
    max-width: 75vw;
    max-height: 75vh;
    min-width: 240px;
    object-fit: contain;
  }

  .image-caption {
    margin-top: 13px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .image-caption {
      margin-top: 10px;
    }
  }
</style>
