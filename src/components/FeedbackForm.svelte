<script>
    import Button from './Button.svelte'

    let text = ''
    let btnDisabled = true
    $: buttonText = 'You found a hidden button ;)'
    let min = 3
    let encouragement = ` You're Typing!!!! :)`
    console.log(encouragement.length)
    $: secretMessage = ''


    const handleInput = () => {
        if (text.trim().length < min) {
            buttonText = 'You found a hidden button ;)'
            btnDisabled = true
        } else {
            buttonText = 'Send'
            btnDisabled = false
        }
    }
</script>

<form>

    <div class="input-group">
        <input type="text" on:input={handleInput} bind:value = {text} placeholder="Write on this wall">

        <Button type={'submit'} disabled={btnDisabled}>{buttonText}</Button>
        <br/>
            {
            secretMessage = secretMessage + encouragement.charAt(text.length)
            
            }
            
        
        
    
    
    </div>
</form>