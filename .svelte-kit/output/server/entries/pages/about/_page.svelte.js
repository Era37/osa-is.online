import { w as ensure_array_like, y as attr } from "../../../chunks/index.js";
import { T as Title } from "../../../chunks/Title.js";
import "clsx";
function Squiggly($$payload) {
  $$payload.out.push(`<svg viewBox="0 0 800 100" width="300" height="40" xmlns="http://www.w3.org/2000/svg"><path d="
      M20 50
      Q 45 35, 70 50
      T 120 50
      T 170 50
      T 220 50
      T 270 50
      T 320 50
      T 370 50
      T 420 50
      T 470 50
      T 520 50
      T 570 50
      T 620 50
      T 670 50
      T 720 50
      T 770 50
    " fill="none" class="stroke-amber-400" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 10" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"></animate></path></svg>`);
}
function Bluesky($$payload) {
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 48 48" role="img" aria-label="Bluesky" class="size-6"><title>Bluesky</title><path d="M12.104,7.999C16.919,11.614,22.099,18.944,24,22.877c1.902-3.933,7.081-11.263,11.896-14.878	C39.371,5.391,45,3.373,45,9.795c0,1.283-0.735,10.774-1.167,12.315c-1.499,5.357-6.962,6.724-11.821,5.897	C40.506,29.452,42.667,34.241,38,39.03c-8.863,9.094-12.738-2.282-13.732-5.197c-0.182-0.534-0.267-0.784-0.268-0.572	c-0.001-0.213-0.086,0.037-0.268,0.572C22.738,36.748,18.863,48.124,10,39.03c-4.667-4.789-2.506-9.577,5.988-11.023	c-4.86,0.827-10.323-0.539-11.821-5.897C3.735,20.569,3,11.077,3,9.795C3,3.373,8.63,5.391,12.104,7.999L12.104,7.999z"></path></svg>`);
}
function Github($$payload) {
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" role="img" aria-label="GitHub" class="size-7"><title>GitHub</title><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>`);
}
function Mastodon($$payload) {
  $$payload.out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 80 90" role="img" aria-label="Mastodon" class="size-6"><title>Mastodon</title><path d="M73.7014 17.4323C72.5616 9.05152 65.1774 2.4469 56.424 1.1671C54.9472 0.950843 49.3518 0.163818 36.3901 0.163818H36.2933C23.3281 0.163818 20.5465 0.950843 19.0697 1.1671C10.56 2.41145 2.78877 8.34604 0.903306 16.826C-0.00357854 21.0022 -0.100361 25.6322 0.068112 29.8793C0.308275 35.9699 0.354874 42.0498 0.91406 48.1156C1.30064 52.1448 1.97502 56.1419 2.93215 60.0769C4.72441 67.3445 11.9795 73.3925 19.0876 75.86C26.6979 78.4332 34.8821 78.8603 42.724 77.0937C43.5866 76.8952 44.4398 76.6647 45.2833 76.4024C47.1867 75.8033 49.4199 75.1332 51.0616 73.9562C51.0841 73.9397 51.1026 73.9184 51.1156 73.8938C51.1286 73.8693 51.1359 73.8421 51.1368 73.8144V67.9366C51.1364 67.9107 51.1302 67.8852 51.1186 67.862C51.1069 67.8388 51.0902 67.8184 51.0695 67.8025C51.0489 67.7865 51.0249 67.7753 50.9994 67.7696C50.9738 67.764 50.9473 67.7641 50.9218 67.7699C45.8976 68.9569 40.7491 69.5519 35.5836 69.5425C26.694 69.5425 24.3031 65.3699 23.6184 63.6327C23.0681 62.1314 22.7186 60.5654 22.5789 58.9744C22.5775 58.9477 22.5825 58.921 22.5934 58.8965C22.6043 58.8721 22.621 58.8505 22.6419 58.8336C22.6629 58.8167 22.6876 58.8049 22.714 58.7992C22.7404 58.7934 22.7678 58.794 22.794 58.8007C27.7345 59.9796 32.799 60.5746 37.8813 60.5733C39.1036 60.5733 40.3223 60.5733 41.5447 60.5414C46.6562 60.3996 52.0437 60.1408 57.0728 59.1694C57.1983 59.1446 57.3237 59.1233 57.4313 59.0914C65.3638 57.5847 72.9128 52.8555 73.6799 40.8799C73.7086 40.4084 73.7803 35.9415 73.7803 35.4523C73.7839 33.7896 74.3216 23.6576 73.7014 17.4323ZM61.4925 47.3144H53.1514V27.107C53.1514 22.8528 51.3591 20.6832 47.7136 20.6832C43.7061 20.6832 41.6988 23.2499 41.6988 28.3194V39.3803H33.4078V28.3194C33.4078 23.2499 31.3969 20.6832 27.3894 20.6832C23.7654 20.6832 21.9552 22.8528 21.9516 27.107V47.3144H13.6176V26.4937C13.6176 22.2395 14.7157 18.8598 16.9118 16.3545C19.1772 13.8552 22.1488 12.5719 25.8373 12.5719C30.1064 12.5719 33.3325 14.1955 35.4832 17.4394L37.5587 20.8853L39.6377 17.4394C41.7884 14.1955 45.0145 12.5719 49.2765 12.5719C52.9614 12.5719 55.9329 13.8552 58.2055 16.3545C60.4017 18.8574 61.4997 22.2371 61.4997 26.4937L61.4925 47.3144Z"></path></svg>`);
}
function _page($$payload) {
  const meAlt = "Myself taking a mirror selfie adjacent to my boyfriend";
  const links = [
    {
      name: "Bluesky",
      href: "https://bsky.app/profile/osa.is.online",
      icon: Bluesky
    },
    {
      name: "Mastodon",
      href: "https://mastodon.social/@osa",
      icon: Mastodon
    },
    { name: "Github", href: "https://github.com/osa", icon: Github }
  ];
  const each_array = ensure_array_like(links);
  $$payload.out.push(`<div class="md:mt-16 mt-4"><div class="mb-4">`);
  Title($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<!---->ABOUT`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> <div class="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10 mt-10 md:mt-14"><div class="max-w-xl"><h1 class="text-4xl md:text-6xl font-black mb-8 md:mb-14">Hi, I'm Osa. I'm a software engineer.</h1> <div class="text-lg md:text-2xl space-y-6"><p>I'm a software engineer and student passionate about building
            meaningful digital experiences. I love exploring new technologies
            and turning ideas into reality through code.</p> <p>When I'm not coding, you'll find me diving deep into computer
            science concepts, contributing to open source projects, or
            experimenting with the latest web frameworks and tools.</p> <p>I believe in the power of technology to solve real-world problems
            and create positive impact. Every project is an opportunity to
            learn, grow, and make a difference.</p></div></div> <div class="mb-auto flex flex-col w-full md:w-auto"><img src="/images/me.jpeg"${attr("alt", meAlt)} class="rounded-xl max-w-72 mb-auto self-center md:self-auto"/> <span class="self-center md:self-auto">`);
  Squiggly($$payload);
  $$payload.out.push(`<!----></span> <p class="text-sm italic text-gray-500 self-center md:self-auto">Myself taking a mirror selfie adjacent to my boyfriend</p> <div class="flex md:ml-auto gap-2.5 my-4 justify-center md:justify-end"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    const Icon = link.icon;
    $$payload.out.push(`<a${attr("href", link.href)} class="fill-[#505050] hover:fill-white transition-all duration-300 hover:-translate-y-1">`);
    Icon($$payload, {});
    $$payload.out.push(`<!----></a>`);
  }
  $$payload.out.push(`<!--]--></div></div></div></div></div>`);
}
export {
  _page as default
};
