<template>
  <li class="place">
    <img
      :src="card.link"
      :alt="card.name"
      class="image"
      @click="isImageModalOpen = true"
      @keydown="onKeydownEnter"
    />
    <div class="footer">
      <h2 class="title">{{ card.name }}</h2>
      <div class="like-container">
        <button
          type="button"
          name="like-button"
          class="like-button button"
          :class="{ 'like-button_active': isLike }"
          @click="onLikeBtnClick"
        ></button>
        <p class="like-count">{{ likes }}</p>
      </div>
    </div>
    <button
      type="button"
      name="trash-button"
      class="trash-button button"
      v-if="isOwn"
      @click="isConfirmDeleteFormOpen = true"
    ></button>
    <transition name="fade">
      <ModalWithConfirmDeleteForm
        v-if="isConfirmDeleteFormOpen"
        :onClose="onConfirmDeleteFormClose"
        :_id="this.card._id"
      />
    </transition>
    <transition name="fade">
      <ModalWithImage
        v-if="isImageModalOpen"
        :onClose="onImageModalClose"
        :title="this.card.name"
        :link="this.card.link"
      />
    </transition>
  </li>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ModalWithConfirmDeleteForm from '@/components/ModalWithConfirmDeleteForm.vue';
import ModalWithImage from '@/components/ModalWithImage.vue';

export default {
  data() {
    return {
      isConfirmDeleteFormOpen: false,
      isImageModalOpen: false,
    };
  },
  components: {
    ModalWithConfirmDeleteForm,
    ModalWithImage,
  },
  props: {
    card: Object,
  },
  methods: {
    ...mapActions(['deleteCard', 'changeLikeStatus']),
    onLikeBtnClick() {
      this.changeLikeStatus({ _id: this.card._id, like: !this.isLike });
    },
    onDeleteBtnClick() {
      this.deleteCard(this.card._id);
    },
    onConfirmDeleteFormClose() {
      this.isConfirmDeleteFormOpen = false;
    },
    onImageModalClose() {
      this.isImageModalOpen = false;
    },
    onKeydownEnter(e) {
      if (e.key === 'Enter') {
        this.isImageModalOpen = true;
      }
    },
  },
  computed: {
    ...mapState({
      user: ((state) => state.user.userData),
    }),
    likes() {
      return this.card.likes.length;
    },
    isLike() {
      return this.likes > 0 && this.card.likes.find(({ _id }) => this.user._id === _id);
    },
    isOwn() {
      return this.card.owner._id === this.user._id;
    },
  },
};
</script>

<style scoped>
.place {
  position: relative;
  background: #fff;
  color: #000;
  border-radius: 10px;
  overflow: hidden;
}

.image {
  display: block;
  width: 282px;
  height: 282px;
  object-fit: cover;
  cursor: pointer;
}

.footer {
  display: flex;
  align-items: center;
}

.like-container {
  margin-right: 18.24px;
  margin-left: auto;
}

.title {
  width: 190px;
  padding: 0;
  margin: 23px 0 24px 21px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
}

.like-button {
  width: 22px;
  height: 19px;
  padding: 0;
  background-image: url('../assets/images/places__like-button.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.like-button_active {
  background-image: url('../assets/images/places__like-button_active.svg');
  opacity: 1;
}

.like-count {
  margin: 0;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
}

.trash-button {
  position: absolute;
  z-index: 0;
  top: 18px;
  right: 15px;
  width: 18px;
  height: 19.3px;
  padding: 0;
  background-image: url('../assets/images/place__trash-button.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
