import type { PageLoad, PageLoadEvent } from "./$types";
import { blogs, getBlog } from "$lib/blogs";

export const load: PageLoad = async ({ params, fetch }: PageLoadEvent) => {
  const blog = blogs.find((blog) => blog.slug === params.slug);
  return {
    blog: {
      ...blog,
      content: await getBlog(params.slug, fetch),
    },
  };
};
