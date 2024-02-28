<template>
  <span v-if="isLoading" class="loading">
    <img src="./assets/loading.gif" alt="" />
  </span>
  <main v-show="!isLoading">
    <HeaderItem />
    <router-view />
  </main>
</template>

<script>
import HeaderItem from "./components/HeaderItem.vue";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    HeaderItem,
  },
  methods: {
    openFullScreen() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
  mounted() {
    document.title = "Ob-havo";
    this.openFullScreen();
  },
};
</script>


<style lang="scss">
@import "./styles/app.scss";
</style>