<template>
  	<div class="bg-black flex flex-col h-screen text-white">
		<Header/>
		<router-view class="grow" />
  	</div>
</template>

<script>
import Header from "../src/components/Header.vue";

export default {
	components: {
		Header,
	}
}
</script>

<style>
[v-cloak] {
	display: none;
}
</style>