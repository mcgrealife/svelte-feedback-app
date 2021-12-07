// stores can be readable or writable

import {writable} from 'svelte/store'

export const FeedbackStore = writable(
    [
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

)