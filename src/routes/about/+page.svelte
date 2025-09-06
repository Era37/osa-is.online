<script>
  import Title from "../../components/Title.svelte";
  import Squiggly from "../../components/svgs/Squiggly.svelte";
  import Bluesky from "../../components/svgs/Bluesky.svelte";
  import Github from "../../components/svgs/Github.svelte";
  import Mastodon from "../../components/svgs/Mastodon.svelte";
  const meAlt = "Myself taking a mirror selfie adjacent to my boyfriend";

  const links = [
    {
      name: "Bluesky",
      href: "https://bsky.app/profile/osa.is.online",
      icon: Bluesky,
    },
    {
      name: "Mastodon",
      href: "https://mastodon.social/@osa_mannella",
      icon: Mastodon,
    },
    {
      name: "Github",
      href: "https://github.com/osa-mannella",
      icon: Github,
    },
  ];
</script>

<div class="md:mt-16 mt-4">
  <div class="mb-4">
    <Title>ABOUT</Title>
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10 mt-10 md:mt-14"
    >
      <div class="max-w-xl">
        <h1 class="text-4xl md:text-6xl font-black mb-8 md:mb-14">
          Hi, I'm Osa. I'm a software engineer.
        </h1>
        <div class="text-lg md:text-2xl space-y-6">
          <p>
            I'm a software engineer and student passionate about building
            meaningful digital experiences. I love exploring new technologies
            and turning ideas into reality through code.
          </p>

          <p>
            When I'm not coding, you'll find me diving deep into computer
            science concepts, contributing to open source projects, or
            experimenting with the latest web frameworks and tools.
          </p>

          <p>
            I believe in the power of technology to solve real-world problems
            and create positive impact. Every project is an opportunity to
            learn, grow, and make a difference.
          </p>
        </div>
      </div>
      <div class="mb-auto flex flex-col w-full md:w-auto">
        <img
          src="/images/me.jpeg"
          alt={meAlt}
          class="rounded-xl max-w-72 mb-auto self-center md:self-auto"
        />
        <span class="self-center md:self-auto">
          <Squiggly />
        </span>
        <p class="text-sm italic text-gray-500 self-center md:self-auto">
          {meAlt}
        </p>
        <div class="flex md:ml-auto gap-2.5 my-4 justify-center md:justify-end">
          {#each links as link}
            {@const Icon = link.icon}
            <a
              href={link.href}
              target="_blank"
              class="fill-[#505050] hover:fill-white transition-all duration-300 hover:-translate-y-1"
            >
              <Icon />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
