<script>
	import { city } from './../../store.js';
	import SelecteCity from "../programmation/SelecteCity.svelte";
    import { CINEMAS } from "../../data-local/2022/films"
	import MapComponent from "../MapComponent.svelte";

    const onlyUnique = (value, index, self) => {
        return self.findIndex((selfValue) => selfValue.name === value.name) === index;
    }
    $: cinemasList = Object.keys(CINEMAS)
        .map((key) => CINEMAS[key])
        .filter((cinema) => cinema.organization === $city)
        .filter(onlyUnique);
</script>

<div class="d-flex flex-column my-5 text-center align-items-center">
    <h1 class="text-pomme">Informations pratiques</h1>
    <SelecteCity />
</div>

{#each cinemasList as location, index}
    <div class="row g-3 mt-3 align-items-center">
        <h2>{location.name}</h2>
        <div class="col-12 col-md-6">
            <MapComponent 
                adresse={`${location.name}, ${location.address}, ${location.zip} ${location.city}`}
                latitude={location.gps.latitude}
                longitude={location.gps.longitude}
                mapid={`${index}`}
            />
        </div>
        <div class="col-12 col-md-6 d-flex flex-md-column align-items-center justify-content-center">
            <button 
                class="btn btn-pomme m-3"
                on:click={window.open(location.website, "_blank")}
            >
                Site web du cinéma
            </button>
            <button 
                class="btn btn-pomme m-3"
                on:click={window.open(location.navigation, "_blank")}
            >
                Lancer la navigation
            </button>
        </div>
    </div>
{/each}

<style>
    button {
        min-width: 50px;
    }
</style>