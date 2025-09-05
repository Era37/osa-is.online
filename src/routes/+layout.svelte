<script lang="ts">
  import "../app.css";
  import Header from "../components/Header.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <title>Osa</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<main>
  <Header />

  {@render children?.()}
</main>

<style>
  :global(body) {
    max-width: var(--container-4xl);
    margin: 0 auto;
    transition: background-color 0.3s ease;
    font-family: var(--font-lato);
  }
</style>
