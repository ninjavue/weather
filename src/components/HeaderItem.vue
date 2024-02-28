<template>
  <header>
    <div class="container">
      <div class="header">
        <router-link to="/" class="header-logo">
          <img src="../assets/cloudy.png" alt="logo" />
          <div>Ob-havo</div>
        </router-link>
        <button class="header-right">
          <img src="../assets/uzbekistan.png" alt="uz" />
          <span>UZ</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/layout/header.scss";
</style>