<template>
  <ModalWithForm
    name="add-place"
    title="Новое место"
    buttonText="Создать"
    :onClose="onClose"
    :onSubmit="onSubmit"
    :isLoading="addCardRequest"
  >
    <FormFieldWrap>
      <FormInput
        type="text"
        name="title"
        placeholder="Название"
        minlength="1"
        maxlength="30"
        required
        v-model="title"
        :isLoading="addCardRequest"
      />
      <FormInput
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        v-model="link"
        :isLoading="addCardRequest"
      />
    </FormFieldWrap>
  </ModalWithForm>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ModalWithForm from '@/components/ModalWithForm.vue';
import FormInput from '@/components/FormInput.vue';
import FormFieldWrap from '@/components/FormFieldWrap.vue';

export default {
  data() {
    return {
      title: '',
      link: '',
    };
  },
  components: {
    ModalWithForm,
    FormInput,
    FormFieldWrap,
  },
  props: {
    onClose: {
      type: Function,
      required: true,
    },
  },
  methods: {
    ...mapActions(['addCard']),
    onSubmit() {
      this.addCard({ name: this.title, link: this.link })
        .then(() => this.onClose());
    },
  },
  computed: {
    ...mapState({
      addCardRequest: (state) => state.cards.addCardRequest,
    }),
  },
};
</script>
