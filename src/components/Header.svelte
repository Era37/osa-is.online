<script>
  import MoonSun from "./svgs/MoonSun.svelte";
  import Hamburger from "./svgs/Hamburger.svelte";
  import Name from "./Name.svelte";

  let mobileOpen = false;

  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Articles", href: "/blog" },
  ];

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<div class="mt-6 md:mt-16 mb-4 sticky top-0 dark:text-gray-100 font-lato">
  <div
    class="z-50 w-full h-14 flex items-center border px-4 md:px-6 backdrop-blur-2xl dark:border-[#282828] border-[#e1e1e1] rounded-xl gap-6 md:gap-8 relative"
  >
    <a href="/" aria-label="Go to home"><Name /></a>

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-10">
      {#each pages as page}
        <a href={page.href} class="hover:text-rose-300 transition-colors"
          >{page.name}</a
        >
      {/each}
    </nav>

    <div class="ml-auto flex items-center gap-2 md:gap-3">
      <MoonSun />
      <button
        class="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-[#e1e1e1] dark:hover:border-[#282828] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
        aria-label="Open menu"
        aria-controls="mobile-menu"
        aria-expanded={mobileOpen}
        on:click={() => (mobileOpen = !mobileOpen)}
      >
        <Hamburger />
      </button>
    </div>

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    {#if mobileOpen}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="fixed inset-0 z-40 md:hidden" on:click={closeMobile} />

      <div
        id="mobile-menu"
        role="menu"
        class="absolute z-50 md:hidden top-full left-0 right-0 mt-2 rounded-xl border dark:border-[#282828] border-[#e1e1e1] bg-white/90 dark:bg-[#0c0c0c] backdrop-blur-xl p-3"
      >
        <div class="flex flex-col">
          {#each pages as page}
            <a
              href={page.href}
              role="menuitem"
              class="w-full px-3 py-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-white/5 transition-colors"
              on:click={closeMobile}
            >
              {page.name}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
