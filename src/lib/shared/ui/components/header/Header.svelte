<style lang="scss" type="text/scss">
</style>

<script lang="ts">
	// Start: Local Imports

	// Models
	import type { IHeaderNavLink } from '$lib/models/interfaces/iheader-nav-link.interface';
	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {string}
	 */
	export let title = '';

	/**
	 * @type {IHeaderNavLink}
	 */
	export let navLinks: IHeaderNavLink[] = [];
	// End: Exported Properties
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		{#if title}
			<a sveltekit:prefetch class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
				<span class="ml-3 text-xl">{title}</span>
			</a>
		{/if}
		<nav
			class="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center"
			class:md:border-l="{title}"
			class:md:border-gray-400="{title}"
		>
			{#each navLinks as navLink (navLink.path)}
				<a sveltekit:prefetch class="mr-5 hover:text-gray-900" href="{navLink.path}">{navLink.label}</a>
			{/each}
		</nav>
	</div>
</header>
