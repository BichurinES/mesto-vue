<template>
  <header class="header">
    <router-link class="logo button" to="/mesto-vue"></router-link>
  </header>
</template>

<style scoped>
  .header {
    box-sizing: border-box;
    width: 100%;
    max-width: 880px;
    min-height: 56px;
    padding: 28px 27px 32px;
    border-bottom: 1px solid rgba(84, 84, 84, .7);
  }

  .logo {
    display: block;
    width: 103.74px;
    height: 24.4px;
    background-image: url('../assets/images/header__logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: 142px;
      height: 33px;
    }
  }

  @media screen and (min-width: 934px) {
    .header {
      padding: 45px 0 41px;
    }
  }
</style>
