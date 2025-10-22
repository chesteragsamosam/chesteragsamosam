<template>
  <div>
    <table>
      <tr v-for="player in players">
        <td>{{ player.name }}</td>
        <td>{{ player.rating }}</td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getRandInt } from '@/utils'

const players = ref([])

for (let i = 0; i < 16; i++) {
  const randRating = getRandInt(1400, 2120)
  players.value.push({
    name: `${randRating} Player`,
    rating: randRating
  })
}

players.value.sort((a, b) => b.rating - a.rating)

const getMinimumRounds = (noOfPlayers) => {
  return (noOfPlayers * 2 - 1).toString(2).length - 1
}

const rounds = getMinimumRounds()


</script>
<style scoped></style>