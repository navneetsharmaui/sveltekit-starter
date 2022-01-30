<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ page }) => ({
		props: {
			path: page.path,
		},
	});
</script>

<script lang="ts">
	// Start: Local Imports

	// Start: External Imports
	import '../styles/tailwind.css';

	// End: External Imports

	// Core services

	// Components
	import Header from '$ui/components/header/Header.svelte';
	import Footer from '$ui/components/footer/Footer.svelte';
	import RouteTransition from '$ui/components/route-transition/RouteTransition.svelte';
	// End: Local Imports

	// Start: Local component properties
	export let path = '';

	// End: Local component properties

	// Start: Local component methods

	const toggleThemeMode = (event: CustomEvent<{ dark: boolean }>): void => {
		const htmlTag = document.getElementsByTagName('html').item(0);
		if (htmlTag) {
			htmlTag.className = event.detail.dark ? 'dark' : 'light';
		}
	};

	// End: Local component methods
</script>

<div class="bg-white dark:bg-black min-w-full max-w-full min-h-full max-h-full">
	<!-- Start: Header Navigation -->
	<Header on:toggleTheme="{(e) => toggleThemeMode(e)}" useThemeModeButton="{true}" />
	<!-- End: Header Navigation -->
	<main class="block w-full bg-white dark:bg-black min-w-full min-h-full max-h-full">
		<aside
			class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-col md:flex-nowrap md:overflow-hidden shadow-xl flex flex-row flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg-gray-50 border-r-[1px] border-solid border-gray-200"
		>
			<div class="px-4 min-w-full mt-4 mb-8">
				<h1 class="font-bold text-xl text-green-500">Sveltekit Starter</h1>
			</div>
			<nav class="px-4 w-full">
				<ul>
					<li class="font-semibold cursor-pointer py-2"> Home </li>
					<li class="font-semibold cursor-pointer py-2"> Dashboard </li>
					<li class="font-semibold cursor-pointer py-2"> Project </li>
					<li class="font-semibold cursor-pointer py-2"> Users </li>
				</ul>
			</nav>
		</aside>
		<article
			class="relative md:ml-64 flex flex-col w-[calc(100vw - 15rem - 1rem)] p-0 h-auto m-0 px-4 overflow-y-auto"
		>
			<!-- Start: Defaull layout slot -->
			<RouteTransition referesh="{path}">
				<slot />
			</RouteTransition>
			<!-- End: Defaull layout slot -->
			<!-- Start: Footer -->
			<Footer />
			<!-- End: Footer -->
		</article>
	</main>
</div>
