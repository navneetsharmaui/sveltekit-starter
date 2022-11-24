<script lang="ts">
	// Start: Local Imports
	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';
	import ExternalLink from '$ui/components/external-link/ExternalLink.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	// Start: Local component properties
	const metaData: Partial<IMetaTagProperties> = {
		title: 'About | Sveltekit Starter',
		description: 'About page of Sveltekit starter project',
		url: '/about',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter about'],
		searchUrl: '/about',
	};
	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: About page section -->
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> About Page </h1>
	<div class="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<p>
			Hey, I'm Sveltekit Starter. I'm a Software Developer, writer and creator of&nbsp;
			<ExternalLink href="https://github.com/navneetsharmaui/sveltekit-starter"
				>Sveltekit Starter Project</ExternalLink
			>
			&nbsp;and&nbsp;
			<ExternalLink href="https://github.com/navneetsharmaui/sveltekit-blog"
				>Sveltekit Blog Project</ExternalLink
			>
		</p>
		<p>
			The template has all the route and sample pages setup for you which you can change and
			customize further. All the pages are by default loaded from the different JS file and is
			fetched using prefetch when use hover over the links, which reduces the load time when
			user eventually decides to click on the link and load the route
		</p>
	</div>
</div>
<!-- End: About page section -->
