<template>
  <div class="about">
    <h1>Axios Test</h1>
    <div
      v-for="user in users"
      :key="user.id"
    >
      <h2>{{ user.name }}</h2>
      <p></p>
    </div>
    <button @click="fetchUsers">Fetch Data!</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
        .then((result) => {
          this.users = result.data
        }).catch((err) => {
          console.warn('there was a problem!: ' + err.response.log)
        })
    }
  }
}
</script>
