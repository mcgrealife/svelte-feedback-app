<script>

    export let type = 'button'
    export let disabled
</script>

<button {type} {disabled}>
    <slot></slot>
</button>

<style>
   

    button:hover {
        transform: scale(0.98);
        opacity: 0.9;
    }

    button:disabled {
        opacity: 0.9;

    }
</style>


