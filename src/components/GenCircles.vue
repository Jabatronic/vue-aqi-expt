<template>
  <div>
    <!-- Content -->
    <div v-for="(value, name, index) in (iaqiData)" :key="index">
    </div>
    <div class="svg-wrapper">
      <svg
        viewBox="-75 -75 150 150"
        v-for="(value, name, index) in big5filter(iaqiData)"
        :key="'key_' + index"
      >
        <g :id="'key_' + index">
          <circle
            fill="#fff"
            :stroke="getColour(name, value.v)"
            stroke-width="7"
            cx="0"
            cy="0"
            r="50"
            ref="circle"
            class="circle"
          />
          <text
            fill="#2c3e50"
            font-size="90%"
            text-anchor="middle"
            alignment-baseline="central"
          >
            <tspan class="polutant-name">{{ name }}</tspan>
          </text>
          <text
            fill="#2c3e50"
            font-size="90%"
            text-anchor="middle"
            alignment-baseline="central"
          >
            <tspan dy="20" class="polutant-name">{ {{ value.v }} }</tspan>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { aqBoundaries, colors } from '@/modules/constants'

import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin)

export default {
  name: 'GenCircles',
  props: {
    iaqiData: Object
  },
  data () {
    return {
      // ...
      circleRef: null
    }
  },
  mounted () {
    // ...
  },
  updated: function () {
    var ref = this
    this.$nextTick(function () {
      if (typeof ref.$refs.circle !== 'undefined') {
        ref.circleRef = ref.$refs.circle
        this.animateCircle()
        console.log('init')
      }
    })
  },
  watch: {
    // ...
    iaqiData: function () {
      var self = this
      this.$nextTick(function () {
        if (typeof self.$refs.circle !== 'undefined') {
          self.circleRef = self.$refs.circle
          this.animateCircle()
        }
      })
    }
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
    getColour (pollutantName, value) {
      if (pollutantName in aqBoundaries) {
        for (const pollutantRank in aqBoundaries[pollutantName]) {
          const subRank = aqBoundaries[pollutantName][pollutantRank]
          if (value >= subRank.min && value <= subRank.max) {
            return colors[pollutantRank]
          }
        }
      }
    },
    animateCircle () {
      const tl = gsap.timeline()
      tl.set(this.circleRef, { transformOrigin: '50% 50%', rotate: '90deg', drawSVG: 0 })
      tl.to(this.circleRef, { duration: 1, drawSVG: '100%' })
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
  width: 100vw;
  flex-direction: row;
  justify-content: space-between;

  & svg {
    width: 300px;
    margin: 20px;
  }
}
</style>
