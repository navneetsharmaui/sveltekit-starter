<script lang="ts">
	// Svelte Imports
	import { createEventDispatcher } from 'svelte';

	// Models

	// Exports
	export let useThemeModeButton = true;

	// Local Properties
	let dark = false;

	// Local Methods
	const dispatch = createEventDispatcher();

	const toggleTheme = (): void => {
		dark = !dark;
		dispatch('toggleTheme', {
			dark,
		});
	};
</script>

{#if useThemeModeButton}
	<button
		on:click="{() => toggleTheme()}"
		aria-label="Toggle Dark Mode"
		type="button"
		class="{'sticky-theme-mode-button w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800'}"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			stroke="currentColor"
			class="w-4 h-4 text-gray-800 dark:text-gray-200"
		>
			{#if dark}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="{2}"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				></path>
			{:else}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="{2}"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				></path>
			{/if}
		</svg>
	</button>
{/if}
