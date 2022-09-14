<script>
    import { CITIES } from "../films/films";

    export let selectedCity = Object.values(CITIES).find(x => x === "Paris");
    
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
                {#each Object.values(CITIES) as city }
                    <button 
                        type="button" 
                        class="list-group-item list-group-item-action"
                        on:click={() => {
                            selectedCity = city;
                            showCityMenu = false;
                        }}
                    >
                        {city}
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
    }
</style>