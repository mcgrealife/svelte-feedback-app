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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
  },
]

$: count = feedback.length
$: average = feedback.reduce((a, {rating}) => a+ rating, 0) / feedback.length

const deleteItem = (theForwardedEvent) => {

  let filteredItems = feedback.filter(item =>
  item.id != theForwardedEvent.detail
  )
feedback = filteredItems
}

const addItem = (e) => {
feedback = [...feedback, e.detail]

}

</script>


<main class='container'>

<Banner/>
<FeedbackForm on:new-feedback={addItem}/>
<FeedbackStats {count} {average}/>
<FeedbackList feedback={feedback} on:delete-feedback={deleteItem}/>
<!-- this is called "event forwarding"-->
</main>

