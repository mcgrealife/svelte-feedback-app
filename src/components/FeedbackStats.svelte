<script>
    import {FeedbackStore} from '../stores'

    $: count = $FeedbackStore.length
    $: average = $FeedbackStore.reduce((a, {rating}) => a+ rating, 0) / count
</script>

<div class="stats">
    <div>{count} Items</div>
    <div>Average rating: {average}</div>
</div>


<style>
    .stats {
        display:flex;
        justify-content: space-between;
        font-weight: 600;   
    }
</style>