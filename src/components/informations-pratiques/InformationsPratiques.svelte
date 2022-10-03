<script>
	import { city } from './../../store.js';
	import SelecteCity from "../programmation/SelecteCity.svelte";
    import { CINEMAS } from "../../data-local/2022/films"
	import MapComponent from "../MapComponent.svelte";
	import ContactForm from '../ContactForm.svelte';

    const onlyUnique = (value, index, self) => {
        return self.findIndex((selfValue) => selfValue.name === value.name) === index;
    }
    $: cinemasList = Object.keys(CINEMAS)
        .map((key) => CINEMAS[key])
        .filter((cinema) => cinema.organization === $city)
        .filter(onlyUnique);
    
    let contactType = ""
    const selectContactHandler = (e) => {
        contactType = e.target.value;
    }
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

        <div class="col-12 col-md-6 text-center">
            {#if location.access}
            <div>
                <strong>Accès</strong> : {location.access}
            </div>
            {/if}
            <div class="d-flex flex-wrap justify-content-center py-3">
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
                    Se rendre au cinéma
                </button>
            </div>
        </div>
    </div>
{/each}

<div class="mt-5">
    <h2 id="contact">Contactez-nous</h2>
    <div class="col-12 col-md-6 mb-3 pe-4">
        <select class="form-select" on:change={selectContactHandler}>
            <option selected disabled>Qui souhaitez-vous contacter ?</option>
            <option value="contact">Contact grand public</option>
            <option value="presse">Contact presse</option>
            <option value="dev">Développeur web</option>
        </select>
    </div>
    <ContactForm values={[{type: contactType}]}/>
</div>

<style>
    button {
        min-width: 180px;
    }
</style>