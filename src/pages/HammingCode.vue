<template>
  <div>
    <table class="font-semibold fira-code">
      <tr >
        <td class="px-1 border">sample</td>
        <td class="px-1">{{ sample }}</td>
      </tr>
      <tr>
        <td class="px-1 border">Encoded</td>
        <td class="px-1"><span :class="{'text-yellow-400': isPowerOfTwo(i) || i === 0}" v-for="(e, i) in encoded">{{ e }}</span></td>
      </tr>
    </table>
    <div class="grid text-center fira-code" style="width: max-content;"
      :style="`grid-template-columns: repeat(8, minmax(0, 1fr))`">
      <div v-for="(num, bit) in 64">
        <div class="w-12 text-xs text-left border aspect-square" :class="{ 'text-yellow-500': isPowerOfTwo(bit) }">
          {{ bit }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const sample = ref('00110001110')
const encoded = computed(() => {
  if (sample.value) {
    return encode(sample.value)
  }
  return 'N/A'
})
let tempR = calculateRedundantBits(sample.value.length) + 1
const rowsAndCols = Math.sqrt(sample.value.length + tempR)
const grid = ref([
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
])


function encode (_dataBits) {
  let tempEncoded = encodeWithEmptyParity(_dataBits).split('')
  for (let i = 1; i < tempEncoded.length; i *= 2) {
    const _chunkDataBits = getDataBitsByParityPos(tempEncoded, i)
    const parityVal = getParityValue(_chunkDataBits)
    tempEncoded[i] = parityVal
  }
  const extendedParityVal = getParityValue(tempEncoded.join(''))
  tempEncoded[0] = extendedParityVal
  tempEncoded = tempEncoded.join('')
  return tempEncoded
  // view only purposes
  // encoded.value = tempEncoded
  // for (let y = 0; y < rowsAndCols; y++) for (let x = 0; x < rowsAndCols; x++) {
  //   let idx = (y * rowsAndCols) + x
  //   grid.value[y][x] = tempEncoded[idx]
  // }
}

function checkErrors (_encoded) {
  let pos = ''
  for (let i = 1; i < _encoded.length; i *= 2) {
    const _chunkDataBits = getDataBitsByParityPos(_encoded, i)
    const parityVal = getParityValue(_chunkDataBits)
    pos = parityVal.toString() + pos
  }
  const idx = parseInt(pos, 2)
  // getParityValue(_encoded)
  return idx
}

onMounted(() => {
  encode(sample.value)
  let correct = 0
  let wrong = 0
  const data = []
  const messageLength = 11
  for (let id = 0; id < Math.pow(2, messageLength); id++) {
    let r = calculateRedundantBits(messageLength) + 1
    const message = id.toString(2).padStart(r + messageLength, '0')
    const encoded = encode(message)
    for (let i = 0; i < message.length; i++) {
      const encodedSplitted = encoded.split('')
      encodedSplitted[i] = encodedSplitted[i] === '1' ? 0 : 1
      const wrongEncoded = encodedSplitted.join('') 
      const flipped = checkErrors(wrongEncoded)
      let isCorrect = ''
      if (flipped === i) {
        isCorrect = 1
        correct++
      } else {
        isCorrect = 0
        wrong++
      }
      const dataSample = {
        message, encoded, wrongEncoded, i, flipped, isCorrect
      }
      data.push(dataSample)
    }
  }
  console.table({correct, wrong})
  console.table(data)
})

function getParityValue (_dataBits) {
  return _dataBits.replaceAll('_', '').split('').reduce((a, b) => a ^ b)
}

function encodeWithEmptyParity (data) {
  let r = calculateRedundantBits(data.length) + 1
  let added = 1
  let encoded = '_'

  for (let i = 1; i < data.length + r; i++) {
    const isPowerOfTwos = isPowerOfTwo(i)
    added += isPowerOfTwos
    encoded += (isPowerOfTwos ? '_' : data[i - added])
  }
  return encoded
}

function calculateRedundantBits(dataBits) {
    let redundantBits = 0;
    while (Math.pow(2, redundantBits) < dataBits + redundantBits + 1) {
        redundantBits++;
    }
    return redundantBits;
}

function isPowerOfTwo(number) {
    return number > 0 && (number & (number - 1)) === 0;
}

let getDataBitsByParityPos = (data, parityPosition) => {
  let dataBits = ''
  for (let p = parityPosition; p < data.length; p += parityPosition * 2) {
    for (let j = p; j < p + parityPosition; j++) {
      dataBits += data[j]
    }
  }
  return dataBits
}


// '1011'
// '__1_011'
// '0110011'

// sample: '00110001110'
// encoded: '0010101110001110'
// 1 error: '0010101110101110'


/*

0000
0000
0010
0000

1010
*/
</script>