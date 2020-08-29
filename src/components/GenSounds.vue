<template>
  <div><!-- no visual content --></div>
</template>

<script>
import { aqiSequence } from '@/modules/constants'
import { Synth, Sequence, Transport } from 'tone'

export default {
  name: 'GenSounds',
  props: {
    aqiRank: Number
  },
  data () {
    return {
      notesToBePlayed: []
    }
  },
  created () {
    // create new synth and connect to speaker
    this.synth = new Synth().toDestination()
    // create a sequence
    // create a sequence
    this.synthPart = new Sequence(
      (time, note) => {
        this.synth.triggerAttackRelease(note, '10hz', time)
      },
      this.notesToBePlayed,
      '4n'
    )

    // Set up synth ready to be played
    this.synthPart.start()

    // start transport (main timeline)
    Transport.start()
  },
  watch: {
    aqiRank () {
      // notes to be played
      const aq = this.aqiRank
      if (aq <= 50) { this.notesToBePlayed = aqiSequence['1'] }
      if (aq > 50 && aq <= 100) { this.notesToBePlayed = aqiSequence['2'] }
      if (aq > 100 && aq <= 150) { this.notesToBePlayed = aqiSequence['3'] }
      if (aq > 150 && aq <= 200) { this.notesToBePlayed = aqiSequence['4'] }
      if (aq > 200 && aq <= 300) { this.notesToBePlayed = aqiSequence['5'] }
      if (aq > 300) { this.notesToBePlayed = aqiSequence['6'] }

      this.synthPart.events = this.notesToBePlayed
    }
  }
}
</script>

<style>

</style>
