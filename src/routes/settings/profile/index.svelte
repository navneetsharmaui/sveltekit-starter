<script lang="ts">
	/**
	 * Start: Local Imports
	 */
	// Components
	import HeadTags from '$shared/components/head-tags/HeadTags.svelte';

	// Models
	import type { IMetaTagProperties } from '$lib/models';
	/**
	 * End: Local Imports
	 */

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Profile | Sveltekit',
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		url: '/settings/profile',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter profile'],
		searchUrl: '/settings/profile',
	};
</script>

<HeadTags metaData="{metaData}" />

<h2 class="sm:text-3xl text-2xl font-normal mb-4 text-gray-900">Profile</h2>
