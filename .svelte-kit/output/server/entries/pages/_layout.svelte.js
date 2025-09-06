import { w as ensure_array_like, x as attr_class, y as attr, v as pop, t as push, z as escape_html, F as head } from "../../chunks/index.js";
import { F as Footer } from "../../chunks/Footer.js";
function MoonSun($$payload, $$props) {
  push();
  let isSun = false;
  const cx = 110;
  const cy = 110;
  const radius = 90;
  const dots = Array.from({ length: 8 }, (_, i) => {
    const angle = i * 45 * (Math.PI / 180);
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle)
    };
  });
  const each_array = ensure_array_like(dots);
  $$payload.out.push(`<div><svg viewBox="0 0 230 230" width="35" height="35" style="transform: rotate(40deg)"${attr_class("cursor-pointer svelte-1npiy41", void 0, { "sun": isSun })} role="button" tabindex="0"${attr("aria-pressed", isSun)}><defs><mask id="global-mask"><rect width="260" height="260" class="mask-bg svelte-1npiy41"></rect><circle cx="110" cy="110" r="60" fill="white" stroke-width="13" stroke="white"></circle></mask><mask id="moon-mask"><rect width="200" height="200" fill="white"></rect><circle r="60" cx="110" cy="45" fill="black" class="float svelte-1npiy41"></circle></mask><mask id="moon-path-mask"><rect width="200" height="200" fill="black"></rect><circle r="60" cx="110" cy="110" stroke-width="13" stroke="white" fill="white"></circle></mask></defs><g mask="url(#global-mask)"><g class="blips"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let { x, y } = each_array[i];
    $$payload.out.push(`<circle class="dot svelte-1npiy41"${attr("cx", x)}${attr("cy", y)} r="12"></circle>`);
  }
  $$payload.out.push(`<!--]--></g><circle cx="110" cy="110" r="60" stroke-width="13" fill="none" stroke="black" mask="url(#moon-mask)" class="ring svelte-1npiy41"></circle><circle r="60" cx="110" cy="45" stroke="black" stroke-width="15" fill="none" mask="url(#moon-path-mask)" class="float ring svelte-1npiy41"></circle></g></svg></div>`);
  pop();
}
function Hamburger($$payload, $$props) {
  let { size = 24 } = $$props;
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`);
}
const colors = [
  "#EF4444",
  // vibrant red
  "#F59E0B",
  // amber
  "#10B981",
  // emerald
  "#3B82F6",
  // blue
  "#8B5CF6",
  // violet
  "#EC4899"
  // pink
];
function Name($$payload, $$props) {
  push();
  let dashedVisible = false;
  const name = "Osa Mannella";
  const each_array = ensure_array_like(name.split(""));
  $$payload.out.push(`<div><svg fill="none" height="24" width="145" viewBox="0 0 145 24" class="svelte-1sbuc9j"><text x="0" y="14" text-anchor="start" dominant-baseline="middle" font-size="24" font-family="Lato"${attr_class("svelte-1sbuc9j", void 0, { "dashed-visible": dashedVisible })}><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let char = each_array[i];
    $$payload.out.push(`<tspan${attr("stroke", colors[i % colors.length])}>${escape_html(char)}</tspan>`);
  }
  $$payload.out.push(`<!--]--></text></svg></div>`);
  pop();
}
function Header($$payload) {
  let mobileOpen = false;
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Articles", href: "/blog" }
  ];
  const each_array = ensure_array_like(pages);
  $$payload.out.push(`<div class="mt-6 md:mt-16 mb-4 sticky top-0 dark:text-gray-100 font-lato"><div class="z-50 w-full h-14 flex items-center border px-4 md:px-6 backdrop-blur-2xl dark:border-[#282828] border-[#e1e1e1] rounded-xl gap-6 md:gap-8 relative"><a href="/" aria-label="Go to home">`);
  Name($$payload);
  $$payload.out.push(`<!----></a> <nav class="hidden md:flex items-center gap-10"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    $$payload.out.push(`<a${attr("href", page.href)} class="hover:text-rose-300 transition-colors">${escape_html(page.name)}</a>`);
  }
  $$payload.out.push(`<!--]--></nav> <div class="ml-auto flex items-center gap-2 md:gap-3">`);
  MoonSun($$payload);
  $$payload.out.push(`<!----> <button class="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-[#e1e1e1] dark:hover:border-[#282828] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400" aria-label="Open menu" aria-controls="mobile-menu"${attr("aria-expanded", mobileOpen)}>`);
  Hamburger($$payload, {});
  $$payload.out.push(`<!----></button></div>  `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div>`);
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Osa</title>`;
    $$payload2.out.push(`<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>`);
  });
  $$payload.out.push(`<main class="flex flex-col min-h-screen">`);
  Header($$payload);
  $$payload.out.push(`<!----> `);
  children?.($$payload);
  $$payload.out.push(`<!----> `);
  Footer($$payload);
  $$payload.out.push(`<!----></main>`);
}
export {
  _layout as default
};
