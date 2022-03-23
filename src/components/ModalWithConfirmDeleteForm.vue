<template>
  <ModalWithForm
    name="confirm-delete"
    title="Вы уверены?"
    buttonText="Да"
    :onClose="onClose"
    :onSubmit="onSubmit"
    :isLoading="deleteCardRequest"
  >
  </ModalWithForm>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ModalWithForm from '@/components/ModalWithForm.vue';

export default {
  components: {
    ModalWithForm,
  },
  props: {
    onClose: {
      type: Function,
      required: true,
    },
    _id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(['deleteCard']),
    onSubmit() {
      this.deleteCard(this._id).then(() => this.onClose());
    },
  },
  computed: {
    ...mapState({
      deleteCardRequest: (state) => state.cards.deleteCardRequest,
    }),
  },
};
</script>
