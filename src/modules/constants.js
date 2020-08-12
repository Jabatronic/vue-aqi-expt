/**
 * Define index boundaries for each polutant
 */
const aqBoundaries = {
  o3: {
    1: {
      min: 0,
      max: 33
    },
    2: {
      min: 34,
      max: 66
    },
    3: {
      min: 67,
      max: 100
    },
    4: {
      min: 101,
      max: 120
    },
    5: {
      min: 121,
      max: 140
    },
    6: {
      min: 141,
      max: 160
    },
    7: {
      min: 161,
      max: 187
    },
    8: {
      min: 188,
      max: 213
    },
    9: {
      min: 214,
      max: 240
    },
    10: {
      min: 241,
      max: Infinity
    }
  },
  no2: {
    1: {
      min: 0,
      max: 67
    },
    2: {
      min: 68,
      max: 134
    },
    3: {
      min: 135,
      max: 200
    },
    4: {
      min: 201,
      max: 267
    },
    5: {
      min: 268,
      max: 334
    },
    6: {
      min: 335,
      max: 400
    },
    7: {
      min: 401,
      max: 467
    },
    8: {
      min: 468,
      max: 534
    },
    9: {
      min: 535,
      max: 600
    },
    10: {
      min: 601,
      max: Infinity
    }
  },
  so2: {
    1: {
      min: 0,
      max: 88
    },
    2: {
      min: 89,
      max: 177
    },
    3: {
      min: 178,
      max: 266
    },
    4: {
      min: 267,
      max: 354
    },
    5: {
      min: 355,
      max: 443
    },
    6: {
      min: 444,
      max: 532
    },
    7: {
      min: 533,
      max: 710
    },
    8: {
      min: 711,
      max: 887
    },
    9: {
      min: 888,
      max: 1064
    },
    10: {
      min: 1065,
      max: Infinity
    }
  },
  pm25: {
    1: {
      min: 0,
      max: 11
    },
    2: {
      min: 12,
      max: 23
    },
    3: {
      min: 24,
      max: 35
    },
    4: {
      min: 36,
      max: 41
    },
    5: {
      min: 42,
      max: 47
    },
    6: {
      min: 48,
      max: 53
    },
    7: {
      min: 54,
      max: 58
    },
    8: {
      min: 59,
      max: 64
    },
    9: {
      min: 65,
      max: 70
    },
    10: {
      min: 71,
      max: Infinity
    }
  },
  pm10: {
    1: {
      min: 0,
      max: 16
    },
    2: {
      min: 12,
      max: 33
    },
    3: {
      min: 24,
      max: 50
    },
    4: {
      min: 51,
      max: 58
    },
    5: {
      min: 59,
      max: 66
    },
    6: {
      min: 67,
      max: 75
    },
    7: {
      min: 76,
      max: 83
    },
    8: {
      min: 84,
      max: 91
    },
    9: {
      min: 92,
      max: 100
    },
    10: {
      min: 101,
      max: Infinity
    }
  }
}

const colors = {
  1: '#9CFF9C',
  2: '#32FF00',
  3: '#33CE00',
  4: '#FEFF00',
  5: '#FFCF02',
  6: '#FF9A00',
  7: '#FF6463',
  8: '#FF0202',
  9: '#990002',
  10: '#CF31FF'
}

const notes = {
  1: 'C4',
  2: 'E4',
  3: 'G4',
  4: 'Bb4',
  5: 'D4',
  6: 'C5',
  7: 'E5',
  8: 'G5',
  9: 'Bb5',
  10: 'D5'
}

export { aqBoundaries, colors, notes }
