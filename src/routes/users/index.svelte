<style lang="scss">
</style>

<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		return {
			props: {
				users: await fetch('/users.json').then((res) => res.json()),
			},
		};
	}
</script>

<script lang="ts">
	// Sevelte Imports
	// Utils

	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';

	// Models
	import type { UserModel } from '$models/classes/user.model';
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	// Start: Exported properties
	export let users: UserModel[] = [];
	// End: Exported properties

	// Start: Local component properties

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Users | Sveltekit',
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		url: '/users',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter users'],
		searchUrl: '/users',
	};
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> Users </h1>
	<div class="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<p>
			This page is setup in a way where you can programmatically route to sub routes. Click on each user card to
			go to there details view.
		</p>
	</div>
	{#if users.length > 0}
		{#each users as user}
			<a sveltekit:prefetch href="{`/users/${user.id}`}" class="w-full">
				<div
					class="mb-4 hover:transition-shadow hover:shadow dark:hover:transition-shadow dark:hover:shadow flex items-center border border-gray-200 dark:border-gray-800 rounded p-4"
				>
					<div class="h-14 w-14 ml-2 mr-4 flex-shrink-0">
						<span class="sr-only">{user.name}</span>
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="h-14 w-14 min-w-sm dark:text-gray-400"
							viewBox="0 0 24 24"
						>
							<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
							{user.name}
						</h3>
						<p class="leading-5 text-gray-700 dark:text-gray-300">
							{user.job}
						</p>
					</div>
				</div>
			</a>
		{/each}
	{/if}
</div>
