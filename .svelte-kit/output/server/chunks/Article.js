import { y as attr, z as escape_html, v as pop, t as push } from "./index.js";
function Article($$payload, $$props) {
  push();
  let { blog } = $$props;
  $$payload.out.push(`<div><h3 class="text-xl font-bold"><a${attr("href", `/blog/${blog.slug}`)} class="hover:text-rose-300 transition-colors">${escape_html(blog.title)}</a></h3> <p class="my-3 max-w-lg">${escape_html(blog.description)}</p> <div class="flex items-center gap-4 text-sm text-gray-500 mb-4"><span>${escape_html(blog.date.toLocaleDateString())}</span> <span>•</span> <span>${escape_html(blog.readTime)}</span></div> <a${attr("href", `/blog/${blog.slug}`)} class="font-black flex gap-2 text-lg cursor-pointer relative overflow-hidden group w-fit">Read post <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"></span> <p class="tracking-tightest text-rose-300 decoration-none">-></p></a></div>`);
  pop();
}
export {
  Article as A
};
