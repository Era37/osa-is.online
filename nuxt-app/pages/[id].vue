<template>
  <div>
    <NuxtLink to="/"
      ><p class="absolute cursor-pointer p-2 text-3xl transition-all">
        {{ `\u{1F3E0}` }}
      </p></NuxtLink
    >
    <div v-if="blog" class="flex px-4">
      <div class="mx-auto mt-24">
        <div class="max-w-3xl text-gray-400">
          <!-- Title -->
          <div class="font-bold pb-6 text-white text-6xl">
            {{ `${blog.emoji} ${blog.title}` }}
          </div>
          <!-- Blog Description -->
          <p class="text-xl font-medium tracking-wide">
            {{ blog.description }}
          </p>
          <!-- Date and read time -->
          <p class="">
            <span class="text-lime-400">{{ blog.est_read_time }} read</span> ·
            <span class="text-green-500">{{ timeExact(blog.date) }}</span>
          </p>
          <p class="my-6 text-white" v-html="blog.content"></p>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col h-screen">
      <div class="m-auto">
        <img src="/assets/loading.gif" class="h-16 mx-auto" />
        <p class="text-center text-gray-400 font-bold text-xl">Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ts-ignore
import { useRuntimeConfig } from "#imports";

export default {
  setup() {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    return { apiBase };
  },
  data() {
    return {
      blog: null,
      date: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  async mounted() {
    this.blog = await (
      await fetch(`${this.apiBase}blog/${this.$route.params.id}`)
    ).json();
  },
  methods: {
    timeExact(dateTime) {
      const date = new Date(Number(dateTime));
      return `${
        this.date[date.getMonth()]
      }, ${date.getDate()} ${date.getFullYear()}`;
    },
  },
};
</script>
