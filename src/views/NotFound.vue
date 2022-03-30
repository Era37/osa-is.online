<template>
	<div class="space-y-6 bg-black p-16">
		<div class="text-4xl md:text-6xl font-bold">
			Uh oh, seems like you're lost
		</div>
		<div class="">
			<router-link to="/">
				<button class="rounded-lg outline ouline-2 outline-white p-2 ease-out transition hover:-translate-y-1">
					Return Home
				</button>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style>

</style>