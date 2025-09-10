<script lang="ts">
  let { href, projectName, description, date } = $props<{
    href: string;
    projectName: string;
    description: string;
    date: Date;
  }>();

  const maxDescriptionLength = 100;
  const truncatedDescription = $derived(
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..."
      : description
  );

  const formattedDate = $derived(
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
</script>

<div class="mt-4 md:mt-12">
  <a {href} class="block group" target="_blank">
    <h3 class="text-xl font-bold group-hover:text-rose-300 transition-colors">
      {projectName}
    </h3>
    <p class="my-3">
      {truncatedDescription}
    </p>
    <p class="text-rose-400 text-sm italic">
      Since {formattedDate}
    </p>
  </a>
</div>
