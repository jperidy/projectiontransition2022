<script>
    export let hasBeenModified;
    
    import { beforeNavigate } from '$app/navigation';

    beforeNavigate(({ cancel }) => {
        if (hasBeenModified && !window.confirm('Attention vous avez des modifications non enregistrées')) {
            cancel();
        }
    });

    const beforeUnload = (event) => {
        if (hasBeenModified) {
            event.preventDefault();
            event.returnValue = '';
            return '';
        }
    }
</script>
<svelte:window on:beforeunload={beforeUnload} /> 