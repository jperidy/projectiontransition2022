<script context='module'>
    
    import { getSeo } from '../actions/seoActions';
    import { getFonts } from '../actions/fontsActions';
    import { getNavBar } from '../actions/navActions';
    import { getFooter } from "../actions/footerActions";
    import config from '$src/config.json';
    
    export async function load({}) {

        const { navBar } = await getNavBar();
        const { footer } = await getFooter();
        const { seo } = await getSeo();
        const { fonts } = await getFonts();
        return { 
            status: 200, 
            props: {
                seo, 
                fonts,
                navBar,
                footer
            }
        };
    };
</script>

<script>

    import '../mains.min.css';
    import Nav from '../components/nav/Nav.svelte';
    import Footer from '../components/footer/Footer.svelte';
	import ContactButton from '../components/contact/ContactButton.svelte';

    export let seo;
    export let fonts;
    export let navBar;
    export let footer;

</script>

<svelte:head>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="icon" type="image/png" href={config.STATIC_SERVER_URL + seo.FAVICON_48_48} sizes="48x48" />
    <link rel="icon" type="image/png" href={config.STATIC_SERVER_URL + seo.FAVICON_64_64} sizes="64x64" />
    <link rel="icon" type="image/png" href={config.STATIC_SERVER_URL + seo.FAVICON_96_96} sizes="96x96" />
    <link rel="icon" type="image/png" href={config.STATIC_SERVER_URL + seo.FAVICON_128_128} sizes="128x128" />
    <link rel="icon" type="image/png" href={config.STATIC_SERVER_URL + seo.FAVICON_196_196} sizes="196x196" />
    
    <!-- work in progress to add fonts from googleapis -->
    {#if fonts && fonts.length > 0}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        {#each fonts as font}
            <link href={`${font.href}`} rel="stylesheet">
        {/each}
    {/if}
</svelte:head>

<div id='up'></div>

<!-- <ContactButton /> -->

<main>
    <Nav navBar={navBar}/>
    <div class="m-0">
        <div class="overlay">
            <div class="warning bg-tangerine px-3 py-3 text-center rounded">
                <h1>
                    Le festival revient du 17 au 19 novembre 2023 à Paris, Angers, Toulouse, Lyon et Bruxelles ! Toutes les informations 
                    seront disponibles ici prochainement.<br> 
                </h1>
                <p class="contact mt-3">
                    Pour toute question : 
                    <a href="mail:contact@projectiontransition.fr">contact@projectiontransition.fr</a>
                </p>
            </div>
        </div>
        <slot></slot>
    </div>
</main>

<footer>
	<Footer footer={footer} />
</footer>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.6);
        z-index: 10;
    }
    .warning {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 8px 8px 10px rgba(255, 255, 255, 0.4);
    }
    .contact {
        font-size: 20px;
    }
    a {
        color: white;
    }
</style>