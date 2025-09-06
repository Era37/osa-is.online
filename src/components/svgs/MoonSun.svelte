<script lang="ts">
  import { onMount } from "svelte";

  let isSun = $state(false);

  function toggle() {
    isSun = !isSun;
  }

  let isDarkMode = $state(true);
  let loaded = $state(false);
  onMount(() => {
    // Get the current state from the HTML class that was set by the inline script
    isDarkMode = document.documentElement.classList.contains("dark");
    loaded = true;
  });

  function updateBodyClass() {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      isSun = false;
    } else {
      document.documentElement.classList.remove("dark");
      isSun = true;
    }
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    updateBodyClass();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  }

  const cx = 110;
  const cy = 110;
  const radius = 90; // adjust this value to move dots in/out
  const dots = Array.from({ length: 8 }, (_, i) => {
    const angle = i * 45 * (Math.PI / 180); // convert to radians
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });
</script>

<div>
  <svg
    viewBox="0 0 230 230"
    width="35"
    height="35"
    onclick={toggleDarkMode}
    onkeydown={handleKeydown}
    style="transform: rotate(40deg)"
    class="cursor-pointer"
    class:sun={isSun}
    role="button"
    tabindex="0"
    aria-pressed={isSun}
  >
    <defs>
      <mask id="global-mask">
        <rect width="260" height="260" class="mask-bg" />
        <circle
          cx="110"
          cy="110"
          r="60"
          fill="white"
          stroke-width="13"
          stroke="white"
        />
      </mask>
      <mask id="moon-mask">
        <rect width="200" height="200" fill="white" />
        <circle r="60" cx="110" cy="45" fill="black" class="float" />
      </mask>
      <mask id="moon-path-mask">
        <rect width="200" height="200" fill="black" />
        <circle
          r="60"
          cx="110"
          cy="110"
          stroke-width="13"
          stroke="white"
          fill="white"
        />
      </mask>
    </defs>
    <g mask="url(#global-mask)">
      <g class="blips">
        {#each dots as { x, y }, i}
          <circle class="dot" cx={x} cy={y} r="12" />
        {/each}
      </g>

      <circle
        cx="110"
        cy="110"
        r="60"
        stroke-width="13"
        fill="none"
        stroke="black"
        mask="url(#moon-mask)"
        class="ring"
      />
      <circle
        r="60"
        cx="110"
        cy="45"
        stroke="black"
        stroke-width="15"
        fill="none"
        mask="url(#moon-path-mask)"
        class="float ring"
      />
    </g>
  </svg>
</div>

<style>
  .float {
    transition: transform 0.3s ease-in-out;
  }

  .sun .float {
    transform: translateY(-150px);
  }

  .mask-bg {
    fill: black;
    transition: fill 0s linear 0s;
  }

  .sun .mask-bg {
    fill: white !important;
    transition: fill 0s linear 0.25s;
  }

  :global(.dark) .ring {
    stroke: white !important;
  }

  .dot {
    fill: currentColor;
    opacity: 0;
    transform: scale(0.2);
    transform-origin: center;
  }

  .sun .dot {
    animation-name: pop;
    animation-duration: 0.3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }

  .dot:nth-child(1) {
    animation-delay: 0s;
  }
  .dot:nth-child(2) {
    animation-delay: 0.1s;
  }
  .dot:nth-child(3) {
    animation-delay: 0.2s;
  }
  .dot:nth-child(4) {
    animation-delay: 0.3s;
  }
  .dot:nth-child(5) {
    animation-delay: 0.4s;
  }
  .dot:nth-child(6) {
    animation-delay: 0.5s;
  }
  .dot:nth-child(7) {
    animation-delay: 0.6s;
  }
  .dot:nth-child(8) {
    animation-delay: 0.7s;
  }

  @keyframes pop {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
