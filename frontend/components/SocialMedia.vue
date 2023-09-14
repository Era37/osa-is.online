<template>
  <a :href="link" class="element" :ref="name" target="_blank">{{ name }}</a>
</template>

<style lang="scss" scoped>
.element {
  text-decoration: underline;
}

.element:hover {
  filter: brightness(0.75);
  /*transition: filter 0.2s ease;*/
}
</style>

<script>
export default {
  props: {
    name: String,
    link: String,
    hex: String,
  },
  mounted() {
    this.$refs[this.name].style.color = this.hex;
  },
};
</script>
