<script>
  import svelteLogo from './assets/svelte.svg'
  import billLogo from './assets/bill.png'
  import viteLogo from '/vite.svg'
  import ElectricityCalculator from './lib/ElectricityCalculator.svelte'
</script>

<nav>
  <img src={viteLogo} class="logo" alt="Vite Logo" />
  <h3>   Electricity Cost Calculator </h3>
  <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />

</nav>

<main>


  <ElectricityCalculator />

  <p>
    Add electronic device or light bulb to the item table.
  </p>





</main>

<div class="my-alin-self-end">
  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</div>

<style>
  .logo {
    height: 2em;
    padding: 1.2em 1em 0.5em 1em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

nav {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

</style>
