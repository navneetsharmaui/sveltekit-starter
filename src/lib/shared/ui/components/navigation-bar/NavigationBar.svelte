<script lang="ts">
	// Svelte Imports
	import { createEventDispatcher } from 'svelte';

	// Models
	import type { IHeaderNavLink } from '$models/interfaces/iheader-nav-link.interface';

	// Exports
	/**
	 * @type {IHeaderNavLink}
	 */
	export let navLinks!: IHeaderNavLink[];
	export let logoImage = '';
	export let title = '';
	export let useTitleAndLogo = false;
	export let useThemeModeButton = true;

	// Local Properties
	let dark = false;

	// Local Methods
	const dispatch = createEventDispatcher();

	const toggleTheme = (): void => {
		dark = !dark;
		dispatch('toggleTheme', {
			dark: dark,
		});
	};
</script>

{#if useThemeModeButton}
	<button
		on:click="{() => toggleTheme()}"
		aria-label="Toggle Dark Mode"
		type="button"
		class="{useTitleAndLogo
			? 'sticky-theme-mode-button w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800'
			: 'w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800'}"
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
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
			{/if}
		</svg>
	</button>
{/if}
<nav
	class="flex flex-wrap items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100"
>
	<!-- <a href="#skip" class="skip-nav"> Skip to content </a> -->
	{#if useTitleAndLogo}
		<div class="w-auto p-1 text-gray-900 dark:text-gray-100 font-bold">
			<a sveltekit:prefetch href="/" class="flex flex-row h-12 justify-center items-center" aria-label="{title}">
				<img src="{logoImage}" alt="{title}" width="3rem" height="3rem" class="w-12 h-12 mr-2 rounded-full" />
				{title}
			</a>
		</div>
	{/if}
	<div class="flex flex-row items-center">
		{#each navLinks as navLink, index (navLink.path)}
			<a sveltekit:prefetch href="{navLink.path}" class="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
				{navLink.label}
			</a>
		{/each}
	</div>
</nav>
