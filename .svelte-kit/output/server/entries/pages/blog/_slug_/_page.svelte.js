import "clsx";
import { v as pop, t as push } from "../../../../chunks/index.js";
import { T as Title } from "../../../../chunks/Title.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { marked } from "marked";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let { blog } = data;
  marked.use(markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    }
  }));
  $$payload.out.push(`<div class="mt-16"><div class="mb-4">`);
  Title($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->BLOG`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> <div class="max-w-4xl"><article class="prose prose-base md:prose-lg max-w-none svelte-nt2hzh">${html(marked.parse(blog.content ?? ""))}</article> <div class="mt-12"><a href="/blog" class="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors svelte-nt2hzh">← Back to all posts</a></div></div></div> `);
  Footer($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}
export {
  _page as default
};
