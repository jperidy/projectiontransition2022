<script>
    import config from "$src/config.json";
    import { goto } from "$app/navigation";
    export let film;

</script>

<div class="wrapper col-12 col-md-6 col-lg-6 p-0 m-0 border border-5 border-outremer">
    <button 
        class="button btn rounded shadow-lg w-100" 
        style="background-image: url({config.STATIC_SERVER_URL}/2022/programmation/{film.image});"
        on:click={() => goto(film.redirect)}
    >
        <div>{film.title}</div>
        <div>{film.description}</div>
    </button>
</div>

<style>
    .wrapper {
        overflow: hidden;
        height: 450px;
        border-radius: 16px;
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
</style>