<template>
  <div class="text-white">
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: "Jessica",
  link: [{ rel: "icon", href: "/favicon.ico" }],
  bodyAttrs: [{ class: "bg-grey" }],
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
});
</script>
