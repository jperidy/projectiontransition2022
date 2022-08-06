<script>
    const citiesList = [ "Bruxelles", "Nantes", "Paris", "Toulouse"];
    export let selectedCity = citiesList[2];
    
    let showCityMenu = false;
</script>

<div class="col d-flex align-items-center">
    <em>Sélectionnez votre ville</em>
    <div>
        <button 
            class="btn d-flex align-items-center justify-content-end"
            on:click={() => showCityMenu = !showCityMenu}
        >
            <h2 class="mx-3">{selectedCity}</h2>
            <i class="bi bi-caret-down-fill"></i>
        </button>
        {#if showCityMenu}
            <ul class="list-group position-absolute">
                {#each citiesList as city }
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