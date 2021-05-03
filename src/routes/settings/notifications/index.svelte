<script lang="ts">
	import HeadTags from '$shared/components/head-tags/HeadTags.svelte';
	import type { IMetaTagProperties } from '$lib/models';

	const metaData: Partial<IMetaTagProperties> = {
		title: 'Notifications | Sveltekit',
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		url: 'https://sveltekit-starter.vercelapp.com/settings/notifications',
		logoUrl: 'https://sveltekit-starter.vercelapp.com/favicon.ico',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter notifications'],
		searchUrl: 'https://sveltekit-starter.vercelapp.com/settings/notifications',
		sitemapUrl: 'https://sveltekit-starter.vercelapp.com/sitemap.xml',
	};
</script>

<HeadTags metaData="{metaData}" />

<h2 class="sm:text-3xl text-2xl font-normal mb-4 text-gray-900">Notifications</h2>
