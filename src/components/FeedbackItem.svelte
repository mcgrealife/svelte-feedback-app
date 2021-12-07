<script>
	import {createEventDispatcher} from 'svelte'
  import Card from "./Card.svelte";

  export let item = [];

  const dispatch = createEventDispatcher()

  const handleDelete = (itemId) => {
   dispatch('delete-feedback',itemId)
  };
</script>

<Card>
	<div class="topRow">

		<div class="num-display">
			{item.rating}:
		</div>

		<button class="close" on:click={() => handleDelete(item.id)}>
			 x 
		</button>

	</div>
  

  <p class="text-display">
    {item.text}
  </p>
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
  }
  .text-display {
    font-weight: 500;
  }
</style>
