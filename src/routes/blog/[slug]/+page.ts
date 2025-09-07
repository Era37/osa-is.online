import type { PageLoad, PageLoadEvent } from "./$types";
import { blogs, posts } from "$lib/blogs";

export const load: PageLoad = async ({ params }: PageLoadEvent) => {
  const blog = blogs.find((blog) => blog.slug === params.slug);
  return {
    blog: {
      ...blog,
      content: await posts[`./blogs/${params.slug}.md`](),
    },
  };
};
