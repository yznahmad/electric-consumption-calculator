<!-- src/ElectricityCalculator.svelte -->
<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import billLogo from "../assets/bill.png";

    const items = writable([]);
    let cpkwh = 0.1;

    function addItem() {
        items.update((i) => [...i, { name: '', wattage: 0, hoursPerDay: 0, daysPerMonth: 0 }]);
    }

    function removeItem(index) {
        items.update((i) => i.filter((_, idx) => idx !== index));
    }

    function updateItem(index, field, value) {
        items.update((i) => {
            const updatedItems = [...i];
            updatedItems[index][field] = value;
            return updatedItems;
        });
    }

    onMount(() => {
        // Load items from localStorage if available
        const storedItems = JSON.parse(localStorage.getItem('items'));
        if (storedItems) {
            items.set(storedItems);
        }
    });

    function saveItems() {
        localStorage.setItem('items', JSON.stringify(items()));
    }
</script>

<div class="w-full text-center m-4">
    <img src={billLogo} alt="Bill icon" class="logo-bill">

    <label for="costpkwh" class="block px-4 text-sm font-medium text-gray-700">Cost of electricity per kWh</label>
    <input name="costpkwh" type="number" min="0.01" step="0.01" id="items" bind:value={cpkwh} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
</div>
<button on:click={addItem}>Add Item</button>

<table class="w-full table mt-1 table-striped">
    <thead>
    <tr>
        <th>Name</th>
        <th>Wattage</th>
        <th>Hours/Day</th>
        <th>Days/Month</th>
<!--        <th>kWh</th>-->
        <th>kWh/Day</th>
        <th>kWh/Month</th>
        <th>Cost/Month</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    {#each $items as item, index (index)}
        <tr>
            <td><input type="text" bind:value={item.name} on:input={() => updateItem(index, 'name', item.name)} /></td>
            <td><input type="number" bind:value={item.wattage} on:input={() => updateItem(index, 'wattage', item.wattage)} /></td>
            <td><input type="number" bind:value={item.hoursPerDay} on:input={() => updateItem(index, 'hoursPerDay', item.hoursPerDay)} /></td>
            <td><input type="number" bind:value={item.daysPerMonth} on:input={() => updateItem(index, 'daysPerMonth', item.daysPerMonth)} /></td>
<!--            <td>{(item.wattage * item.hoursPerDay * item.daysPerMonth) / 1000}</td>-->
            <td>{(item.wattage * item.hoursPerDay) / 1000}</td>
            <td>{(item.wattage * item.hoursPerDay * item.daysPerMonth) / 1000}</td>
<!--            <td>{(item.wattage * item.hoursPerDay * item.daysPerMonth * cpkwh) / 1000}</td>-->
            <td>{((item.wattage * item.hoursPerDay * item.daysPerMonth * cpkwh) / 1000).toFixed(3) }</td>
            <td><button on:click={() => removeItem(index)}>Remove</button></td>
        </tr>
    {/each}
    </tbody>
</table>



<style>
    .m-4{
        margin: 2.5rem;
    }

    .table th, .table td{
        padding: 0.2rem 0.1rem 0.3rem 0.1rem;
    }

    .logo-bill {
        height: 2em;
        padding: 0 1em 0 1em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo-bill:hover {
        filter: drop-shadow(0 0 4em rgba(255, 211, 62, 0.67));
    }


</style>