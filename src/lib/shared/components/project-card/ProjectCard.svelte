<script lang="ts">
	import ExternalLink from '$lib/shared/ui/components/external-link/ExternalLink.svelte';
	import type { IProjectCard } from '$models/interfaces/iproject-card.interface';

	// Start: Local Imports
	// Components

	// Models

	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {IBlogPostSummary}
	 */
	export let project!: IProjectCard;
	// End: Exported Properties
</script>

{#if project && project?.slug}
	<div
		class="mb-4 hover:transition-shadow hover:shadow dark:hover:transition-shadow dark:hover:shadow flex items-center border border-gray-200 dark:border-gray-800 rounded p-4"
	>
		<div class="h-14 w-14 ml-2 mr-4 flex-shrink-0">
			<span class="sr-only">Svelte</span>
			<img
				alt="{'Sveltekit Starter'}"
				src="{'/images/author/sveltekit-blogger.svg'}"
				width="1.75rem"
				height="1.75rem"
				class="h-14 w-14 min-w-sm text-gray-900 dark:text-gray-100"
			/>
		</div>
		<div>
			<ExternalLink href="{project.slug}" ariaLabel="{project.title}">
				<h3 class="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
					{project?.title}
				</h3>
			</ExternalLink>
			<p class="leading-5 text-gray-700 dark:text-gray-300">
				{project?.description}
			</p>
		</div>
	</div>
{/if}
