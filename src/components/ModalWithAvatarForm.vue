<template>
  <ModalWithForm
    name="edit-avatar"
    title="Обновить аватар"
    buttonText="Сохранить"
    :onClose="onClose"
    :onSubmit="onSubmit"
    :isLoading="user.changeAvatarRequest"
  >
    <FormFieldWrap>
      <FormInput
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
        v-model="avatar"
        :isLoading="user.changeAvatarRequest"
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
      avatar: '',
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
    ...mapActions(['changeAvatar']),
    onSubmit() {
      this.changeAvatar({ avatar: this.avatar }).then(() => this.onClose());
    },
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>
