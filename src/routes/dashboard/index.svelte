<script lang="ts">
	// Local Imports

	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';

	// Exports

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Dashboard | Sveltekit Starter',
		description: 'Dashboard page of Sveltekit starter project',
		url: '/dashboard',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter dashboard'],
		searchUrl: '/dashboard',
	};
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white"> Dashboard </h1>
	<div class="mb-8">
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			This the dashboard view for my portfolio to track the metric related to the various platforms I use and are
			availabe for the public use. Right now it just tracks GitHub metrics.
		</p>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati est dolor voluptatum tenetur
			repellendus esse consequatur, earum, voluptatem animi porro distinctio itaque. Ratione dolore distinctio
			corporis, vitae totam est.
		</p>
	</div>
</div>
