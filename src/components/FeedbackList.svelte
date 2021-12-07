<script>
import FeedbackItem from './FeedbackItem.svelte'

export let feedback = [];

</script>

<h1>Feedback List</h1>


{#each feedback as item (item.id)}
<FeedbackItem item={item} on:delete-feedback/>
<!--  this 'on:delete-feedback' will be forwarded up to app.svelete, without creating and calling another createEventDispatcher. I only need to create that in the child component that initiates the event-->
{/each}
