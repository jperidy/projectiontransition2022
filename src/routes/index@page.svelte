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
        titleSeo: "Projection Transition | 17 > 19 novembre 2023",
        descriptionSeo: "Festival de ciné-débat pour la transition écologique",
        titleOG: "Projection Transition | 17 > 19 novembre 2023",
        descriptionOG: "Festival de ciné-débat pour la transition écologique !"
    }}
    url={url}
    defaultSeo={defaultSeo}
/> 