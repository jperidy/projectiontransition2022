<script>
	import config from '$src/config.json';
    import CustomLayout from '../CustomLayout.svelte';
    import FilmSummary from '../films/FilmSummary.svelte';

    export let film;
    export let city;

    const getCityInformations = () => film.cities.find((item) => item.city === city)

    const { day, moment, animator, participants } = getCityInformations();
</script>

<h1 
    class="banner d-flex justify-content-center align-items-center"
    style="background-image: url({config.STATIC_SERVER_URL}/films/programmation/{film.image.programmation});"
    >
    {film.title}
</h1>

<CustomLayout>
    <div class="d-flex justify-content-center align-items-center py-3">
        <div>Todo</div>
        <div class="text-start px-5 content">
            <h1 class="text-white">Résumé du film</h1>
            <p>
                {film.summary}
            </p>
            <h1 class="text-white pt-3">Débat. {film.theme}</h1>
            <p class="text-pomme">
                Début du débat : {moment}. Débat animé par {animator}
            </p>

            <div class="border-bottom border-3 border-pomme line" />
            
            <p class="text-pomme fw-bold">Intervenants :</p>

            {#each participants as participant }
            <p class="text-white">
                <span class="fw-bold">{participant.name}</span>
                <span>{participant.description}</span>
            </p>
                
            {/each}

            <div class="border-bottom border-3 border-pomme line" />

            <h1 class="text-white pt-3">Bande annonce</h1>
            <iframe 
                width="848"
                height="476"
                src="https://www.youtube.com/embed/TVfU66jOx9k"
                title="Projection Transition - 2è édition - Bande-annonce officielle (2021)" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <div>Todo</div>
    </div>
</CustomLayout>

<FilmSummary />

<style>
    .banner {
        min-height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        font-size: 48px;
    }
    .content {
        max-width: 800px;
    }
    .line {
        max-width: 64px;
        margin: 8px 0;
    }

    p {
        margin: 0;
    }
    iframe {
        max-width: 100%;
    }
</style>