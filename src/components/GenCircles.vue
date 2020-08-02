<template>
  <div>
    <!-- Content -->
    <div
      v-for="(value, name, index) in (iaqiData)"
      :key="index"
    >
      <!-- {{ name }}: {{ value.v }} -->
    </div>
    <div class="svg-wrapper">
      <svg
        viewBox="-60 -50 150 100"
        v-for="(value, name, index) in big5filter(iaqiData)"
        :key="'key_' + index"
      >
      <g :id="'key_' + index">
        <circle
          :fill="getColour(name, value.v)"
          stroke="white"
          stroke-width=".1"
          cx="0" cy="0"
          r="50"
        >
        </circle>
        <text
          fill="white"
          font-size="90%"
          text-anchor="middle"
          alignment-baseline="central"
          >{{ name }}</text>
      </g>

      </svg>
    </div>
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
  },
  pm25: {
    low: [11, 23, 35],
    moderate: [41, 47, 53],
    high: [58, 64, 70],
    v_high: [71]
  },
  pm10: {
    low: [16, 33, 50],
    moderate: [58, 66, 75],
    high: [83, 91, 100],
    v_high: [101]
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
          } else if (value >= aqBoundaries[name].v_high) {
            return boundaryColors.v_high
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

.svg-wrapper {
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;

  & svg {
    // flex: 1;
    width: 300px;
    // padding: 20px
  }
}
</style>
