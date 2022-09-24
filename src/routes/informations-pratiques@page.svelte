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
	import SeoComponent from '$components/SeoComponent.svelte';
	import CustomLayout from '$components/CustomLayout.svelte';
	import InformationsPratiques from "$components/informations-pratiques/InformationsPratiques.svelte";

    export let defaultSeo;
    export let url;
</script>

<CustomLayout>
    <InformationsPratiques />
</CustomLayout>


<SeoComponent
    pageContent={{
        titleSeo: "Projection Transition - 2022 - Informations pratiques",
        descriptionSeo: "Projection Transition - Le festival ciné-débat pour la transition écologique",
        titleOG: "Projection Transition - 2022 - Informations pratiques",
        descriptionOG: "Retrouvez les informations pratiques de l'édition 2022 !"
    }}
    url={url}
    defaultSeo={defaultSeo}
/> 