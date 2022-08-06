<script>
    import SelecteCity from "./SelecteCity.svelte";
    import Thumbnail from "./Thumbnail.svelte";

    const filmList = [
        { 
            title: 'title', 
            description: 'description', 
            image: 'VIGNETTE_COMBATTANTS_spiraleopaque_2.jpeg', 
            redirect: '/pages/film1',
            cities: ["Paris", "Toulouse", "Nantes"]
        },
        { 
            title: 'title', 
            description: 'description', 
            image: 'VIGNETTE_DARKWATERS_spiraleopaque.jpeg', 
            redirect: '/pages/film2',
            cities: ["Paris"],
        },
        { 
            title: 'title', 
            description: 'description', 
            image: 'VIGNETTE_DARKWATERS_spiraleopaque.jpeg', 
            redirect: '/pages/film2',
            cities: ["Paris"],
        },
    ];

    let selectedCity;

</script>

<div class="d-flex flex-column my-4 text-center align-items-center">
    <h1>Programmation 2022</h1>
    <SelecteCity bind:selectedCity/>
</div>

<div class="row">
    <div class="col">
        <h2 class="text-uppercase">Vendredi 14 octobre</h2>
    </div>
</div>

<div class="row">
    {#each filmList.filter((film) => film.cities.includes(selectedCity)) as film}
        <Thumbnail film={film} />
    {/each}
</div>