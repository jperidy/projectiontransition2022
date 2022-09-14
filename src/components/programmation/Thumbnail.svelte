<script>
    import config from "$src/config.json";
    import { goto } from "$app/navigation";
    export let film;
</script>

<div class="wrapper col-12 col-lg-6 py-2 my-3 m-0 d-flex flex-column">
    <div class="flex-grow-1">
        <h2 class="text-pomme">{film.moment}. {film.title} <em>de {film.author}</em></h2>
        <p><strong>Suivi du débat : </strong><span class='debat'>{film.theme}</span></p>
    </div>
    <div>
        <div 
            class="thumbnail rounded-0 border-0 shadow-lg w-100 d-flex" 
            style="background-image: url({config.STATIC_SERVER_URL}/films/programmation/{film.image.programmation});"
            >
            <button 
                class={`btn btn-transparent film-wrapper rounded ${film.styles.color}`}
                on:click={() => goto(`${film.redirect}/${film.city}`)}
            >
                <h2 class="m-0">En savoir plus</h2>
            </button>
        </div>
    </div>
</div>

<style>
    .wrapper {
        overflow: hidden;
        min-height: 400px;
    }
    .thumbnail {
        width: 100%;
        height: 300px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .film-wrapper {
        margin: auto auto 16px auto;
        background-color: rgba(255, 255, 255, 0.6);
    }
    em {
        font-family: "Roboto-Regular";
        font-size: 16px;
        font-style: normal;
        color: white;
        margin-left: 4px;
    }
    .debat {
        font-style: italic;
    }
</style>