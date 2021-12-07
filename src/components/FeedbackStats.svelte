<script>
    export let count
    export let average
</script>


<div class="stats">


    <div>{count} Items</div>
    <div>Average rating: {average}    </div>
    
</div>


<style>
    .stats {
        display:flex;
        justify-content: space-between;
        font-weight: 600;
        
    }
</style>