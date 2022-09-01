<script>
	import config from '$src/config.json';
    export let description;
    export let author;
</script>

<div class="d-none d-md-flex flex-column border-top border-bottom border-2 border-white py-2 align-items-center side-panel">
    <img src={`${config.STATIC_SERVER_URL}/home/guillemet-up.png`} alt="guillement haut" class="img-fluid">
    <div class="text-center py-2 fw-bold fst-italic">{description}</div>
    <img src={`${config.STATIC_SERVER_URL}/home/guillemet-down.png`} alt="guillement bas" class="img-fluid">
    <div class="text-center py-2 fst-italic">{author}</div>
</div>

<style>
    .side-panel {
        min-width: 180px;
        max-width: 180px;;
    }
    img {
        max-width: 40px;
    }
</style>