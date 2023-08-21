<svelte:options accessors={true} />

<script>
  import {fade} from 'svelte/transition';
  import {createPopper} from '@popperjs/core';
  export let title = '';
  export let anchorNode;
  export let show = false;
  let tooltipNode;

$: if (tooltipNode) {
  createPopper(anchorNode, tooltipNode, {
    placement: 'top',
    modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],

  });
}
</script>

{#if show}
  <div transition:fade bind:this={tooltipNode}>
    {title}
  </div>
{/if}

<style>
  div {
    box-shadow: 1px 1px 1px #ddd;
    background: white;
    border-radius: 4px;
    padding: 4px;
    position: absolute;
    color: gray;
    font-family: 'Montserrat', sans-serif;
  }
</style>