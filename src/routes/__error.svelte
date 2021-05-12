<style lang="scss" type="text/scss">
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts" context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status,
				error,
			},
		};
	}
</script>

<script lang="ts">
	// Start: Sevelte Imports
	import { dev } from '$app/env';
	// End: Sevelte Imports

	// Start: Local Imports

	//  Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {string}
	 */
	export let status: string;

	/**
	 * @type {string}
	 */
	export let error: Error;
	// End: Exported Properties

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: `${status} | Sveltekit`,
		description: '404 page of Sveltekit starter project',
	};
</script>

<HeadTags metaData="{metaData}" />
<div class="md:container md:mx-auto">
	<div class="flex flex-col justify-center items-center">
		<h1>
			{status}
		</h1>
		<p>
			{error.name}
		</p>
		{#if dev && error.stack}
			<pre> {error.message} </pre>
		{/if}
	</div>
</div>
