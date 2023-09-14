<template>
  <div class="text-white">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
body {
  background-color: black;
  font-family: "main-font";
  color: white;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

p,
body,
li {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: white;
}

@font-face {
  font-family: "main-font";
  src: url("~/assets/main.ttf");
}
</style>

<script setup>
useHead({
  title: "jessica",
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
      hid: "description",
      name: "description",
      content: "Another trans catgirl on the internet",
    },
    {
      property: "theme-color",
      content: "#18181b",
    },
  ],
});
</script>
