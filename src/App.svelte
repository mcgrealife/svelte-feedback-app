<script>
  let firstName = "Michael";
  let lastName = "McGreal";
  let color = "blue";
  let showText = true;
  let users = [
    {
      id: "1",
      name: "moogle",
    },
    {
      id: "2",
      name: "margle",
    },
    {
      id: "3",
      name: "wipple",
    },
  ];

  $: name = firstName + " " + lastName;

  const toggle = () => {
    color = color === "blue" ? (color = "red") : (color = "blue");
    showText = !showText;
    users = [
      ...users,
      {
        id: "4",
        name: "wopple",
      },
    ];
  };
</script>

<main>
  <h1 style="color: {color}">Hello {name}!</h1>
  {#if showText}
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  {:else}
    <p>noText</p>
  {/if}
  <button on:click={toggle}>Click</button>

  <h3>Users</h3>
  {#each users as user (user.id)}
    <p>{user.id}: {user.name}</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 1.4em;
    font-weight: 500;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
