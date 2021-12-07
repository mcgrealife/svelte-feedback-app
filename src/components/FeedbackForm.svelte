<script>
    import {v4 as uuidv4} from 'uuid'
    import Button from './Button.svelte'
    import {createEventDispatcher} from 'svelte'

    let text = ''
    let btnDisabled = true
    let min = 10
    let encouragement = ` You're Typing!!!! :)`
    $: secretMessage = ''

    let dispatch = createEventDispatcher()


    const handleInput = () => {
        if (text.trim().length < min) {
            btnDisabled = true
        } else {
            btnDisabled = false
        }
    }

    const handleSubmit = () => {
        if(text.trim().length > min) {
            const newFeedback = {
            id: uuidv4(),
            text: text,
            rating: Math.floor(Math.random()*10)
            }
        dispatch('new-feedback',newFeedback)
        text=''
        secretMessage=''
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="input-group">
    <input
      type="text"
      on:input={handleInput}
      bind:value={text}
      placeholder="Write on this wall"
    />

    <Button type={"submit"} disabled={btnDisabled}>Send</Button>
    <br />
    {(secretMessage = secretMessage + encouragement.charAt(text.length))}
  </div>
</form>
