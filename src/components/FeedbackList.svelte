<script>
import FeedbackItem from './FeedbackItem.svelte'

export let feedback = [];

</script>

<h1>Feedback List</h1>


{#each feedback as item (item.id)}
<FeedbackItem item={item}/>
{/each}
