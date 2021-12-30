<script lang="ts">
	// Start: Local Imports
	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';

	// Data
	import { environment } from '$environment/environment';
	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {IMetaTagProperties}
	 */
	export let metaData: Partial<IMetaTagProperties> = {};
	// End: Exported Properties

	const BASE_URL: string = environment.launchURL
		? environment.launchURL
		: 'https://sveltekit-starter-one.vercel.app';

	metaData = {
		...metaData,
		robots: 'index,follow',
		openGraph: {
			...metaData.openGraph,
			url: `${BASE_URL}${metaData.url}/`,
			title: metaData.title,
			description: metaData.description,
			locale: 'en_US',
		},
		twitter: {
			...metaData.twitter,
			title: metaData.title,
			description: metaData.description,
		},
	};

	const jsonLd = (content: unknown) =>
		`<${'script'} type="application/ld+json">${JSON.stringify(content)}</${'script'}>`;

	$: {
		if (!!metaData.image && typeof metaData.image === 'string') {
			metaData.openGraph = {
				...metaData.openGraph,
				image: `${BASE_URL}${metaData.image}`,
			};
			metaData.twitter = {
				...metaData.twitter,
				image: `${BASE_URL}${metaData.image}`,
			};
		}
		if (typeof metaData.image === 'object') {
			metaData.openGraph = {
				...metaData.openGraph,
				image: `${BASE_URL}${metaData.image}`,
				'image:width': metaData.image.width,
				'image:height': metaData.image.height,
				'image:alt': metaData.image.alt || metaData.title,
			};
			metaData.twitter = {
				...metaData.twitter,
				image: `${BASE_URL}${metaData.image}`,
				'image:alt': metaData.image.alt || metaData.title,
			};
		}
	}

	const isProd = environment.production;
</script>

<svelte:head>
	<meta name="robots" content="{metaData.robots}" />
	<meta name="googlebot" content="{metaData.robots}" />

	{#if metaData && metaData.title}
		<title>{metaData.title}</title>
		<meta name="title" content="{metaData.title}" />
	{/if}

	{#if metaData && metaData.description}
		<meta name="description" content="{metaData.description}" />
	{/if}

	{#if metaData && metaData.keywords}
		<meta name="keywords" content="{metaData.keywords.join(', ')}" />
	{/if}

	{#if metaData && metaData.url && BASE_URL}
		<link rel="canonical" href="{`${BASE_URL}${metaData.url}/`}" />
	{/if}

	{#if metaData && metaData.twitter}
		<meta name="twitter:card" content="summary_large_image" />

		{#each Object.entries(metaData.twitter) as tag}
			{#if tag[0] && tag[1]}
				<meta name="twitter:{tag[0]}" content="{tag[1]}" />
			{/if}
		{/each}
	{/if}

	{#if metaData && metaData.openGraph}
		{#each Object.entries(metaData.openGraph) as tag}
			{#if tag[0] && tag[1]}
				<meta name="og:{tag[0]}" content="{tag[1]}" />
			{/if}
		{/each}
	{/if}

	{#if metaData && metaData.article}
		{#each Object.entries(metaData.article) as tag}
			{#if tag[0] && tag[1]}
				<meta name="article:{tag[0]}" content="{tag[1]}" />
			{/if}
		{/each}
	{/if}

	{#if metaData && metaData.url}
		{@html jsonLd({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			url: metaData.url,
			logo: `${BASE_URL}/favicon.ico`,
		})}
	{/if}

	{#if metaData && metaData.url && metaData.searchUrl}
		{@html jsonLd({
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			url: metaData.url,
			potentialAction: {
				'@type': 'SearchAction',
				target: metaData.searchUrl,
				'query-input': 'required name=search_term_string',
			},
		})}
	{/if}
</svelte:head>
