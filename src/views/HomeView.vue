<template>
  <AppHeader />
  <MainProfile />
  <MainCards />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import MainProfile from '@/components/MainProfile.vue';
import MainCards from '@/components/MainCards.vue';

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    MainProfile,
    MainCards,
  },
};
</script>
