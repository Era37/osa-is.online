import { y as attr, z as escape_html, v as pop, t as push, w as ensure_array_like } from "../../chunks/index.js";
import { A as Article } from "../../chunks/Article.js";
import { T as Title } from "../../chunks/Title.js";
import { g as getRecentBlogs } from "../../chunks/blogs.js";
function Project($$payload, $$props) {
  push();
  let { href, projectName, description, date } = $$props;
  const maxDescriptionLength = 100;
  const truncatedDescription = description.length > maxDescriptionLength ? description.substring(0, maxDescriptionLength) + "..." : description;
  const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  $$payload.out.push(`<div class="mt-4 md:mt-12"><a${attr("href", href)} class="block group"><h3 class="text-xl font-bold group-hover:text-rose-300 transition-colors">${escape_html(projectName)}</h3> <p class="my-3">${escape_html(truncatedDescription)}</p> <p class="text-rose-400 text-sm italic">Since ${escape_html(formattedDate)}</p></a></div>`);
  pop();
}
function _page($$payload, $$props) {
  push();
  const recentBlogs = getRecentBlogs(5);
  $$payload.out.push(`<div class="font-lato flex flex-col h-fit"><div class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:grid md:grid-cols-[65%_35%] gap-6 md:gap-8 my-10 md:my-16"><div>`);
  Title($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->MY ARTICLES`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> <div class="space-y-6 md:space-y-10">`);
  if (recentBlogs.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(recentBlogs);
    $$payload.out.push(`<!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let blog = each_array[$$index];
      Article($$payload, { blog });
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="text-gray-500 italic">No articles found.</div>`);
  }
  $$payload.out.push(`<!--]--></div></div> <div>`);
  Title($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->MY PROJECTS`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Project($$payload, {
    href: "https://github.com/nlang-dev/n",
    projectName: "nlang",
    description: "A modern, open-source programming language designed for simplicity and ease of use.",
    date: new Date(2025, 7, 6)
  });
  $$payload.out.push(`<!----></div></div></div>`);
  pop();
}
export {
  _page as default
};
