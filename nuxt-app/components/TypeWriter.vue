<template>
  <div class="text-salmon text-xl font-semibold pt-3">
    <span>{{ typewriterBase }}</span>
    <span ref="job"></span>
    <span class="blinker pl-0.5">|</span>
  </div>
</template>

<script lang="ts">
enum TypewriterDirection {
  Increasing,
  Decreasing,
}

export default {
  data() {
    return {
      typewriterBase: "I'm a ",
      typewriterIndex: 0,
      typewriterDirection: TypewriterDirection.Increasing,
      typewriterPhrases: [
        "Fullstack Developer",
        "Trans Woman",
        "System Architect",
        "Lesbian",
      ],
    };
  },
  methods: {
    delay(ms = 1000) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async typewriterReset() {
      this.typewriterDirection = TypewriterDirection.Increasing;
      this.typewriterIndex = 0;
    },
    async typewriter(phrase: string, remove = false) {
      const typewriter: any = this.$refs.job;
      typewriter.innerHTML = phrase.substring(0, this.typewriterIndex + 1);
      if (!remove) {
        this.typewriterIndex++;
      } else {
        this.typewriterIndex--;
      }
      if (this.typewriterIndex === phrase.length) {
        // executed when the the phrase is fully typed
        await this.delay();
        this.typewriterDirection = TypewriterDirection.Decreasing;
      }
      const removing =
        this.typewriterDirection === TypewriterDirection.Decreasing
          ? true
          : false;
      if (
        this.typewriterDirection === TypewriterDirection.Decreasing &&
        typewriter.innerHTML.length === 0
      ) {
        // executed when the phrase has been removed
        return;
      } else {
        await this.delay(100);
        await this.typewriter(phrase, removing);
      }
    },
  },
  async mounted() {
    const { typewriter, typewriterPhrases, delay, typewriterReset } = this;
    async function runTypeWriter() {
      for (const phrase of typewriterPhrases) {
        await typewriter(phrase, false);
        await delay(500);
        await typewriterReset();
        typewriterPhrases.push(phrase);
      }
    }
    await runTypeWriter();
  },
};
</script>

<style scoped>
.blinker {
  animation: blinker 0.75s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
