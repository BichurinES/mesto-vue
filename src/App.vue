<template>
  <router-view/>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getUser', 'getCards']),
  },
  mounted() {
    this.getUser();
    this.getCards();
  },
};
</script>
<style>
body {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
}

#app {
  min-height: 100vh;
  min-width: 320px;
  font-family: 'Inter', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #000;
  color: #fff;
}

.button {
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 0;
  transition: opacity .5s ease;
}

.button:hover {
  opacity: .6;
}

.app__profile {
  margin-top: 42px;
  margin-bottom: 36px;
}

@media screen and (min-width: 768px) {
  .app__profile {
    margin-top: 40px;
    margin-bottom: 50px;
  }
}
</style>
