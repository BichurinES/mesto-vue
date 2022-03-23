<template>
  <section class="places page__places">
    <ul class="places__list" v-if="cards">
      <MainCardsItem v-for="card in cards" :key="card._id" :card="card" />
    </ul>
  </section>
</template>

<script>
import api from '../utils/api';
import MainCardsItem from './MainCardsItem.vue';

export default {
  data() {
    return {
      cards: null,
    };
  },
  mounted() {
    api.getInitialCards()
      .then((cards) => {
        this.cards = cards;
        return cards;
      })
      .catch((e) => console.log(e.message));
  },
  components: {
    MainCardsItem,
  },
};
</script>

<style>
  .places__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 282px);
    row-gap: 20px;
    column-gap: 17px;
    justify-content: center;
    max-width: 880px;
    padding: 0;
    margin: 0 19px 0 19px;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    .places__list {
      margin: 0 27px 0 27px;
    }
  }

  @media screen and (min-width: 934px) {
    .places__list {
      margin: 0 auto;
    }
  }
</style>
