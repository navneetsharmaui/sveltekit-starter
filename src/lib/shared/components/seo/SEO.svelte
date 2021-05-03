<script lang="ts">
	import type { IMetaTagProperties } from '$lib/models';

	/**
	 * @type {IMetaTagProperties}
	 */
	export let metaData: Partial<IMetaTagProperties> = {};

	metaData = {
		robots: 'index,follow',
		openGraph: {
			title: metaData.title,
			description: metaData.title,
			url: metaData.url,
			locale: 'en_US',
			...metaData.openGraph,
		},
		twitter: {
			title: metaData.title,
			description: metaData.title,
			...metaData.twitter,
		},
		rss: 'feeds/blog.atom',
		atom: 'feeds/blog.rss',
		...metaData,
	};

	const jsonLd = (content) =>
		`<${'script'} type="application/ld+json">${JSON.stringify(content)}<script></${'script'}>`;

	$: {
		if (!!metaData.image && typeof metaData.image === 'string') {
			metaData.openGraph = {
				image: metaData.image,
				...metaData.openGraph,
			};
			metaData.twitter = {
				image: metaData.image,
				...metaData.twitter,
			};
		}
		if (typeof metaData.image === 'object') {
			metaData.openGraph = {
				image: metaData.url,
				'image:width': metaData.image.width,
				'image:height': metaData.image.height,
				'image:alt': metaData.image.alt || metaData.title,
				...metaData.openGraph,
			};
			metaData.twitter = {
				image: metaData.url,
				'image:alt': metaData.image.alt || metaData.title,
				...metaData.twitter,
			};
		}
	}
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

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

	{#if metaData && metaData.url}
		<link rel="canonical" href="{metaData.url}" />
	{/if}

	{#if metaData && metaData.sitemapUrl}
		<link rel="sitemap" type="application/xml" href="{metaData.sitemapUrl}" />
	{/if}

	{#if metaData && metaData.rss}
		<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="{metaData.rss}" />
	{/if}

	{#if metaData && metaData.atom}
		<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="{metaData.atom}" />
	{/if}

	{#if metaData && metaData.twitter}
		<meta name="twitter:card" content="summary_large_image" />

		{#each Object.keys(metaData.twitter) as tag}
			<meta name="twitter:{tag}" content="{metaData.twitter[tag]}" />
		{/each}
	{/if}

	{#if metaData && metaData.openGraph}
		{#each Object.keys(metaData.twitter) as tag}
			<meta name="og:{tag}" content="{metaData.openGraph[tag]}" />
		{/each}
	{/if}

	{#if metaData && metaData.article}
		{#each Object.keys(metaData.article) as tag}
			<meta name="article:{tag}" content="{metaData.article[tag]}" />
		{/each}
	{/if}

	{#if metaData && metaData.url}
		{@html jsonLd({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			url: metaData.url,
			logo: metaData.logoUrl,
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
