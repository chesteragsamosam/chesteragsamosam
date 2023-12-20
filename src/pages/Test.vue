<template></template>
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
  mounted () {
    console.log('mounted')
    compare(a, b, 10_000_000)
  }
}
</script>