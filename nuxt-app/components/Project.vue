<template>
  <a :href="url" target="_blank">
    <div
      class="
        bg-dark
        p-4
        sm:w-96
        w-64
        h-min
        mx-auto
        rounded-xl
        transition-all
        ease-out
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <div class="flex">
        <img :src="img" :alt="name" class="h-12 rounded-full" />
        <div
          class="my-auto pl-2 font-extrabold text-xl tracking-wide"
          :class="text_gradient"
        >
          {{ name }}
        </div>
      </div>
      <div class="max-w-xs pt-4 font-medium text-md">
        {{ description }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    description: String,
    text_gradient: String,
    url: String,
  },
};
</script>