<script>
	import config from '$src/config.json';
    import CustomLayout from '../CustomLayout.svelte';
    import FilmSummary from '../films/FilmSummary.svelte';

    export let film;
    export let city;

    const getCityInformations = () => film.cities.find((item) => item.city === city)

    const { day, moment, animator, participants, cinema } = getCityInformations();
</script>

<h1 
    class="banner d-flex justify-content-center align-items-center"
    style="background-image: url({config.STATIC_SERVER_URL}/films/programmation/{film.image.programmation});"
    >
    {film.title}
</h1>

<CustomLayout>
    <div class="row justify-content-center align-items-start py-3 g-4">
        <div class="col-12 col-lg-2 d-flex flex-column align-items-center align-items-lg-start side-panel">
            <img src={`${config.STATIC_SERVER_URL}/films/summary/${film.image.summary}`} alt="affiche" class="img-fluid d-none d-lg-flex">
            <p class="text-pomme fw-bold pt-2">Un film de {film.author}</p>
            <p class="text-white m-0 p-0"><strong>Année de sortie :</strong> {film.releaseDate}</p>
            <p class="text-white m-0 p-0"><strong>Durée :</strong> {film.duration}</p>
            {#if film.originalTitle}
                <p class="text-white m-0 p-0"><strong>Titre original :</strong> {film.originalTitle}</p>
            {/if}
        </div>
        <div class="col-12 col-lg-8 d-flex flex-column align-items-center align-items-lg-start px-5 content">
            <h1 class="text-white text-center text-lg-start">Résumé du film</h1>
            <p>{film.summary}</p>
            <h1 class="text-white text-center text-lg-start pt-3">Débat. {film.theme}</h1>
            <p class="text-pomme">
                Début du débat : {moment}. 
                {#if animator}
                    Débat animé par {animator}
                {/if}
            </p>

            <div class="border-bottom border-3 border-pomme line" />
            
            <p class="text-pomme fw-bold">Intervenants :</p>

            {#each participants as participant}
                {#if participant && participant.name}
                    <p class="text-white">
                        <span class="fw-bold">{participant.name}</span>
                        <span>{participant.description}</span>
                    </p> 
                {/if}
            {/each}

            <div class="border-bottom border-3 border-pomme line" />

            <p>{film.debat}</p>

            <h1 class="text-white text-center text-lg-start pt-3">Bande annonce</h1>
            <iframe 
                width="848"
                height="476"
                src={`https://www.youtube.com/embed/${film.trailer}`}
                title={film.title} 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>

            
        </div>
        <div class="col-12 col-lg-2 d-flex flex-column align-items-start align-items-center align-items-lg-start side-panel">
            <h2 class="text-pomme">Projection à {cinema.city}</h2>
            <p class="fw-bold">{cinema.name}</p>
            <p class="p-0 m-0">{cinema.address}</p>
            <p class="p-0 m-0">{cinema.zip} {cinema.city}</p>
            <a class="text-white mt-3" href="/pages/informationsPratiques">Plan d'accés</a>
            {#if cinema.ticketingOpenDate && new Date() > new Date(cinema.ticketingOpenDate)}
                <button 
                    class='btn btn-outline-pomme rounded-0 mt-3'
                    on:click={() => window.open(cinema.ticketingRedirection, "_blank")}
                    >
                    Réserver
                </button>
            {:else}
                <div class="mt-3 fst-italic">Ouverture de la billetterie prochainement</div>
            {/if}

        </div>
    </div>
</CustomLayout>

<FilmSummary city={city} />

<style>
    .banner {
        min-height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        font-size: 48px;
        padding: 16px;
    }
    /* .content {
        max-width: 800px;
        min-width: 600px;
    } */
    /* .side-panel {
        min-width: 200px;
        max-width: 200px;;
    } */
    .line {
        max-width: 64px;
        margin: 8px 0;
        width: 64px;
    }

    p {
        margin: 0;
    }
    iframe {
        max-width: 100%;
    }
</style>