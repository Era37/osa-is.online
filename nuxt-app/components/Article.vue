<template>
  <NuxtLink :to="url" class="article-entry">
    <span class="front">*</span>
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
  color: #ffff66;
  padding-right: 0.5rem;
}

.article-entry:hover {
  filter: brightness(0.75);
  cursor: pointer;
}
</style>
