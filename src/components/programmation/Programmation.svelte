<script>
    import { DAYS, films } from "../films/films";
    import SelecteCity from "./SelecteCity.svelte";
    import Thumbnail from "./Thumbnail.svelte";

    let selectedCity;

</script>

<div class="d-flex flex-column my-5 text-center align-items-center">
    <h1 class="text-pomme">La programmation 2022</h1>
    <SelecteCity bind:selectedCity/>
</div>

<div class="day-container mx-auto">
    {#each Object.values(DAYS) as day }
        <div class="row mt-3">
            <div class="col border-top border-bottom border-white py-3">
                <h2 class="text-uppercase text-center m-0">{day}</h2>
            </div>
        </div>
    
        <div class="row mt-1">
            {#each films.filter(
                (film) => film.cities.find((city) => city.city === selectedCity && city.day === day)
            ) as film}
                <Thumbnail film={{ 
                    ...film, 
                    ...film.cities.find((city) => city.city === selectedCity && city.day === day)
                }} />
            {/each}
        </div>
    {/each}
</div>

<style>
    .day-container {
        max-width: 1200px;
    }
</style>