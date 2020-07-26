<template>
  <div>
    <!-- Content -->
    <div
      v-for="(value, name, index) in big5filter(iaqiData)"
      :key="index"
    >
      {{ name }}: {{ value.v }}
    </div>
    <svg viewBox="-50 -50 100 100">
      <circle
        v-for="(value, name, index) in big5filter(iaqiData)"
        :key="index"
        :fill="getColour(name, value.v)"
        stroke="white"
        stroke-width=".1"
        cx="0" cy="0"
        :r="50 - (index * 10)"
      >
      {{ name }}
      </circle>
    </svg>
  </div>
</template>

<script>
/**
 * Define index boundaries for each polutant
 */
const aqBoundaries = {
  o3: {
    low: [33, 66, 100],
    moderate: [120, 140, 160],
    high: [187, 213, 240],
    v_high: [240]
  },
  no2: {
    low: [67, 134, 200],
    moderate: [267, 334, 400],
    high: [467, 534, 600],
    v_high: [601]
  },
  so2: {
    low: [88, 177, 266],
    moderate: [354, 443, 532],
    high: [710, 887, 1064],
    v_high: [1065]
  }
}

/**
 * Define colours for each boundary
 */
const boundaryColors = {
  low: '#33CE00',
  moderate: '#FF9A00',
  high: '#990002',
  v_high: '#CF31FF'
}

export default {
  name: 'GenCircles',
  props: {
    iaqiData: Object
  },
  methods: {
    big5filter (iaqiData) {
      const big5keys = Object.keys(aqBoundaries)
      const big5obj = {}
      for (const data in iaqiData) {
        big5keys.forEach((k, i) => {
          if (k === data) {
            big5obj[k] = iaqiData[k]
          }
        })
      }
      return big5obj
    },
    getColour (name, value) {
      if (name in aqBoundaries) {
        for (const boundary in aqBoundaries[name]) {
          const boundaryIndex = aqBoundaries[name][boundary]
          const boundaryMax = Math.max(...boundaryIndex)
          if (value <= boundaryMax) {
            return boundaryColors[boundary]
          }
        }
      } else {
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
