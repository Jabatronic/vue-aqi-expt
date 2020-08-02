<template>
  <div class="about">
    <h1>Get WAQI Data (Test)</h1>
    <input type="text" v-model="locationSearchInput" v-on:keyup="searchForStation" />
    <div
      v-for="(data, index) in stationSearchResult"
      :key="index"
    >
      <div @click="fetchData(data.uid)">{{ data.station.name }}</div>
    </div>
    <div v-if="isSearchSubmitted" class="message">
      <h2 v-if="warning">{{ warning }}</h2>
      <h2>{{ city }}</h2>
      <h2>{{ aqi }}</h2>
    </div>
    <GenCircles :iaqiData="iaqi"/>
  </div>
</template>

<script>
import GenCircles from '@/components/GenCircles.vue'

export default {
  name: 'WAQI_Test',
  components: {
    GenCircles
  },
  data () {
    return {
      city: '',
      locationSearchInput: '',
      stationSearchResult: {},
      isSearchSubmitted: false,
      aqi: '',
      iaqi: null,
      warning: ''
    }
  },
  methods: {
    submitSearch: function () {
      this.isSearchSubmitted = true
      // this.fetchData()
      this.searchForStation()
    },
    fetchData: function (uid) {
      this.isSearchSubmitted = true
      this.stationSearchResult = {}
      this.locationSearchInput = ''
      const apiUrl = 'https://api.waqi.info/feed'
      const authToken = '19c6276b13bc059b2f5811c5037638346d286d15'
      const station = uid

      const apiRequest = `${apiUrl}/@${station}/?token=${authToken}`

      this.$http.get(apiRequest)
        .then((result) => {
          this.city = result.data.data.city.name
          this.aqi = result.data.data.aqi
          this.iaqi = result.data.data.iaqi
          this.warning = ''
        }).catch((err) => {
          this.aqi = ''
          this.city = ''
          this.iaqi = null
          this.warning = 'there was a problem'
          console.warn('there was a problem!: ' + err.response)
        })
    },
    searchForStation: function () {
      if (this.locationSearchInput === '') {
        this.stationSearchResult = ''
      }
      const apiUrl = 'https://api.waqi.info/search'
      const authToken = '19c6276b13bc059b2f5811c5037638346d286d15'
      const keyWord = this.locationSearchInput

      const apiRequest = `${apiUrl}/?keyword=${keyWord}&token=${authToken}`

      this.$http.get(apiRequest)
        .then((result) => {
          this.stationSearchResult = result.data.data
        }).catch((err) => {
          console.warn(err.response)
        })
    }
  }
}
</script>
