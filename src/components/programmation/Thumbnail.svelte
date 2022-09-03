<script>
    import config from "$src/config.json";
    import { goto } from "$app/navigation";
    export let film;
</script>

<div class="wrapper col-12 col-lg-6 p-2 m-0">
    <button 
        class="button btn rounded-0 border-0 shadow-lg w-100" 
        style="background-image: url({config.STATIC_SERVER_URL}/2022/programmation/{film.image});"
        on:click={() => goto(`${film.redirect}-${film.city}`)}
    >
        <div class={`film-wrapper d-flex flex-column p-3 rounded ${film.styles.color}`}>
            <h1>{film.title}</h1>
            <div class="author">de {film.author}</div>
            <div class="description">{film.description}</div>
            <div class="moment">{film.moment}</div>
        </div>
    </button>
</div>

<style>
    .wrapper {
        overflow: hidden;
        height: 450px;
    }
    .button {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        transition: all .5s;
    }
    .button:focus,
    .button:hover {
        transform: scale(1.2);
    }
    .film-wrapper {
        max-width: 300px;
        margin: auto;
        background-color: rgba(255, 255, 255, 0.6);
    }
</style>