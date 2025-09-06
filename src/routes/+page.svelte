<script lang="ts">
  import Article from "../components/Article.svelte";
</script>

<div class="h-[200vh] font-lato">
  <div class="grid grid-cols-[65%_35%] gap-4 my-16">
    <div>
      <h2
        class="text-md font-medium mb-10 tracking-widest dark:text-rose-400 text-rose-500"
      >
        MY ARTICLES
      </h2>
      <Article />
    </div>
  </div>
</div>
