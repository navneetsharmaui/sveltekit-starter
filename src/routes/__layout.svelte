<script lang="ts" context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				path: page.path,
			},
		};
	}
</script>

<script lang="ts">
	// Start: Local Imports

	// Start: External Imports

	// End: External Imports

	// Core services

	// Components
	import Header from '$ui/components/header/Header.svelte';
	import Footer from '$ui/components/footer/Footer.svelte';
	import RouteTransition from '$ui/components/route-transition/RouteTransition.svelte';
	import CompiledStyles from '$components/compiled-styles/CompiledStyles.svelte';

	// Models
	import type { IHeaderNavLink } from '$models/interfaces/iheader-nav-link.interface';
	import type { ICompiledCSS } from '$models/interfaces/icompiled-css.interface';
	// End: Local Imports

	// Start: Local component properties
	export let path = '';

	/**
	 * @type {IHeaderNavLink}
	 */
	const navLinks: IHeaderNavLink[] = [
		{
			path: '/',
			label: 'Home',
		},
		{
			path: '/projects',
			label: 'Projects',
		},
		{
			path: '/settings',
			label: 'Settings',
		},
		{
			path: '/users',
			label: 'Users',
		},
	];

	const stylesList: ICompiledCSS[] = [
		{
			url: '/tailwind.css',
		},
	];
	// End: Local component properties

	// Start: Local component methods

	const toggleThemeMode = (event: CustomEvent<{ dark: boolean }>): void => {
		const htmlTag = document.getElementsByTagName('html').item(0);
		htmlTag.className = event.detail.dark ? 'dark' : 'light';
	};

	// End: Local component methods
</script>

<CompiledStyles cssFiles="{stylesList}" />

<div class="bg-white dark:bg-black">
	<!-- Start: Header Navigation -->
	<Header
		on:toggleTheme="{(e) => toggleThemeMode(e)}"
		navLinks="{navLinks}"
		logoImage="{'/images/author/sveltekit-blogger.svg'}"
		title="{'Sveltekit Starter'}"
		useThemeModeButton="{true}"
		useTitleAndLogo="{true}"
	/>
	<!-- End: Header Navigation -->
	<main id="skip" class="flex flex-col justify-center px-8 bg-white dark:bg-black">
		<!-- Start: Defaull layout slot -->
		<RouteTransition referesh="{path}">
			<slot />
		</RouteTransition>
		<!-- End: Defaull layout slot -->
		<!-- Start: Footer -->
		<Footer />
		<!-- End: Footer -->
	</main>
</div>
