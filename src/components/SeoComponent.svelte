<script>
    import config from '../config.json'
    const STATIC_SERVER_URL = config.STATIC_SERVER_URL;

    export let pageContent;
    export let url;
    export let defaultSeo;
</script>

<svelte:head>
    <title>{`${pageContent && pageContent.titleSeo ? pageContent.titleSeo : defaultSeo.DEFAULT_TITLE}`}</title>
	<meta name='description' content={`${pageContent && pageContent.descriptionSeo ? pageContent.descriptionSeo : defaultSeo.DEFAULT_DESCRIPTION}`} />
	<meta property="og:title" content={`${pageContent && pageContent.titleOG ? pageContent.titleOG : defaultSeo.DEFAULT_OG_TITLE}`} />
	<meta property="og:description" content={`${pageContent && pageContent.descriptionOG ? pageContent.descriptionOG : defaultSeo.DEFAULT_OG_DESCRIPTION}`} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={STATIC_SERVER_URL + defaultSeo.DEFAULT_OG_IMAGE} />
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="400" />
	<meta property="og:url" content={`${STATIC_SERVER_URL}${url.pathname}`} />
	<meta property="og:locale" content="fr_FR" />
	<meta name="twitter:image" content={STATIC_SERVER_URL + defaultSeo.DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content={`${pageContent && pageContent.descriptionOG ? pageContent.descriptionOG : defaultSeo.DEFAULT_OG_DESCRIPTION}`} />
</svelte:head>