<template>
    <div class="grow">
        <div class="flex pb-10">
            <div class="mx-auto text-6xl sm:text-8xl font-bold">My <span class="text-transparent bg-clip-text bg-gradient-to-br from-sky-200 via-sky-500 to-sky-900 pb-4">Projects</span>.</div>
        </div>
        <ProjectTemplate v-for="(value, i) in projects"
            :key=i
            :url="value.url"
            :description="value.description"
            :title="value.title"
            :image="value.image_location"
            :position="value.position"/>
    </div>
</template>

<script>
import ProjectTemplate from "../components/ProjectTemplate.vue";

export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    image_location: require("../assets/imgs/xiana.png"),
                    description: "Xiana is a multipurpose bot to manage your discord community. I've spent many months and hundreds of hours on Xiana making Xiana an amazing tool for server admins aswell as a fun discord bot that can be used by everyone.",
                    url: "https://xiana.cc/",
                    title: "Xiana",
                    position: "<div class=\"inline-flex underline decoration-sky-500\">Founder</div> and lead <div class=\"underline decoration-[#5c6fff] inline-flex\">Developer</div>."
                },
            ]
        }
    },
    components: {
        ProjectTemplate,
    }
}
</script>