<script setup lang="ts">
import { ref } from "vue";
import * as data from "./models/data"
import { SecretWord } from "./models/splitWord";

const characters = data.characters;
const words = data.words;
const pickedWord = ref();
const guessCount = ref(8);

function getRandomWordIndex(words:any) {
  const randomIndex = Math.floor(Math.random() * words.length +1);
  pickedWord.value = words[randomIndex];
  const hangManWord = new SecretWord(randomIndex)
  console.log(hangManWord)
  return hangManWord;
}

getRandomWordIndex(words);

const guessedBtn = (character:string) => {
console.log(character)
guessCount.value--;
}
</script>

<template>
<h1>Hangman</h1>
<p>Gissningar kvar : {{ guessCount }}</p>
<div class="hill">
</div>

<div class="letter-container">
  <div v-for="letter in pickedWord">
    <p class="">{{ letter }}</p>
 </div>

</div>

<div v-if="guessCount >0" class="button-container">
  <div class="secret-word-container">
    
  </div>
  <button v-for="character in characters" @click="guessedBtn(character)">{{ character }}</button>
</div>
<div v-else><h2>Gubben är hängd 😥</h2>
</div>
</template>

<style scoped>
.hill {
  padding: 2rem;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border: 1px solid black;
  background-color: green;
  width: 500px;
  margin: 0 auto;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
}

.letter-container {
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
