<script lang="ts">
  import Title from "../../../components/Title.svelte";
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
      <article class="prose prose-base md:prose-lg max-w-none">
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
</div>
