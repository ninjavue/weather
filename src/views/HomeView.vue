<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-8 col-md-12">
          <InfoItem :infoData="regionData" />
        </div>
        <div class="col-4 col-md-12">
          <RegionItem @sendDataToInfo="regionCompData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoItem from "@/components/pages/InfoItem.vue";
import RegionItem from "@/components/pages/RegionItem.vue";
export default {
  name: "HomeView",
  data() {
    return {
      regionData: {},
    };
  },
  components: {
    RegionItem,
    InfoItem,
  },
  methods: {
    regionCompData(data) {
      this.regionData = data;
    },
  },

  mounted() {},
};
</script>
