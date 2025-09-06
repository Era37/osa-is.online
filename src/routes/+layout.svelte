<script lang="ts">
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <title>Osa</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<main class="flex flex-col min-h-screen">
  <Header />
  {@render children?.()}
  <Footer />
</main>

<style>
  :global(body) {
    max-width: var(--container-4xl);
    margin: 0 auto;
    padding-inline: 1rem;
    transition: background-color 0.3s ease;
    font-family: var(--font-lato);
  }
</style>
