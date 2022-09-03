<script>
	import { goto } from '$app/navigation';
	import config from '$src/config.json';
    import CustomLayout from '../CustomLayout.svelte';
    import Film from './Film.svelte';
    import SidePanel from "./SidePanel.svelte";

    const films = [
        {
            title: "En guerre",
            author: "Stéphan Brizé",
            theme : "Transition écologique, atout ou péril pour l'emploi ?",
            image: "en-guerre.jpg",
        },
        {
            title: "Goliath",
            author: "Frédéric Tellier",
            theme : "Modèles agricoles : la faim justifie-t-elle les moyens ?",
            image: "goliath.jpg",
        },
        {
            title: "Le garçon qui dompta le vent",
            author: "Chiwetel Ejiofor",
            theme : "Inégalités climatiques : quelles solutions pour les pays les plus vulnérables ?",
            image: "le-garcon-qui-dompta-le-vent.jpg",
        },
        {
            title: "Les fils de l'homme",
            author: "Alfonso Cuaròn",
            theme : "Réfugiés climatiques : quelles frontières dans un monde en crise ?",
            image: "les-fils-de-l-homme.jpg",
        },
        {
            title: "Sans filtre",
            author: "Ruben Ostlund",
            theme : "Urgent : société sous influence cherche nouveaux modèles !",
            image: "sans-filtre.jpg",
        },
        {
            title: "Soleil vert",
            author: "Richard Fleischer",
            theme : "Plus d'humains, moins d'humanité ?",
            image: "soleil-vert.jpg",
        },
    ]
</script>

<CustomLayout>
    <div class="d-flex justify-content-center align-items-start py-3">
        <SidePanel 
            description="Pouvons-nous faire autre chose qu'utiliser le cinéma, cette arme d'émotion massive, pour réveiller les consciences et bousculer les indifférences ? Je ne l'imagine pas."
            author="Vincent Lindon,"
            authorDescription="discours d'ouverture du festival de Cannes 2022"
        />
        <div class="text-center px-5 content">
            <h1 class="text-pomme">Ouvrir le débat écologique via le cinéma</h1>
            <p>Projection Transition le festival de ciné-débat autour de la transition écologique organisé par 
                Les Shifters, association de bénévoles du Shift Project, fait son grand retour 
                du 14 au 16 octobre prochains. A travers films et débats, les festivaliers 
                sont invités à se créer leur propre récit plein d'espoir et de nouveaux repères et imaginaires.
            </p>
            <img src={`${config.STATIC_SERVER_URL}/home/petale.png`} alt="" class="img-fluid petale">
            <h1 class="text-pomme pt-3">En 2022, rendons justice au climat</h1>
            <p>Afin de faire écho au dernier rapport du GIEC alertant sur les impacts croissants 
                du déréglement climatique et soulignant les inégalités face à ceux-ci, 
                Projection Transition portera haut et fort la thématique de la justice climatique 
                et sociale. Six films, chacun suivi d'un débat, permettront de mettre l'accent sur les 
                enjeux de justice à différentes échelles à travers une programmation engagée. Découvrez la band annonce.
            </p>
        </div>
        <SidePanel 
            description="Depuis toujours le cinéma s'est emparé de thèmes de société, et, pour une partie c'est une question environnementale qui était au centre de l'intrigue (...) Venez nombreux !"
            author="Jean-Marc Jancovici,"
            authorDescription="Président du Shift Project"
        />
    </div>
    <div class="text-center my-3 mx-auto px-5 video-container">
        <iframe 
            width="848"
            height="476"
            src="https://www.youtube.com/embed/TVfU66jOx9k"
            title="Projection Transition - 2è édition - Bande-annonce officielle (2021)" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
</CustomLayout>

<div class="bg-lavande">
    <CustomLayout>
        <h1 class="text-center text-pomme">La programmation 2022</h1>
        <div class="d-flex flex-wrap justify-content-center">
            {#each films as film}
                <Film
                    title={film.title}
                    author={film.author}
                    theme={film.theme}
                    image={film.image}
                />
            {/each}
        </div>
    </CustomLayout>

    <div class="d-flex justify-content-center pb-3">
        <button class="btn btn-outline-pomme" on:click={() => goto("/2022/programmation")}>
            En savoir plus
        </button>
    </div>
</div>

<style>
    .content {
        max-width: 800px;
    }
    .petale {
        width: 32px;
    }

    iframe {
        max-width: 100%;
    }

    .video-container {
        max-width: 800px;
    }
</style>