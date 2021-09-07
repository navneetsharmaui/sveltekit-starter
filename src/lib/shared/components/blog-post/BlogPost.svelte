<script lang="ts">
	// Start: Local Imports

	// Models
	import type { IBlogPostSummary } from '$models/interfaces/iblog-post-summary.interface';

	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {IBlogPostSummary}
	 */
	export let blog!: IBlogPostSummary;
	// End: Exported Properties
</script>

{#if blog}
	<div class="mb-8 w-full border-b border-gray-100 dark:border-gray-800 pb-5">
		<div class="flex flex-col md:flex-row justify-between">
			<h3 class="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
				{blog.title}
			</h3>
		</div>
		<p class="text-gray-600 dark:text-gray-400">{blog.summary}</p>
	</div>
	<!-- <hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" /> -->
{/if}
