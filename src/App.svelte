<script>
  import FeedbackList from './components/FeedbackList.svelte'
  import dispatch from './components/FeedbackItem.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'
  import Banner from './components/Banner.svelte'
  import FeedbackForm from './components/FeedbackForm.svelte'
import { add_attribute } from 'svelte/internal';

  let feedback = [
  {
    id: 1,
    rating: 10,
    text: 'Svelte is simple',
  },
  {
    id: 2,
    rating: 9,
    text: 'Svelte is fast.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Svelte makes writing code a blast',
  },
]

$: count = feedback.length
$: average = feedback.reduce((a, {rating}) => a+ rating, 0) / feedback.length

const deleteItem = (theForwardedEvent) => {
  feedback = feedback.filter(item =>
  item.id != theForwardedEvent.detail
  )
}

const addItem = (e) => {
feedback = [e.detail,...feedback]
}

</script>


<main class='container'>

<Banner/>
<FeedbackForm on:new-feedback={addItem}/>
<FeedbackStats {count} {average}/>
<FeedbackList feedback={feedback} on:delete-feedback={deleteItem}/>
<!-- this is called "event forwarding"-->
</main>

