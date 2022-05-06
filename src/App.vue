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
          description: "Xiana is a multipurpose bot to manage your discord community. I've spent many months and hundreds of hours on Xiana making Xiana an amazing tool for server admins aswell as a fun discord bot that can be used by everyone."
        },
      ]
    }
  },
  components: {
    Project,
  }
}
</script>
