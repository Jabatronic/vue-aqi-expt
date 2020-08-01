<template>
  <div class="about">
    <h1>Get WAQI Data (Test)</h1>
    <input type="text" v-model="locationSearchInput" v-on:keyup.enter="submitSearch" />
    <div v-if="isSearchSubmitted" class="message">
      <h2 v-if="warning">{{ warning }}</h2>
      <h2>{{ city }}</h2>
      <h2>{{ aqi }}</h2>
    </div>
    <!-- <button @click="fetchUsers">Fetch Data!</button> -->
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
      isSearchSubmitted: false,
      aqi: '',
      iaqi: null,
      warning: ''
    }
  },
  methods: {
    submitSearch: function () {
      this.isSearchSubmitted = true
      this.fetchData()
    },
    fetchData: function () {
      const apiUrl = 'https://api.waqi.info/feed'
      const authToken = '19c6276b13bc059b2f5811c5037638346d286d15'
      const station = this.locationSearchInput

      const apiRequest = `${apiUrl}/${station}/?token=${authToken}`

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
          console.warn('there was a problem!: ' + err.response.log)
        })
    }
  }
}
</script>
