<template>
  <a target="_blank" :href="endpoint"
    ><div
      class="
        flex
        p-2
        hover:-translate-y-1
        transition-all
        ease-out
        cursor-pointer
      "
    >
      <img :src="image" class="h-16 rounded-md" />
      <div class="flex flex-col font-medium px-2">
        <p>{{ name }}</p>
        <p class="text-gray-500">{{ artist }}</p>
      </div>
    </div></a
  >
</template>

<script>
export default {
  props: {
    artist: String,
    name: String,
    image: String,
    endpoint: String,
  },
};
</script>