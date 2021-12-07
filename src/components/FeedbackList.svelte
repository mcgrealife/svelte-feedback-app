<script>
  import { FeedbackStore } from "../stores.js";
  import { fade, scale, slide } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

<h1>Svelte Wall</h1>
{#if $FeedbackStore.length > 0}
  {#each $FeedbackStore as item (item.id)}
    <div in:scale out:slide>
      <FeedbackItem {item} />
    </div>
  {/each}
{:else}
  <h1 in:fade class="empty">Add some text!</h1>
{/if}

<style>
  .empty {
    background-color: teal;
  }
</style>
