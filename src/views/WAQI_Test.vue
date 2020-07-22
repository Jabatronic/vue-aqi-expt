<template>
  <div class="about">
    <h1>Get WAQI Data (Test)</h1>
    <h2>{{ city }}</h2>
    <h2>{{ aqi }}</h2>
    <div
      v-for="(value, name, index) in iaqi"
      :key="index"
    >
      {{ name }}: {{ value.v }}
    </div>
    <button @click="fetchUsers">Fetch Data!</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      city: '',
      aqi: '',
      iaqi: null

    }
  },
  methods: {
    fetchUsers: function () {
      const apiUrl = 'https://api.waqi.info/feed'
      const authToken = '19c6276b13bc059b2f5811c5037638346d286d15'
      const station = 'Bournemouth'

      const apiRequest = `${apiUrl}/${station}/?token=${authToken}`

      this.$http.get(apiRequest)
        .then((result) => {
          this.city = result.data.data.city.name
          this.aqi = result.data.data.aqi
          this.iaqi = result.data.data.iaqi
          console.log(typeof result.data.data.iaqi)
          console.log(this.iaqi)
          console.log(result.data.data)
        }).catch((err) => {
          console.warn('there was a problem!: ' + err.response.log)
        })
    }
  }
}
</script>
