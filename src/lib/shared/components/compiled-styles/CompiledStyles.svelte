<script lang="ts">
	// Start: Local Imports
	// Models
	import type { ICompiledCSS } from '$models/interfaces/icompiled-css.interface';

	// Data
	import { environment } from '$environment/environment';
	// End: Local Imports

	// Start: Exported Properties
	export let cssFiles: ICompiledCSS[] = [];
	// End: Exported Properties

	const isProd = environment.production;
</script>

<svelte:head>
	{#if cssFiles.length > 0 && isProd}
		{#each cssFiles as cssFile}
			<link rel="stylesheet" href="{cssFile.url}" />
		{/each}
	{/if}
</svelte:head>
