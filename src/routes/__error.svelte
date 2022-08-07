<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status // same as status: status
            }
        };
    }
</script>

<script>
    export let message;
    export let status;
</script>

<div class="container">
    <div class="wrapper">
        <h1>Veuillez nous excuser, cette page n'est pas disponible</h1>
        <div><strong>Erreur {status}</strong> : {message}.</div>
        <div>Peut-être cette page est en maintenance et non disponible ou vérifier l'url saisie.</div>
    </div>
</div>

<style>
    .container {
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        margin-bottom: 24px;
    }
</style>