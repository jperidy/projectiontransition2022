<script>
	import config from '$src/config.json';
    export let title;
    export let author;
    export let theme;
    export let image;
</script>

<div class="p-2 film">
    <img src={`${config.STATIC_SERVER_URL}/home/${image}`} alt={title} class="img-fluid mb-2" />
    <h4>{title}</h4>
    <p class="fst-italic mb-1">de {author}</p>
    <div class="border-top border-white w-25 border-2 mb-1"></div>
    <p>Projection, suivie d'un débat sur le thème <span class="fst-italic">{theme}</span></p>
</div>

<style>
    img {
        height: 256px;
    }
    .film {
        width: 200px;
    }
</style>