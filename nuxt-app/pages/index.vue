<template>
  <div class="bg-grey flex flex-col md:flex-row p-6 text-white h-screen">
    <div class="mx-auto mt-32">
      <div class="pb-3">
        <img
          src="https://avatar.jessica-is.gay/496432681614180382"
          alt="Jessica's Avatar"
          class="h-44 rounded-xl"
        />
      </div>
      <div class="text-5xl font-extrabold">
        Hey, I'm
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600"
          >Jessica</span
        >.
      </div>
      <TypeWriter />
      <div class="pt-4 max-w-sm text-lg font-medium" v-html="aboutMe"></div>
      <ul class="pl-2 flex space-x-4 pt-2">
        <li class="cursor-pointer">
          <a target="_blank" href="https://www.reddit.com/user/Era3037/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              class="fill-white hover:-translate-y-1 transition-all hover:fill-salmon"
            >
              <path
                d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"
              />
            </svg>
          </a>
        </li>
        <li class="cursor-pointer">
          <a
            target="_blank"
            href="https://discordhub.com/profile/768615938055471116"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="hover:fill-salmon ease-out duration-300 fill-white hover:-translate-y-1"
              height="30"
              width="30"
              viewBox="0 0 127.14 96.36"
            >
              <defs></defs>
              <g id="图层_2" data-name="图层 2">
                <g id="Discord_Logos" data-name="Discord Logos">
                  <g
                    id="Discord_Logo_-_Large_-_White"
                    data-name="Discord Logo - Large - White"
                  >
                    <path
                      class="cls-1"
                      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li class="cursor-pointer">
          <a target="_blank" href="https://github.com/Era37"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="hover:fill-salmon ease-out duration-300 fill-white hover:-translate-y-1"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </li>
        <li class="cursor-pointer">
          <a
            target="_blank"
            href="https://open.spotify.com/user/vvknrxqpb2g7ql3dx3l6m09ro"
            ><svg
              class="hover:fill-salmon ease-out duration-300 hover:-translate-y-1 fill-white"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
              />
            </svg>
          </a>
        </li>
      </ul>
      <div class="font-extrabold text-xl pt-4">
        My
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-500"
          >Favorite</span
        >
        Songs
      </div>
      <div class="space-y-2 py-2">
        <Song
          v-for="(song, i) in songs"
          :key="i"
          :name="song.track.name"
          :image="song.track.album.images[1].url"
          :artist="song.track.album.artists[0].name"
          :endpoint="song.track.external_urls.spotify"
        />
      </div>
    </div>
    <div class="mr-auto mt-32 mx-auto flex-col flex pb-10">
      <div class="text-5xl font-extrabold mx-auto">
        My
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500"
          >Blogs</span
        >.
      </div>
      <div class="pt-6 space-y-3" v-if="blogs.length">
        <Blog
          v-for="(blog, i) in blogs"
          :key="i"
          :title="blog.title"
          :emoji="blog.emoji"
          :date="Number(blog.date)"
          :description="blog.description"
          :url="blog.url"
          :est_time="blog.est_read_time"
        />
      </div>
      <div v-else class="flex py-8">
        <p class="text-gray-400 text-center font-medium m-auto">
          There are no blogs to see here :(
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRuntimeConfig } from "#imports";

export default {
  setup() {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    return { apiBase };
  },
  data() {
    return {
      aboutMe: `Hey! My name is Jessica, I'm a ${this.age()} year old trans girl from Canada. I'm a fullstack developer who works with Python, Node.js, Vue, Tailwind, Rust and much more. I have a very amazing girlfriend named <a class="infline-flex text-salmon hover:brightness-125" href="https://paulie.works/">pauline</a>. I also love animated super heroes and painting my nails! My prefered pronouns are she/her.`,
      blogs: [],
      songs: [],
    };
  },
  methods: {
    async getEntries(endpoint) {
      return await (await fetch(this.apiBase + endpoint)).json();
    },
    age() {
      const born = 1142958600;
      const age = Date.now() / 1000 - born;
      return Math.floor(age / 31_536_000);
    },
  },
  computed: {},
  async created() {
    const values = [
      { stateValue: "blogs", endpoint: "blogs" },
      { stateValue: "songs", endpoint: "spotifySongs" },
    ];
    values.forEach(async (value) => {
      const { endpoint, stateValue } = value;
      // @ts-ignore
      this[stateValue] = await this.getEntries(endpoint);
    });
  },
};
</script>

<style></style>
