<script>
  import Sun from "./svgs/Sun.svelte";
  import Moon from "./svgs/Moon.svelte";
  import Name from "./Name.svelte";
  import { onMount } from "svelte";
  let isDarkMode = $state(true);
  let loaded = $state(false);
  onMount(() => {
    // Get the current state from the HTML class that was set by the inline script
    isDarkMode = document.documentElement.classList.contains("dark");
    loaded = true;
  });

  function updateBodyClass() {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    updateBodyClass();
  }

  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Articles",
      href: "/blog",
    },
  ];
</script>

<div class="mt-16 mb-4 sticky top-0 dark:text-gray-100 font-lato">
  <div
    class="sticky z-50 w-full h-14 flex items-center space-x-8 border px-6 backdrop-blur-2xl border-[#282828] rounded-xl"
  >
    <a href="/"><Name /></a>
    <div class="flex items-center gap-10">
      {#each pages as page}
        <a href={page.href}>{page.name}</a>
      {/each}
    </div>
    <div class="ml-auto">
      {#if loaded}
        {#if isDarkMode}
          <Moon on:click={toggleDarkMode} />
        {:else}
          <Sun on:click={toggleDarkMode} />
        {/if}
      {/if}
    </div>
  </div>
</div>
