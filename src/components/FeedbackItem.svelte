<script>
  import { FeedbackStore } from "../stores.js";
  import Card from "./Card.svelte";

  export let item = [];

  const handleDelete = (itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id != itemId);
    });
  };
</script>

<Card>
  <div class="topRow">
    <div class="num-display">
      {item.rating}:
    </div>
    <button class="close" on:click={() => handleDelete(item.id)}>x</button>
  </div>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display {
    font-weight: 800;
  }

  .topRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: x-large;
  }
  .text-display {
    font-weight: 500;
    overflow-wrap: break-word;
  }
</style>
