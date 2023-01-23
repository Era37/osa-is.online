<template>
  <div class="flex flex-col section">
    <div class="center-x padding flex flex-col">
      <div class="max-w">
        <p class="title title-box">
          i'm <span class="pink-underline">jessica</span>
        </p>
        <p>
          hey! my name is jessica, and i'm trans girl from canada. i'm also a
          fullstack developer who works with python, node.js, vue, tailwind,
          rust and much more. i also painting my nails and prefered pronouns are she/her.
        </p>
      </div>
      <div class="section-small">
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
      <div class="center-x">
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

export default {
  async created() {
    // @ts-expect-error
    const config = useRuntimeConfig();
    const apiURL = config.public.apiBase;
    (await (await fetch(apiURL + "/blogs")).json()).forEach((blog: any) => {
      this.articles.push(blog);
    });
  },
  data() {
    return {
      articles: [] as BlogPreview[],
      social_media: [
        {
          name: "post",
          link: "https://post.news/era3037",
          hex: "#658bf5",
        },
        {
          name: "discord",
          link: "https://discordhub.com/profile/768615938055471116",
          hex: "#5865f2",
        },
        {
          name: "reddit",
          link: "https://www.reddit.com/user/Era3037",
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
