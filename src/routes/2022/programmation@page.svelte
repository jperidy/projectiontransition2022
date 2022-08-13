<script context='module'>
    import { getSeo } from "../../actions/seoActions";
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
    import Programmation from "$components/programmation/Programmation.svelte"
    import SeoComponent from "../../components/SeoComponent.svelte";

    export let defaultSeo;
    export let url;

    const size = {
        xs: 12,
        sm: 10,
        md: 10,
        lg: 10,
        xl: 10 
    }
    const filmList = [
        { title: 'title', description: 'description', image: '/image.png', redirect: '/new-page' },
        { title: 'title', description: 'description', image: '/image.png', redirect: '/new-page' },
    ]
</script>

<div class={`container-fluid p-0 m-0 `}>
    <div class="row p-3">
        <div class={`col-${size.xs} offset-${Math.round((12-size.xs)/2)} col-sm-${size.sm} offset-sm-${Math.round((12-size.sm)/2)} col-md-${size.md} offset-md-${Math.round((12-size.md)/2)} col-lg-${size.lg} offset-lg-${Math.round((12-size.lg)/2)} col-xl-${size.xl} offset-xl-${Math.round((12-size.xl)/2)}`}>
            <Programmation />
        </div>
    </div>
</div>

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