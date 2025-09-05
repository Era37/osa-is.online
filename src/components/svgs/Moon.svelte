<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<svg
  viewBox="0 0 200 200"
  width="24"
  height="24"
  style="transform: rotate(40deg)"
  on:click
  class="cursor-pointer"
>
  <defs>
    <mask id="moon-mask">
      <rect width="200" height="200" fill="white" />
      <circle r="80" cx="100" cy="25" fill="black" />
    </mask>
    <mask id="moon-path-mask">
      <rect width="200" height="200" fill="black" />
      <circle r="83" cx="100" cy="95" fill="white" />
    </mask>
  </defs>

  <!-- The stroke extends outside the radius -->
  <circle
    cx="100"
    cy="100"
    r="80"
    stroke-width="13"
    fill="none"
    stroke="white"
    mask="url(#moon-mask)"
  />
  <circle
    r="80"
    cx="100"
    cy="25"
    stroke="white"
    stroke-width="15"
    fill="none"
    mask="url(#moon-path-mask)"
  />
</svg>
