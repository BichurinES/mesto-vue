<template>
  <ModalBox :onClose="onClose">
    <form :name="name" class="form" @submit.prevent="onSubmit" @input="checkValid" ref="form">
      <h2 class="title">{{ title }}</h2>

      <slot></slot>

      <input
        type="submit"
        class="submit-button link"
        :class="{
          [`submit-button_type_${name}`]: name,
          'submit-button_type_disabled': isLoading || !isFormValid,
        }"
        :value="isLoading ? 'Сохранение...' : buttonText"
        :disabled="isLoading || !isFormValid"
      />
    </form>
    <button
      type="button"
      name="close-button"
      class="close-button link"
      :class="{ [`close-button_type_${name}`]: name }"
      @click="onClose">
    </button>
  </ModalBox>
</template>

<script>
import ModalBox from '@/components/ModalBox.vue';
import { inputSelector } from '@/utils/constants';

export default {
  data() {
    return {
      validate: null,
    };
  },
  props: {
    onClose: {
      type: Function,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    onSubmit: {
      type: Function,
    },
  },
  components: {
    ModalBox,
  },
  methods: {
    checkValid({ target }) {
      if (!this.validate) {
        const inputs = Array.from(this.$refs.form.querySelectorAll(inputSelector));
        this.validate = {};
        inputs.forEach((input) => {
          this.validate[input.name] = input.validity.valid;
        });
      }
      const { name, validity } = target;
      this.validate[name] = validity.valid;
    },
  },
  computed: {
    isFormValid() {
      if (!this.validate) {
        return false;
      }

      const values = Object.values(this.validate);
      return !values.includes(false);
    },
  },
};
</script>

<style scoped>
.title {
  margin: 0;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
}

.submit-button {
  display: block;
  max-width: 358px;
  min-width: 200px;
  width: 62.5vw;
  height: 40px;
  margin: 35px auto 0;
  padding: 0;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  background-color: #000;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #fff;
}

.submit-button_type_disabled {
  background-color: #fff;
  color: #000;
  opacity: .2;
  border: 1px solid #000;
  box-sizing: border-box;
}

.submit-button_type_disabled:hover {
  background-color: inherit;
}

.submit-button_type_confirm-delete {
  margin-top: 30px;
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
  outline: none;
  background-color: transparent;
  border: 0;
}

.close-button_type_fullscreen-image {
  right: 10px;
  top: -30px;
}

@media screen and (min-width: 425px) {
  .title {
    font-size: 24px;
    line-height: 29px;
  }

  .submit-button {
    height: 50px;
    font-size: 18px;
    line-height: 22px;
    margin-top: 48px;
  }

  .submit-button_type_confirm-delete {
    margin-top: 38px;
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
