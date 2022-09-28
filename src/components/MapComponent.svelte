<script>
	import Loading from './Loading.svelte';

    export let adresse = '';
    export let latitude = 0;
    export let longitude = 0;
    export let mapid = 'id';
    import { browser } from '$app/env'; 
	import { onMount } from 'svelte';
    
    const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'; 
    
    const loadMap = async(adresse, latitude, longitude) => {
        if (browser) {
            const L = await import('leaflet');

            const container = L.DomUtil.get(mapid.toString());
            if(container != null){
                container._leaflet_id = null;
            }
            if (container) {
                const myMap = L.map(mapid.toString()).setView([latitude, longitude], 13);
    
                L.tileLayer(tileLayerUrl, {
                    attribution: attribution
                }).addTo(myMap);
    
                L.marker([latitude, longitude]).addTo(myMap)
                    .bindPopup(`<b>${adresse.replaceAll(/[#|*|_]/g,'')}</b>`)
                    .openPopup();
            }
        }
    }

    onMount(() => loadMap(adresse, latitude, longitude));

    $: loadMap(adresse, latitude, longitude);

</script>

<svelte:head>
    <link 
        rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""
    />
    <script 
        src="https://unpkg.com/leaflet@1.9.1/dist/leaflet.js"
        integrity="sha256-NDI0K41gVbWqfkkaHj15IzU7PtMoelkzyKp8TOaFQ3s="
        crossorigin=""
    ></script>
</svelte:head>


{#if browser}
    <div id={mapid.toString()} class='mapid'></div>
{:else}
    <Loading number={3} color="dark" />
{/if}

<style>
    .mapid { 
        height: 300px;
        z-index: 0;
    }
</style>