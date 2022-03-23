<template>
  <li class="place">
    <img :src="card.link" :alt="card.name" class="place__image" />
    <div class="place__footer">
      <h2 class="place__title">{{ card.name }}</h2>
      <div class="place__like-container">
        <button
          type="button"
          name="like-button"
          class="place__like-button"
          :class="{ 'place__like-button_active': isLike }"
        ></button>
        <p class="place__like-count">{{ likes }}</p>
      </div>
    </div>
    <button
      type="button"
      name="trash-button"
      class="place__trash-button"
      v-if="isOwn"
    ></button>
  </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    card: Object,
  },
  computed: {
    ...mapState(['user']),
    likes() {
      return this.card.likes.length;
    },
    isLike() {
      return this.card.owner._id === this.user._id;
    },
    isOwn() {
      return this.likes > 0 && this.card.likes.find(({ _id }) => this.user._id === _id);
    },
  },
};
</script>

<style>
  .place {
    position: relative;
    background: #fff;
    color: #000;
    border-radius: 10px;
    overflow: hidden;
  }

  .place__image {
    display: block;
    width: 282px;
    height: 282px;
    object-fit: cover;
    cursor: pointer;
  }

  .place__footer {
    display: flex;
    align-items: center;
  }

  .place__like-container {
    margin-right: 18.24px;
    margin-left: auto;
  }

  .place__title {
    width: 190px;
    padding: 0;
    margin: 23px 0 24px 21px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  .place__like-button {
    width: 22px;
    height: 19px;
    padding: 0;
    background-image: url('../assets/images/places__like-button.svg');
    background-size: contain;
    background-repeat: no-repeat;
    outline: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: opacity .5s ease;
    transition: background-image .1s ease;
  }

  .place__like-button:hover {
    opacity: .5;
  }

  .place__like-button_active {
    background-image: url('../assets/images/places__like-button_active.svg');
    opacity: 1;
  }

  .place__like-count {
    margin: 0;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
  }

  .place__trash-button {
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
    outline: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: opacity .5s ease;
    transition: background-image .1s ease;
  }

  .place__trash-button:hover {
    opacity: .6;
  }

</style>
