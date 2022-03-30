<template>
  	<div id="parent" class="bg-black flex flex-col h-screen text-white">
		<header>
			<Header/>
		</header>
		<router-view class="grow"/>
		<footer>
			<Footer class="mt-auto"/>
		</footer>
  	</div>

</template>

<script>
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue"

export default {
	components: {
		Header,
		Footer
	}
}
</script>

<style>
[v-cloak] {
	display: none;
}

@media only screen and (max-width: 500px) {
	#parent {
		height: -webkit-fill-available;
	}
}
</style>