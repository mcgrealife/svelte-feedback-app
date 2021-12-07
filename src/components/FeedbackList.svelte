<script>
import FeedbackItem from './FeedbackItem.svelte'
import {fade, scale,slide} from 'svelte/transition'

export let feedback = [];

</script>

<h1>Svelte Wall</h1>

{#if feedback.length > 0}
{#each feedback as item (item.id)}

<div in:scale out:slide>
    <FeedbackItem item={item} on:delete-feedback/>
</div>
<!--  this 'on:delete-feedback' will be forwarded up to app.svelete, without creating and calling another createEventDispatcher. I only need to create that in the child component that initiates the event-->
{/each}
{:else}
    <h1 class="empty">Add some text!</h1>

{/if}

<style>
    .empty {
        background-color:teal;
    }
</style>

