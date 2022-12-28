<template>
  <NuxtLink :to="url" class="article-entry space-y">
    <span class="front yellow">*</span>
    <span>{{ title }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
  },
};
</script>

<style lang="scss" scoped>
.front {
  padding-right: 0.5rem;
}

.article-entry:hover {
  filter: brightness(0.75);
  cursor: pointer;
}
</style>
