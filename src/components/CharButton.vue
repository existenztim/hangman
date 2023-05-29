<script setup lang="ts">
import { ref } from 'vue';
import LetterButtons from './LetterButtons.vue';
import { CharacterLetter } from '../models/characterLetter';
//import { IcharacterProp } from '../models/IcharacterProp';

//const props = defineProps<IcharacterProp>()
//const {test} = defineProps(["characters"]);

const characters = ref<CharacterLetter[]>()

// const buttonPress = (character:string) => {
//   console.log(character);
// }
</script>

<template> 
  <LetterButtons :prop="character" v-for="character in characters"/>
</template>