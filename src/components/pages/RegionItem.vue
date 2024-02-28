<template>
  <div class="regions mobile" @click="toggle = true">
    <div class="regions-title dn">{{ title }} viloyati</div>
    <i class="fa-solid fa-chevron-down"></i>
  </div>
  <div :class="`regions ${toggle ? 'show' : ''}`">
    <div class="regions-title">Hududlar</div>
    <button @click="toggle = false">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <div
      v-for="item of regions"
      :key="item.id"
      @click="checkHandle(item.id)"
      :class="`region ${id == item.id ? 'active' : ''}`"
    >
      <div class="region-title">{{ item.name }}</div>
      <div class="region-check">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      title: "",
      toggle: false,
    };
  },
  computed: {
    regions() {
      return this.$store.getters.regions;
    },
  },

  methods: {
    checkHandle(id) {
      this.id = id;
      this.regions.map((item) => {
        if (id == item.id) {
          this.title = item.name;
          document.title = `${item.name} viloyatidagi ob-havo | Ob-havo.uz`;
          this.$store.dispatch("getTemp", item.regionKey);
          this.$emit("sendDataToInfo", item);
          this.toggle = false;
        }
      });
    },
  },
  mounted() {
    this.checkHandle(this.id);
    this.$store.dispatch("getTemp", "tashkent");
  },
};
</script>

<style lang="scss">
@import "../../styles/components/region.scss";
</style>