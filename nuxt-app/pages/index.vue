<template>
  <div class="flex flex-col section" v-if="!hidden">
    <div class="center-x padding flex flex-col">
      <div class="max-w">
        <p class="title title-box">
          i'm <span class="pink-underline">jessica</span>
        </p>
        <p>
          hey! my name is jessica, and i'm transfemme boymoder from ontario
          canada. i'm also a fullstack developer who works with python, node.js,
          vue, tailwind, rust, C and much more. i've been on estrogen since june
          20th 2023 and my prefered pronouns are she/her.
        </p>
      </div>
      <div class="section-small">
        <span class="bold">my music:</span>
        <div class="article-offset flex flex-col">
          <Songs
            v-if="songs.length"
            v-for="song in songs"
            :url="song.url"
            :name="song.name"
            :artists="song.artists"
          />
        </div>
        <span class="bold">my articles:</span>
        <div class="article-offset flex flex-col">
          <Article
            v-if="articles.length"
            v-for="article in articles"
            :title="article.title"
            :url="article.url"
          />
          <div v-else class="space-x small-top-padding">
            sorry no articles right now :c
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="center-x flex-wrap flex">
          <SocialMedia
            class="space-x"
            v-for="media in social_media"
            :link="media.link"
            :hex="media.hex"
            :name="media.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$salmon: #ff7391;

.article-offset {
  padding-left: 2rem;
}

.link {
  text-decoration: none;
  color: $salmon;
}

.link:hover {
  text-decoration: underline;
}

.pink-underline {
  text-decoration: underline $salmon;
}
</style>

<script lang="ts">
interface BlogPreview {
  title: string;
  url: string;
}

interface Song {
  url: string;
  artists: string;
  name: string;
}

export default {
  async created() {
    await this.getApiObjects("/blogs", "articles");
    await this.getApiObjects("/spotify", "songs");
    this.hidden = false;
  },
  methods: {
    async getApiObjects(endpoint: string, arrayIndex: string) {
      // @ts-ignore
      const url = useRuntimeConfig().public.apiBase;
      (await (await fetch(url + endpoint)).json()).forEach((blog: any) => {
        // @ts-ignore
        this[arrayIndex].push(blog);
      });
    },
  },
  data() {
    return {
      hidden: true,
      articles: [] as BlogPreview[],
      songs: [] as Song[],
      social_media: [
        {
          name: "discord",
          link: "https://discord.com/users/496432681614180382",
          hex: "#5865f2",
        },
        {
          name: "reddit",
          link: "https://www.reddit.com/user/Era_3037",
          hex: "#ff4500",
        },
        {
          name: "github",
          link: "https://github.com/Era37",
          hex: "#f0f6fc",
        },
        {
          name: "spotify",
          link: "https://open.spotify.com/user/vvknrxqpb2g7ql3dx3l6m09ro",
          hex: "#1ed760",
        },
      ],
    };
  },
};
</script>
