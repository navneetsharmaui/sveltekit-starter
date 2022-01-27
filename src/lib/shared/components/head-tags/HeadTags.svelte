<script lang="ts">
	// Start: Local Imports
	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';

	// Components
	import SEO from '../seo/SEO.svelte';
	// End: Local Imports

	const description =
		'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).';

	// Start: Exported Properties
	/**
	 * @type {IMetaTagProperties}
	 */
	export let metaData: Partial<IMetaTagProperties> = {};
	// End: Exported Properties

	metaData = {
		title: metaData.title ? metaData.title : 'Sveltekit Starter',
		description: metaData.description ? metaData.description : description,
		...metaData,
	};
</script>

<SEO metaData="{metaData}" />
