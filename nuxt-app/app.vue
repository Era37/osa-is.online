<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Jessica",
      link: [{ rel: "icon", href: "/favicon.ico" }],
      bodyAttrs: [{ style: "background-color: #18181b;" }],
      meta: [
        {
          property: "og:image",
          content: "https://avatar.jessica-is.gay/496432681614180382",
        },
        {
          property: "og:title",
          content: "Jessica",
        },
        {
          property: "og:description",
          content: "Another trans catgirl on the internet",
        },
        {
          property: "theme-color",
          content: "#18181b",
        },
      ],
    };
  },
};
</script>
