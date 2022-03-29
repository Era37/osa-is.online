<template>
    <div class="flex pb-10">
        <div class="mx-auto text-8xl font-bold">My <div class="inline-flex text-transparent bg-clip-text bg-gradient-to-br from-sky-200 via-sky-500 to-sky-900 pb-4">Projects</div>.</div>
    </div>
    <ProjectTemplate :url="xiana.url" :description="xiana.xiana_description" title="Xiana" :image="xiana.image_location">
        <div class="inline-flex underline decoration-sky-500">Founder</div> and lead <div class="underline decoration-[#5c6fff] inline-flex">Developer</div>.
    </ProjectTemplate>
</template>

<script>
import ProjectTemplate from "../components/ProjectTemplate.vue";

export default {
    name: "Projects",
    data() {
        return {
            xiana: {
                image_location: require("../assets/imgs/xiana.png"),
                xiana_description: "Xiana is a multipurpose bot to manage your discord community. I've spent many months and hundreds of hours on Xiana making Xiana an amazing tool for server admins aswell as a fun discord bot that can be used by everyone.",
                url: "https://xiana.cc/"
            }
        }
    },
    components: {
        ProjectTemplate,
    }
}
</script>