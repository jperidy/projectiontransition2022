<script>
	import EquipeComponent from '$components/EquipeComponent.svelte';
	import PartenairesComponent from '$components/PartenairesComponent.svelte';
	import EditoComponent from '$components/EditoComponent.svelte';
    
    import TextComponent from "$components/TextComponent.svelte";
    import ImageComponent from "$components/ImageComponent.svelte";
    import CarouselComponent from "$components/CarouselComponent.svelte";
    import VideoComponent from "$components/VideoComponent.svelte";
    import LieuxComponent from "$components/LieuxComponent.svelte";
    import ContactForm from "$components/ContactForm.svelte";
    import LayoutComponent from "$components/LayoutComponent.svelte";
    import SouslligneComponent from "$components/SouslligneComponent.svelte";
    import CompressFileComponent from "$components/CompressFileComponent.svelte";
    import MultiLayerComponent from "$components/MultiLayerComponent.svelte";
    import { scrollingToElement } from "$utils/scrollingFunctin";
    import ButtonComponent from "$components/ButtonComponent.svelte";

    export let type = '';
    export let updateContent = null;
    export let admin = false;
    export let styles = [];
    export let values = [];
    export let edit = false;
    export let city = '';
    export let isSelected = {select: false, position: null};


    // function to automaticly scroll to element to be editing
    const uniqueId = 'component_' + new Date().valueOf().toString();
    $: if (isSelected.select) scrollingToElement(uniqueId);

</script>

<div id={uniqueId}>

    <!-- Unit components -->
    {#if type === 'layoutComponent'}
        <LayoutComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
            city={city}
        />
    {/if}

    {#if type === 'multiLayerComponent'}
        <MultiLayerComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    {#if type === 'textComponent'}
        <TextComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    {#if type === 'imageComponent'}
        <ImageComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    {#if type === 'sousligneComponent'}
        <SouslligneComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    {#if type === 'compressComponent'}
        <CompressFileComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    {#if type === 'videoComponent'}
        <VideoComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    {#if type === 'contactComponent'}
        <ContactForm
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    {#if type === 'buttonComponent'}
        <ButtonComponent
            bind:values={values}
            bind:styles={styles}
            isSelected={isSelected}
        />
    {/if}

    <!-- extract unit component Map and Dropdown -->
    {#if type === 'infoComponent'}
        <LieuxComponent
            bind:values={values}
            bind:styles={styles}
            updateContent={updateContent}
            admin={admin}
            edit={edit}
        />
    {/if}

    <!-- Extrat unit component switch -->
    {#if type === 'carouselComponent'}
        <CarouselComponent
            bind:values={values}
            bind:styles={styles}
            updateContent={updateContent}
            admin={admin}
            edit={edit}
        />
    {/if}

    <!-- custom components with automatics process -->





    <!-- Do not use this component >> combien Layout and unit components -->
    {#if type === 'editoComponent'}
        <EditoComponent
            bind:values={values}
            bind:styles={styles}
            updateContent={updateContent}
            admin={admin}
            edit={edit}
        />
    {/if}
    {#if type === 'partenairesComponent'}
        <PartenairesComponent
            bind:values={values}
            bind:styles={styles}
            updateContent={updateContent}
            admin={admin}
            edit={edit}
        />
    {/if}
    {#if type === 'equipeComponent'}
        <EquipeComponent
            bind:values={values}
            bind:styles={styles}
            updateContent={updateContent}
            admin={admin}
            edit={edit}
        />
    {/if}
</div>