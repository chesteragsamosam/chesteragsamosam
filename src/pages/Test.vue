<template><div>
  <p>PGN: {{ pgn }}</p>
  <p>JSON: {{ json }}</p>
</div></template>
<script>
import { compare } from '@/utils/performance'
const sets = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const arrS = (num) => {
  return sets[num % sets.length < 0 ? num % sets.length + sets.length : num % sets.length]
}
const arrA = (num) => {
  return sets.at(num % sets.length)
}

function generateRandomColor1 () {
  return `#${Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0')}`;
}

function generateRandomColor2 () {
  return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
}

export default {
  data () {
    return {
      pgn: 'test',
      json: 'yeah',
    }
  },
  async mounted () {
    console.log('mounted')
    // compare(a, b, 10_000_000)
    const res = await fetch('https://tcec-chess.com/archive/json/TCEC_Season_27_-_Superfinal_8.pgn', {
      mode: 'no-cors'
    })

    // this.json = await res.json()
    console.log('RES:', res)
    console.log('blob:', await res.json())
    console.log('arrayBuffer:', await res.arrayBuffer())
    this.pgn = await res.text()
    console.log('PGN', this.pgn)
  }
}
</script>