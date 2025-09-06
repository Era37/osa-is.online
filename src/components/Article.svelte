<script lang="ts">
  import type { BlogPost } from "../lib/blogs";
  let { blog } = $props<{ blog: BlogPost }>();
</script>

<div>
  <h3 class="text-xl font-bold">
    <a
      href={`/blog/${blog.slug}`}
      class="hover:text-rose-300 transition-colors"
    >
      {blog.title}
    </a>
  </h3>
  <p class="my-3 max-w-lg">
    {blog.description}
  </p>
  <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
    <span>{blog.date.toLocaleDateString()}</span>
    <span>•</span>
    <span>{blog.readTime}</span>
  </div>
  <a
    href={`/blog/${blog.slug}`}
    class="font-black flex gap-2 text-lg cursor-pointer relative overflow-hidden group w-fit"
  >
    Read post
    <span
      class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"
    ></span>
    <p class="tracking-tightest text-rose-300 decoration-none">-></p>
  </a>
</div>
