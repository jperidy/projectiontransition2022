<script context='module'>
    import { getSeo } from "../../actions/seoActions";
    import { films } from "../../data-local/2022/films";
    export async function load({ params, url }) {
        const [name, city] = params.data.split('/');
        const film = films.find((film) => (
            new RegExp(name).test(film.redirect)
            && film.cities.find((item) => item.city === city)
        ));
        
        if (!film) {
            return { status: 404, error: new Error(`Not found: ${url.pathname}`) }
        }

        const { seo } = await getSeo();

        return { status: 200, props: { film, city, defaultSeo: seo, url } };
    }
</script>

<script>
    import FilmDescription from "../../components/films/FilmDescription.svelte";
    import SeoComponent from "../../components/SeoComponent.svelte";

    export let defaultSeo;
    export let url;
    export let film;
    export let city;
</script>

<FilmDescription film={film} city={city} />

<SeoComponent
    pageContent={{
        titleSeo: `Projection Transition - ${film.title} de ${film.author} à ${city}`,
        descriptionSeo: "Projection Transition - Le festival ciné-débat pour la transition écologique",
        titleOG: "Projection Transition - Programmation 2022",
        descriptionOG: "Retrouvez la programmation de l'édition 2022 !"
    }}
    url={url}
    defaultSeo={defaultSeo}
/> 