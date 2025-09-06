import { w as ensure_array_like, v as pop, t as push } from "../../../chunks/index.js";
import { T as Title } from "../../../chunks/Title.js";
import { A as Article } from "../../../chunks/Article.js";
import { b as blogs } from "../../../chunks/blogs.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="mt-16"><div class="mb-4">`);
  Title($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->BLOG`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> <div class="max-w-4xl"><h1 class="text-3xl md:text-4xl font-black mt-10 md:mt-14">My Thoughts &amp; Projects</h1> <p class="text-lg md:text-2xl mt-4 md:mt-6 mb-12 md:mb-16">A collection of articles about software development, technology, and the
        things I'm learning along the way.</p> <div class="space-y-8">`);
  if (blogs.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(blogs);
    $$payload.out.push(`<!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let blog = each_array[$$index];
      Article($$payload, { blog });
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="flex flex-col items-center justify-center text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-[#505050]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path></svg> <div class="text-lg font-semibold mb-1">No articles found</div> <div class="text-base">Check back soon for new posts!</div></div>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  if (blogs.length > 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="mt-16 text-center"><p class="text-gray-500">More articles coming soon...</p></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div></div>`);
  pop();
}
export {
  _page as default
};
