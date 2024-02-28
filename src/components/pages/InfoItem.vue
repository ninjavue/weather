<template>
  <div class="infos">
    <h2>{{ infoData.name }} viloyati</h2>
    <div class="infos-date">
      Bugun,
      {{
        new Date(allData.dt * 1000).toLocaleString("en-us", {
          day: "numeric",
        })
      }}
      {{
        changeMonth(
          new Date(allData.dt * 1000).toLocaleString("en-us", {
            month: "long",
          })
        )
      }}
    </div>
    <div class="info">
      <h1>{{ Math.round(allData.temp) }}°C</h1>
      <img
        class="info-img"
        :src="`${
          allData.weather ? changeImg(allData.weather[0].main) : changeImg('')
        }`"
        alt="info-img"
      />
    </div>

    <div class="info-today">
      <div
        class="info-today-box"
        v-for="(item, index) of hourlyData"
        :key="index"
      >
        <div class="info-today-date">
          {{
            new Date(item.dt * 1000).toLocaleString("en-us", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })
          }}
        </div>
        <div class="info-today-grad">{{ Math.round(item.temp) }}°C</div>
        <img
          class="info-today-img"
          :src="`${changeImg(item.weather[0].main)}`"
          alt="img"
        />
      </div>
    </div>
    <div class="info-week">
      <div class="info-week-box" v-for="(w, index) of daysData" :key="index">
        <div class="info-week-day">
          {{
            changeWeek(
              new Date(w.dt * 1000).toLocaleString("en-us", {
                weekday: "long",
              })
            )
          }},
          {{
            new Date(w.dt * 1000).toLocaleString("en-us", {
              day: "numeric",
            })
          }}
        </div>
        <img
          class="info-week-img"
          :src="`${changeImg(w.weather[0].main)}`"
          alt="info-week-img"
        />
        <div class="info-week-grad">{{ Math.round(w.temp.day) }} °C</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoData: Object,
  },

  computed: {
    allData() {
      return this.$store.getters.allData;
    },
    daysData() {
      return this.$store.getters.daysData;
    },
    hourlyData() {
      return this.$store.getters.hourlyData;
    },
  },
  methods: {
    changeMonth(month) {
      switch (month) {
        case "January":
          return "Yanvar";
        case "February":
          return "Fevral";
        case "March":
          return "Mart";
        case "April":
          return "April";
        case "May":
          return "May";
        case "June":
          return "Iyun";
        case "July":
          return "Iyul";
        case "August":
          return "August";
        case "September":
          return "Sentabr";
        case "October":
          return "Oktabr";
        case "November":
          return "Noyabr";
        case "December":
          return "Dekabr";
        default:
          return "Month";
      }
    },
    changeWeek(week) {
      switch (week) {
        case "Monday":
          return "Dushanba";
        case "Tuesday":
          return "Seshanba";
        case "Wednesday":
          return "Chorshanba";
        case "Thursday":
          return "Payshanba";
        case "Friday":
          return "Juma";
        case "Saturday":
          return "Shanba";
        case "Sunday":
          return "Yakshanba";
        default:
          return "Week";
      }
    },
    changeImg(weather) {
      switch (weather) {
        case "Clear":
          return "./sun.png";
        case "Clouds":
          return "./cloudy2.png";
        case "Thunderstorm":
          return "./cloudy.png";
        case "Drizzle":
          return "./drizzle.png";
        case "Rain":
          return "./weather.png";
        case "Snow":
          return "./snow.png";
        case "Dust":
          return "./dust.png";
        case "Smoke":
          return "./smoke.png";
        case "Haze":
          return "./fog.png";
        case "Mist":
          return "./mist.png";
        default:
          return "./weather.png";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/components/info.scss";
</style>