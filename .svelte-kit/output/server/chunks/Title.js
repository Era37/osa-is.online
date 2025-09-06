import { J as slot } from "./index.js";
function Title($$payload, $$props) {
  $$payload.out.push(`<h2 class="text-md font-medium mb-4 md:mb-10 tracking-widest dark:text-rose-400 text-rose-500"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></h2>`);
}
export {
  Title as T
};
