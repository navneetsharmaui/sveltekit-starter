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

<h2 class="sm:text-3xl text-2xl font-normal mb-4 text-gray-900">Notifications</h2>
