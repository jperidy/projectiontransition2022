<script>
	import { goto } from '$app/navigation';

</script>
<button class="btn btn-pomme" on:click={() => goto("/informations-pratiques#contact")}>Nous contacter</button>
<style>
    button {
        position: fixed;
        bottom: 32px;
        right: 32px
    }
</style>