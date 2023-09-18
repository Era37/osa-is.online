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
  title: "Osa",
  meta: [
    {
      property: "og:title",
      content: "Osa",
    },
    {
      property: "og:description",
      content: "Developer, Server maintainer and F1 Fan.",
    },
    {
      hid: "description",
      name: "description",
      content: "Developer, Server maintainer and F1 Fan.",
    },
    {
      property: "theme-color",
      content: "#18181b",
    },
  ],
});
</script>
