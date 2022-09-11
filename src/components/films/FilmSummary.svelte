<script>
    import { goto } from '$app/navigation';
    import CustomLayout from '../CustomLayout.svelte';
    import Film from './Film.svelte';
    import { films } from './films.js';
</script>
<div class="bg-lavande">
    <CustomLayout>
        <h1 class="text-center text-pomme">La programmation 2022</h1>
        <div class="d-flex flex-wrap justify-content-center">
            {#each films as film}
                <Film
                    title={film.title}
                    author={film.author}
                    theme={film.theme}
                    image={film.image.summary}
                />
            {/each}
        </div>
    </CustomLayout>

    <div class="d-flex justify-content-center pb-3">
        <button class="btn btn-outline-pomme" on:click={() => goto("/programmation")}>
            En savoir plus
        </button>
    </div>
</div>