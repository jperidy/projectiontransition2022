<script>
    import { goto } from '$app/navigation';
	import { films } from '../../data-local/2022/films';
    import CustomLayout from '../CustomLayout.svelte';
    import Film from './Film.svelte';

    export let city = null;

    let filmList = films;
    if (city) {
        filmList = filmList.filter((film) => film.cities.find((item) => item.city === city));
    }
</script>
<div class="bg-lavande">
    <CustomLayout size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
        <h1 class="text-center text-pomme">La programmation 2022</h1>
        <div class="d-flex flex-wrap justify-content-center">
            {#each filmList as film}
                <Film film={film} city={city}/>
            {/each}
        </div>
    </CustomLayout>

    {#if !city}
        <div class="d-flex justify-content-center pb-3">
            <button class="btn btn-outline-pomme more-details" on:click={() => goto("/programmation")}>
                En savoir plus
            </button>
        </div>
    {/if}
</div>

<style>
    .more-details {
        font-family: 'omotenashi_2regular';
        font-size: 24px;
    }
</style>