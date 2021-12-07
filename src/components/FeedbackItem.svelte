<script>
import Card from './Card.svelte'

export let item = []

</script>


<Card>
    <li>{item.rating}: {item.text}</li> 
</Card>