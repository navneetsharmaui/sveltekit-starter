<style>
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
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => ({
		props: {
			title: `${status}: ${error?.message || ''}`,
			status,
			error,
		},
	});
</script>

<script lang="ts">
	// Start: Local Imports
	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';

	//  Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';

	// Start: Sevelte Imports
	import { dev } from '$app/env';
	// End: Sevelte Imports

	// End: Local Imports
	// Start: Exported Properties
	export let status: string;

	export let error: Error;
	// End: Exported Properties
	const metaData: Partial<IMetaTagProperties> = {
		title: `${status} | Sveltekit`,
		description: '404 page of Sveltekit starter project',
	};
</script>

<!-- Start: Header Tage -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tage -->

<!-- Start: Error View Layout -->
<div class="md:container md:mx-auto">
	<div class="flex flex-col justify-center items-center">
		<!-- Start: Error Status Code -->
		<h1>
			{status}
		</h1>
		<!-- End: Error Status Code -->
		<p>
			{error.name}
		</p>
		<!-- Start: Error Message container -->
		{#if dev && error.stack}
			<pre> {error.message} </pre>
		{/if}
		<!-- End: Error Message container -->
	</div>
</div>
<!-- End: Error View Layout -->
