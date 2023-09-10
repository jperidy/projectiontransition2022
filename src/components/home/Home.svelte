<script>
	import config from '$src/config.json';
    import CustomLayout from '../CustomLayout.svelte';
    import FilmSummary from '../films/FilmSummary.svelte';
    import SidePanel from "./SidePanel.svelte";  
</script>

<CustomLayout>
    <div class="d-flex justify-content-center align-items-center py-3">
        <SidePanel 
            description="Pouvons-nous faire autre chose qu'utiliser le cinéma, cette arme d'émotion massive, pour réveiller les consciences et bousculer les indifférences ? Je ne l'imagine pas."
            author="Vincent Lindon,"
            authorDescription="discours d'ouverture du Festival de Cannes 2022"
        />
        <div class="text-center px-5 content">
            <h1 class="text-primary">Ouvrir le débat écologique via le cinéma</h1>
            <p>Projection Transition le festival de ciné-débat autour de la transition écologique organisé par 
                Les Shifters, association de bénévoles du Shift Project, fait son grand retour 
                du 14 au 16 octobre prochains. A travers films et débats, les festivaliers 
                sont invités à se créer leur propre récit plein d'espoir et de nouveaux repères et imaginaires.
            </p>
            <img src="home/feuille-jaune.png" alt="" class="img-fluid petale">
            <h1 class="text-primary pt-3">Un monde à rebâtir</h1>
            <p>
                Afin de faire écho au dernier rapport du GIEC alertant sur les impacts croissants 
                du dérèglement climatique et soulignant les inégalités face à ceux-ci, 
                Projection Transition portera haut et fort la thématique de la justice climatique 
                et sociale. Six films, chacun suivi d'un débat, permettront de mettre l'accent sur les 
                enjeux de justice à différentes échelles à travers une programmation engagée. Découvrez la bande-annonce.
            </p>
            <iframe 
                width="848"
                height="476"
                src="https://www.youtube.com/embed/8jyFzkIz86g"
                title="Projection Transition - 2è édition - Bande-annonce officielle (2021)" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <SidePanel 
            description="Depuis toujours le cinéma s'est emparé de thèmes de société, et, pour une partie c'est une question environnementale qui était au centre de l'intrigue (...) Venez nombreux !"
            author="Jean-Marc Jancovici,"
            authorDescription="Président du Shift Project"
        />
    </div>
</CustomLayout>

<FilmSummary />

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
</style>