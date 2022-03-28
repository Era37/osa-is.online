<template>
    <div class="flex h-screen">
		<div :class="`flex mx-auto my-72 max-w-2xl ${colour} p-16 rounded-lg max-h-56`">
			<div class="text-white font-bold text-4xl m-auto">
				Hey, I'm <div class="inline-flex text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-500 to-pink-900">Jessica</div>.
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
