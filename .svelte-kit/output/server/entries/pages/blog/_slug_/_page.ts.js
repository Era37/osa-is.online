import { b as blogs, a as getBlog } from "../../../../chunks/blogs.js";
const load = async ({ params, fetch }) => {
  const blog = blogs.find((blog2) => blog2.slug === params.slug);
  return {
    blog: {
      ...blog,
      content: await getBlog(params.slug, fetch)
    }
  };
};
export {
  load
};
