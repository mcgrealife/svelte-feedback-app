<script>
import Card from './Card.svelte'

export let item = []

</script>


<Card>
    
        <div class="num-display">
            {item.rating}:
        </div>

        <div class="close">
            x
        </div>
        
        <p class="text-display">
            {item.text}
        </p>
    
</Card>

<style>
    .num-display {
        font-weight:800;
    }

    .close {
        align-items: flex-end;
        position: absolute;
        top: 20px;
        right: 30px;
    }
    .text-display {
        font-weight: 500;
    }

   
</style>