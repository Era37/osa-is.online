<template>
  	<div class="bg-black flex flex-col h-screen">
		<Header/>
		<router-view class="grow" :colour="colour" />
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