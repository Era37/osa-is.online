<script lang="ts">
  import Title from "../../../components/Title.svelte";
  import Footer from "../../../components/Footer.svelte";
  import { marked } from "marked";
  import type { PageProps } from "./$types";
  import hljs from "highlight.js";
  import { markedHighlight } from "marked-highlight";
  let { data }: PageProps = $props();
  let { blog } = data;

  marked.use(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
    })
  );
</script>

<div class="mt-16">
  <div class="mb-4">
    <Title>BLOG</Title>
    <div class="max-w-4xl">
      <!-- Blog post content -->
      <article class="prose prose-lg max-w-none">
        {@html marked.parse(blog.content ?? "")}
      </article>

      <!-- Back to blog link at bottom -->
      <div class="mt-12">
        <a
          href="/blog"
          class="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
        >
          ← Back to all posts
        </a>
      </div>
    </div>
  </div>
  <Footer />
</div>

<style>
  /* app.css or another global file included in Tailwind's pipeline */
  .prose {
    color: inherit;
  }
  .prose :where(h1) {
    @apply text-3xl font-bold mt-8 mb-4;
  }
  .prose :where(h2) {
    @apply text-2xl font-bold mt-6 mb-3;
  }
  .prose :where(h3) {
    @apply text-xl font-bold mt-4 mb-2;
  }
  .prose :where(p) {
    @apply mb-4 leading-relaxed;
  }
  .prose :where(code) {
    @apply bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm;
  }
  .prose :where(pre) {
    @apply bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto;
  }
  .prose :where(pre code) {
    @apply bg-transparent p-0;
  }
  .prose :where(ul) {
    @apply list-disc pl-6 mb-4;
  }
  .prose :where(ol) {
    @apply list-decimal pl-6 mb-4;
  }
  .prose :where(li) {
    @apply mb-2;
  }
  .prose :where(blockquote) {
    @apply border-l-4 border-rose-300 pl-4 italic my-4;
  }
  .prose :where(a) {
    @apply text-rose-400 hover:text-rose-300 transition-colors;
  }
</style>
