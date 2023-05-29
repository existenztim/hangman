<script setup lang="ts">
import { IcharacterProp } from '../models/IcharacterProp';

 const props = defineProps<IcharacterProp>();
 console.log("CharButton:",props);
</script>

<template>
 <button>{{ props.prop.id }}</button>
</template>

<style scoped>

</style>
