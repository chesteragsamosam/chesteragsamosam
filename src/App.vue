<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { sorted } from "./utils/tongits-eval";
import { createCard } from "./utils/newCard";
import { ref, computed } from "vue";
import { decks, cards } from "cards";
import * as TheCard from "cards";
import bj from './utils/BlackJack'

const deck = new decks.StandardDeck({});
const n = ref([]);

console.log(TheCard);
console.log('"3D"', createCard("3D"));
console.log('"10C"', createCard("10C"));
console.log('"8D"', createCard("8D"));
console.log('"KH"', createCard("KH"));
console.log('"2S"', createCard("2S"));
console.log(1);

console.log(deck);
const displayDeck = computed(() => {
	return n.value || null;
});
const draw = (count = 5) => {
	const drawn = deck.draw(count);
	n.value = [...deck.deckPile].map((x) => x.rank.abbrn + x.suit.unicode);
	console.log(new Array(...drawn).map((x) => x.rank.abbrn + x.suit.unicode));
	console.log(n.value);
};
console.log("The SET", displayDeck.value);
</script>

<template>
	<button @click="draw()">Draw</button>
	<div class="flex w-full flex-wrap">
		<div v-for="card in n" class="text-3xl rounded-md shadow p-2 w-16 h-20">
			{{ card }}
		</div>
	</div>
	<!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
