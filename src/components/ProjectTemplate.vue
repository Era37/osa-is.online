<template>
    <a :href="url" target="_blank"><div class="mx-auto bg-[#18181b] max-w-md space-y-4 rounded-lg p-4 ease-out transition hover:-translate-y-1 cursor-pointer">
        <div class="flex">
            <div class="flex space-x-4 p-2">
                <img :src="image" class="h-24 rounded-full">
                <p class="text-2xl my-auto font-bold">{{ title }}</p>
            </div>
            <div class="ml-auto font-normal"><slot></slot></div>
        </div>
        <p>
            {{ description }}
        </p>
    </div></a>
</template>

<script>
export default {
    name: "ProjectTemplate",
    props: ["image", "title", "description", "position", "url"],
}
</script>