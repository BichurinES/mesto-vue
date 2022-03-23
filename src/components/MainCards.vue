<template>
  <section class="places">
    <ul class="list" v-if="cardsData">
      <MainCardsItem v-for="card in cardsData" :key="card._id" :card="card" />
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import MainCardsItem from './MainCard.vue';

export default {
  computed: {
    ...mapState({
      card: (state) => state.card,
      cardsData: (state) => state.cards.cardsData,
    }),
  },
  components: {
    MainCardsItem,
  },
};
</script>

<style scoped>
  .places {
    max-width: 880px;
    width: 100%;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 282px);
    row-gap: 20px;
    column-gap: 17px;
    justify-content: center;
    padding: 0;
    margin: 0 19px 0 19px;
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    .list {
      margin: 0 27px 0 27px;
    }
  }

  @media screen and (min-width: 934px) {
    .list {
      margin: 0 auto;
    }
  }
</style>
