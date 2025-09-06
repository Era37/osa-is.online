<script>
  import { colors } from "$lib/index";
  import { onMount } from "svelte";

  let dashedVisible = false;

  onMount(() => {
    setTimeout(() => {
      dashedVisible = true;
    }, 0);
  });

  const name = "Osa Mannella";
</script>

<div>
  <svg fill="none" height="28" width="145" viewBox="0 0 145 28">
    <text
      x="0"
      y="19"
      text-anchor="start"
      dominant-baseline="middle"
      font-size="24"
      font-family="Lato"
      class:dashed-visible={dashedVisible}
    >
      {#each name.split("") as char, i}
        <tspan stroke={colors[i % colors.length]}>{char}</tspan>
      {/each}
    </text>
  </svg>
</div>

<style>
  svg text {
    fill: none;
    stroke-width: 1px;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    transition: stroke-dashoffset 15s ease;
  }

  .dashed-visible {
    stroke-dashoffset: 0;
  }
</style>
