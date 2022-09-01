<script context='module'>
    import { getSeo } from "$actions/seoActions";
    export async function load({ url }) {
        const { seo } = await getSeo();
        return {
            status:200, 
            props: {
                defaultSeo: seo, 
                url,
            }
        };
    }
</script>

<script>
    import SeoComponent from "$components/SeoComponent.svelte";
    import Home from "$components/home/Home.svelte";

    export let defaultSeo;
    export let url;
</script>

<Home />

<SeoComponent
    pageContent={{
        titleSeo: "Projection Transition - Programmation 2022",
        descriptionSeo: "Projection Transition - Le festival ciné-débat pour la transition écologique",
        titleOG: "Projection Transition - Programmation 2022",
        descriptionOG: "Retrouvez la programmation de l'édition 2022 !"
    }}
    url={url}
    defaultSeo={defaultSeo}
/> 