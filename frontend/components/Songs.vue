<template>
  <a target="_blank" :href="url" class="pad-down">
    <div class="parent-css">
      <p class="song-name-element">{{ name }}</p>
      <p class="grey">by {{ artists }}</p>
    </div></a
  >
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    url: { type: String, required: true },
    artists: String,
  },
};
</script>

<style scoped lang="scss">
.grey {
  color: #a9a9a9;
}

.pad-down {
  padding-bottom: 0.7rem;
}

.parent-css:hover {
  .song-name-element {
    color: #1ed760;
  }
}
</style>
