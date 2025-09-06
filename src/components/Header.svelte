<script>
  import MoonSun from "./svgs/MoonSun.svelte";
  import Name from "./Name.svelte";

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
    class="sticky z-50 w-full h-14 flex items-center space-x-8 border px-6 backdrop-blur-2xl dark:border-[#282828] border-[#e1e1e1] rounded-xl"
  >
    <a href="/"><Name /></a>
    <div class="flex items-center gap-10">
      {#each pages as page}
        <a href={page.href}>{page.name}</a>
      {/each}
    </div>
    <div class="ml-auto">
      <MoonSun />
    </div>
  </div>
</div>
