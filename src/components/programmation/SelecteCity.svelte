<script>
	import { city } from './../../store.js';
    import { CITIES } from "../../data-local/2022/films";

    $: selectedCity = Object.values(CITIES).find(x => x === $city);
    
    let showCityMenu = false;
</script>

<div class="col d-flex flex-column align-items-center pt-3">
    <em>Sélectionnez votre ville</em>
    <div>
        <button 
            class="btn d-flex align-items-center border border-white rounded-0 py-1 mt-1 city-button"
            on:click={() => showCityMenu = !showCityMenu}
        >
            <h2 class="mx-3 p-0 my-0 flex-grow-1">{selectedCity}</h2>
            <i class="bi bi-caret-down-fill"></i>
        </button>
        {#if showCityMenu}
            <ul class="list-group position-absolute city-list">
                {#each Object.values(CITIES) as item }
                    <button 
                        type="button" 
                        class="list-group-item list-group-item-action"
                        on:click={() => {
                            selectedCity = item;
                            city.set(item);
                            showCityMenu = false;
                        }}
                    >
                        {item}
                    </button>
                {/each}
            </ul>
        {/if}
    </div>
</div>

<style>
    .city-button {
        width: 200px;
    }
    .city-list {
        width: 200px;
        z-index: 10;
    }
</style>