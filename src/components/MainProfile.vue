<template>
  <section class="profile app__profile">
    <button
      class="avatar"
      :style="avatarStyle"
      @click="isAvatarFormOpen = true"
    ></button>
    <div class="info">
      <div class="title-wrapper">
        <h1 class="title">{{ name }}</h1>
        <button
          type="button"
          name="edit-button"
          class="edit-button button"
          @click="isEditFormOpen = true"
        ></button>
      </div>
      <p class="subtitle">{{ about }}</p>
    </div>
    <button
      type="button"
      name="add-button"
      class="add-button button"
      @click="isAddCardFormOpen = true"
    ></button>
    <teleport to="#vue-modals">
      <transition name="fade">
        <ModalWithEditForm v-if="isEditFormOpen" :onClose="onEditFormClose" />
      </transition>
      <transition name="fade">
        <ModalWithAvatarForm v-if="isAvatarFormOpen" :onClose="onAvatarFormClose" />
      </transition>
      <transition name="fade">
        <ModalWithAddCardForm v-if="isAddCardFormOpen" :onClose="onAddCardFormClose" />
      </transition>
    </teleport>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import ModalWithEditForm from '@/components/ModalWithEditForm.vue';
import ModalWithAvatarForm from '@/components/ModalWithAvatarForm.vue';
import ModalWithAddCardForm from '@/components/ModalWithAddCardForm.vue';

export default {
  data() {
    return {
      isEditFormOpen: false,
      isAvatarFormOpen: false,
      isAddCardFormOpen: false,
    };
  },
  methods: {
    onEditFormClose() {
      this.isEditFormOpen = false;
    },
    onAvatarFormClose() {
      this.isAvatarFormOpen = false;
    },
    onAddCardFormClose() {
      this.isAddCardFormOpen = false;
    },
  },
  components: {
    ModalWithEditForm,
    ModalWithAvatarForm,
    ModalWithAddCardForm,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      userData: (state) => state.user.userData,
    }),
    name() {
      return this.userData ? this.userData.name : 'Жак-ив-Кусто';
    },
    about() {
      return this.userData ? this.userData.about : 'Исследователь';
    },
    avatar() {
      return this.userData && this.userData.avatar;
    },
    avatarStyle() {
      return this.avatar ? { backgroundImage: `url('${this.avatar}')` } : {};
    },
  },
};
</script>

<style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    max-width: 880px;
    width: 88.125%;
    text-align: center;
  }

  .avatar {
    position: relative;
    display: block;
    z-index: 0;
    width: 120px;
    height: 120px;
    border: 0;
    outline: none;
    border-radius: 50%;
    background-image: url('../assets/images/profile__avatar.jpeg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .avatar::before {
    content:'';
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0;
    transition: opacity .5s ease;
  }

  .avatar:hover::before {
    opacity: .8;
    background-image: url('../assets/images/profile__avatar-editor.svg');
    background-position: center;
    background-repeat: no-repeat;
  }

  .title-wrapper {
    display: flex;
    align-items: baseline;
    padding-left: 27px;
  }

  .title {
    margin: 27px auto 0;
    max-width: 189px;
    color: #fff;
    font-size: 27px;
    font-weight: 500;
    line-height: 33px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .edit-button {
    margin-left: 10px;
    width: 18px;
    height: 18px;
    padding: 0;
    background-image: url('../assets/images/profile__edit-button.svg');
    background-size: contain;
  }

  .subtitle {
    padding: 0;
    margin: 5px auto 0;
    max-width: 189px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .add-button {
    margin-top: 36px;
    width: 100%;
    height: 50px;
    padding: 0;
    background-image: url('../assets/images/profile__add-button.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 16px;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 2px;
  }

  @media screen and (min-width: 425px) {
    .profile {
      flex-direction: row;
      text-align: left;
      width: 375px;
    }

    .avatar {
      margin-right: 30px;
    }

    .title-wrapper {
      padding-left: 0;
    }

    .title {
      margin: 0;
    }

    .subtitle {
      margin: 5px 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    .profile {
      width: 100%;
    }

    .avatar {
      margin-left: 27px;
    }

    .title {
      font-size: 42px;
      line-height: 48px;
      max-width: 450px;
    }

    .edit-button {
      margin-left: 18px;
      width: 24px;
      height: 24px;
    }

    .subtitle {
      max-width: 400px;
      font-size: 18px;
      line-height: 22px;
    }

    .add-button {
      width: 150px;
      background-size: 22px 22px;
      margin-left: auto;
      margin-right: 27px;
    }
  }

  @media screen and (min-width: 934px) {
    .avatar {
      margin-left: 0;
    }

    .add-button {
      margin-right: 0;
    }
  }
</style>
