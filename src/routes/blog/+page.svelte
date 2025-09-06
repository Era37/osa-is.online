<script lang="ts">
  import Title from "../../components/Title.svelte";
  import Article from "../../components/Article.svelte";
  import Footer from "../../components/Footer.svelte";
  import { blogs } from "$lib/blogs";
</script>

<div class="mt-16">
  <div class="mb-4">
    <Title>BLOG</Title>
    <div class="max-w-4xl">
      <h1 class="text-4xl font-black mt-14">My Thoughts & Projects</h1>
      <p class="text-2xl mt-6 mb-16">
        A collection of articles about software development, technology, and the
        things I'm learning along the way.
      </p>

      <div class="space-y-8">
        {#if blogs.length > 0}
          {#each blogs as blog}
            <Article {blog} />
          {/each}
        {:else}
          <div class="flex flex-col items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mb-4 text-[#505050]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
            <div class="text-lg font-semibold mb-1">No articles found</div>
            <div class="text-base">Check back soon for new posts!</div>
          </div>
        {/if}
      </div>
      {#if blogs.length > 0}
        <div class="mt-16 text-center">
          <p class="text-gray-500">More articles coming soon...</p>
        </div>
      {/if}
    </div>
  </div>
  <Footer />
</div>
