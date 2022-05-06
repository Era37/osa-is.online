<template>
  <!-- Main div -->
  <div class="bg-grey md:flex text-white h-screen p-6">
    <div class="mx-auto md:my-32 my-12">
      <img 
        src="https://av.dbl.tf/768615938055471116"
        alt="Jessica's Avatar"
        class="h-44 rounded-xl"
      >
      <div class="text-5xl font-extrabold">
        Hey, I'm <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">Jessica</span>.
      </div>
      <div class="pt-3 text-xl font-semibold text-salmon">
        Fullstack Developer
      </div>
      <div class="pt-4 max-w-sm text-lg font-medium">
        {{ aboutMe }}
      </div>
      <ul class="pl-2 flex space-x-4 pt-2">
        <li class="cursor-pointer">
          <a target="_blank" href="https://twitter.com/Era3037"><svg xmlns="http://www.w3.org/2000/svg" class="hover:fill-salmon ease-out duration-300 fill-white hover:-translate-y-1" width="26" height="31" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
        </li>
        <li class="cursor-pointer">
          <a target="_blank" href="https://discordhub.com/profile/768615938055471116"><svg xmlns="http://www.w3.org/2000/svg" class=" hover:fill-salmon ease-out duration-300 fill-white hover:-translate-y-1" height="30" width="30" viewBox="0 0 127.14 96.36"><defs></defs><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg></a>
        </li>
        <li class="cursor-pointer">
          <a target="_blank" href="https://github.com/Era37"><svg xmlns="http://www.w3.org/2000/svg" class="hover:fill-salmon ease-out duration-300 fill-white hover:-translate-y-1" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
        </li>
        <li class="cursor-pointer">
          <a target="_blank" href="https://open.spotify.com/user/vvknrxqpb2g7ql3dx3l6m09ro"><svg class="hover:fill-salmon ease-out duration-300 hover:-translate-y-1 fill-white" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/></svg></a>
        </li>
      </ul>
    </div>
    <div class="mr-auto my-32 flex-col flex pb-10">
      <div class="text-5xl font-extrabold mx-auto">
        My <span class="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-blue-400">Projects</span>.
      </div>
      <div class="pt-6 space-y-3">
        <Project v-for="(project, i) in projects"
          :key="i"
          :name="project.name"
          :img="project.img"
          :text_gradient="project.text_gradient"
          :description="project.description"
          :url="project.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./components/Project.vue";

export default {
  data() {
    return {
      aboutMe: "Hey! My name is Jessica, I'm a trans girl from Canada. I'm a fullstack developer who works with Python, Node.js, Vue, Tailwind, Rust and much more. I play Rainbow Six Seige in my free time and love to paint my nails!",
      projects: [
        {
          name: "Xiana",
          img: require('./assets/imgs/xiana.png'),
          text_gradient: "text-[#61c2c5]",
          description: "Xiana is a multipurpose bot to manage your discord community. I've spent many months and hundreds of hours on Xiana making Xiana an amazing tool for server admins aswell as a fun discord bot that can be used by everyone.",
          url: "https://xiana.cc",
        },
      ]
    }
  },
  components: {
    Project,
  }
}
</script>
