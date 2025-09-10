<script lang="ts">
  import Article from "../components/Article.svelte";
  import Title from "../components/Title.svelte";
  import Project from "../components/Project.svelte";
  import Footer from "../components/Footer.svelte";
  import { getRecentBlogs } from "../lib/blogs";

  const recentBlogs = getRecentBlogs(5);
</script>

<div class="font-lato flex flex-col h-fit">
  <div
    class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:grid md:grid-cols-[65%_35%] gap-6 md:gap-8 my-10 md:my-16"
  >
    <div>
      <Title>MY ARTICLES</Title>
      <div class="space-y-6 md:space-y-10">
        {#if recentBlogs.length > 0}
          {#each recentBlogs as blog}
            <Article {blog} />
          {/each}
        {:else}
          <div class="text-gray-500 italic">No articles found.</div>
        {/if}
      </div>
    </div>
    <div>
      <Title>MY PROJECTS</Title>
      <Project
        href="https://use-n.com"
        projectName="nlang"
        description="A modern, open-source programming language designed for simplicity and ease of use."
        date={new Date(2025, 7, 6)}
      />
      <Project
        href="https://mirrow.app"
        projectName="mirrow"
        description="Mirrow is a developer-first DSL that makes writing SVGs as easy and expressive as styling with CSS."
        date={new Date(2025, 8, 9)}
      />
    </div>
  </div>
</div>
