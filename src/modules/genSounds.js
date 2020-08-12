import { Synth } from 'tone'

const genSounds = (note) => {
  // test init
  console.log('Sound generator initialised')

  // create a synth and connect it to the main output (your speakers)
  const synth = new Synth().toDestination()

  // play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease(note, '1n')
}

export default (genSounds)
