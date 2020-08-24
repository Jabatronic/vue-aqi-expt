// import Vue from 'vue'
// import store from '@/store'
import { Synth, Sequence, Transport } from 'tone'

const genSounds = () => {
  // test init
  console.log('Sound generator initialised')

  // create a synth and connect it to the main output (your speakers)
  const synth = new Synth().toDestination()

  // notes to be played
  const notesToBePlayed = ['C4', 'Eb4', 'G4', 'Bb4']

  // create a sequence
  const synthPart = new Sequence(
    function (time, note) {
      synth.triggerAttackRelease(note, '10hz', time)
    },
    notesToBePlayed,
    '4n'
  )

  // Set up synth ready to be played
  synthPart.start()

  // start transport (main timeline)
  Transport.start()
}

export default (genSounds)
