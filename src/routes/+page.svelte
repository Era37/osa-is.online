<script lang="ts">
  import Article from "../components/Article.svelte";
  import Title from "../components/Title.svelte";
  import Project from "../components/Project.svelte";
  import Footer from "../components/Footer.svelte";
  import { getRecentBlogs } from "../lib/blogs";

  const recentBlogs = getRecentBlogs(5);
</script>

<div class="font-lato">
  <div
    class="flex flex-col md:flex-row md:grid md:grid-cols-[65%_35%] gap-4 my-16"
  >
    <div>
      <Title>MY ARTICLES</Title>
      <div class="space-y-10">
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
        href="https://github.com/nlang-dev/n"
        projectName="nlang"
        description="A modern, open-source programming language designed for simplicity and ease of use."
        date={new Date(2025, 7, 6)}
      />
    </div>
  </div>
  <Footer />
</div>
