<template>
  <div class="absolute padding-light">
    <NuxtLink to="/" class="hover-underline">&lt;- Back</NuxtLink>
  </div>
  <div class="flex flex-col">
    <div class="center-x section padding max-w-large" v-if="rendered">
      <div class="title-box">
        <div class="title">{{ blog.title }}</div>
        <div>
          Written: <span class="yellow">{{ findTime(Number(blog.date)) }}</span>
        </div>
      </div>
      <div v-html="blog.content"></div>
    </div>
  </div>
</template>

<script lang="ts">
interface Blog {
  title: string;
  content: string;
  date: number;
}

export default {
  setup() {
    // @ts-expect-error
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    return { apiBase };
  },
  data() {
    return {
      blog: {} as Blog,
      rendered: false,
    };
  },
  async created() {
    this.blog = await (
      await fetch(this.apiBase + `/blog/${this.$route.params.id}`)
    ).json();
    this.rendered = true;
  },
  methods: {
    findTime(time: number): string {
      const date = new Date(time);
      const months: Array<string> = [
        "Janurary",
        "Feburary",
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
      ];
      return `${
        months[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()}`;
    },
  },
};
</script>
