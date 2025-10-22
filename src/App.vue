<script setup>
// import { sorted } from "./utils/tongits-eval";
// import { createCard } from "./utils/newCard";
// import { ref, computed } from "vue";
// import { decks, cards } from "cards";
// import * as TheCard from "cards";
// import bj from './utils/BlackJack'

// const deck = new decks.StandardDeck({});
// const n = ref([]);

// console.log(TheCard);
// console.log('"3D"', createCard("3D"));
// console.log('"10C"', createCard("10C"));
// console.log('"8D"', createCard("8D"));
// console.log('"KH"', createCard("KH"));
// console.log('"2S"', createCard("2S"));
// console.log(1);

// console.log(deck);
// const displayDeck = computed(() => {
// 	return n.value || null;
// });
// const draw = (count = 5) => {
// 	const drawn = deck.draw(count);
// 	n.value = [...deck.deckPile].map((x) => x.rank.abbrn + x.suit.unicode);
// 	console.log(new Array(...drawn).map((x) => x.rank.abbrn + x.suit.unicode));
// 	console.log(n.value);
// };
// console.log("The SET", displayDeck.value);
</script>

<template>
  <!-- <NavBar /> -->
  <div class="container mx-auto">
    <router-view />
  </div>
  <!-- <button @click="draw()">Draw</button>
	<div style="
		/* background-color: #f8f8ff; */

	"
		class="px-4 py-2 m-2 font-mono bg-gray-100 rounded jb-mono">
		<h1>The quick brown fox jumps over the lazy dog.</h1>
		<p>https:// www.
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae facere dolor esse natus similique corporis ipsa amet temporibus, eum mollitia ad ipsum alias beatae quo labore! Sequi quam nobis quisquam libero vero minima, numquam et ea quasi consequatur necessitatibus fugiat ipsa blanditiis. Placeat voluptates, tempore, odit, veritatis qui incidunt alias iste ad in quam sapiente ipsam expedita? Dolor nesciunt consequuntur, architecto esse nobis quam voluptatibus unde quae. Consequatur eius error at dolores illum, expedita quod minus dicta accusamus necessitatibus? Modi?
		</p>
		<p>0+e12,345,678.9</p>
	</div>
	<div
		style="
			/* background-color: #080800; */

		"
		class="px-4 py-2 m-2 text-justify text-white bg-gray-900 rounded fira-code">
		<h1>The quick brown fox jumps over the lazy dog.</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae facere dolor esse natus similique corporis ipsa amet temporibus, eum mollitia ad ipsum alias beatae quo labore! Sequi quam nobis quisquam libero vero minima, numquam et ea quasi consequatur necessitatibus fugiat ipsa blanditiis. Placeat voluptates, tempore, odit, veritatis qui incidunt alias iste ad in quam sapiente ipsam expedita? Dolor nesciunt consequuntur, architecto esse nobis quam voluptatibus unde quae. Consequatur eius error at dolores illum, expedita quod minus dicta accusamus necessitatibus? Modi?
		</p>
		<p>0+e12,345,678.9</p>
		<p>Hello, I am Chester Agsamosam, 26 years old, === =/ ~~> and I am a software engineer. As of 2023, I am currently working as an H5 Developer for GCash</p>
	</div>
	<div class="flex flex-wrap w-full">
		<div v-for="card in n" class="w-16 h-20 p-2 text-3xl rounded-md shadow">
			{{ card }}
		</div>
	</div> -->
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
