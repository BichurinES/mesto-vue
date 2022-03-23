<template>
  <ModalWithForm
    name="edit-profile"
    title="Редактировать профиль"
    buttonText="Сохранить"
    :onClose="onClose"
    :onSubmit="onSubmit"
    :isLoading="user.changeProfileRequest"
  >
    <FormFieldWrap>
      <FormInput
        type="text"
        name="name"
        placeholder="Имя"
        minlength="2"
        maxlength="40"
        required
        v-model="name"
        :isLoading="user.changeProfileRequest"
      />
      <FormInput
        type="text"
        name="about"
        placeholder="О себе"
        minlength="2"
        maxlength="200"
        required
        v-model="about"
        :isLoading="user.changeProfileRequest"
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
      name: '',
      about: '',
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
    ...mapActions(['changeProfile']),
    onSubmit() {
      const { name, about } = this.userData;
      if (this.name !== name || this.about !== about) {
        this.changeProfile({ name: this.name, about: this.about })
          .then(() => this.onClose());
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      userData: (state) => state.user.userData,
    }),
  },
  mounted() {
    if (this.userData) {
      this.name = this.userData.name;
      this.about = this.userData.about;
    }
  },
};
</script>
