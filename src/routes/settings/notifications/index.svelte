<script lang="ts">
	// Start: Local Imports
	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Notifications | Sveltekit',
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		url: '/settings/notifications',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter notifications'],
		searchUrl: '/settings/notifications',
	};
	// End: Local component properties
</script>

<!-- Start: Header Tage -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tage -->

<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h2 class="text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> Notifications </h2>
	<div class="mb-8 text-gray-600 dark:text-gray-400 text-justify">
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem consectetur, temporibus aliquam totam
			ullam. Voluptatibus vel reprehenderit officiis. Quibusdam odio, error quaerat soluta amet suscipit a
			veritatis ipsum sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, omnis blanditiis eius
			velit ab quisquam pariatur esse hic facere expedita tenetur quas ut illo cumque nobis laboriosam illum ad
			magnam?
		</p>
	</div>
</div>
