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
	import '../../styles/tailwind.css';

	// Start: External Imports

	// End: External Imports

	// Core services

	// Components
	import RouteTransition from '$ui/components/route-transition/RouteTransition.svelte';
	// End: Local Imports

	// Start: Local component properties
	export let path = '';

	// End: Local component properties

	// Start: Local component methods

	// End: Local component methods
</script>

<div class="bg-white dark:bg-black min-w-full max-w-full min-h-full max-h-full">
	<main class="block w-full bg-white dark:bg-black min-w-full min-h-full max-h-full">
		<aside
			class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-col md:flex-nowrap md:overflow-hidden shadow-md flex flex-row flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg-white border-r-[1px] border-solid border-gray-200"
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
			class="relative md:ml-64 flex flex-col w-[calc(100vw - 15rem - 1rem)] p-0 h-auto m-0 overflow-y-auto"
		>
			<header
				class="p-3 w-full flex flex-row justify-between items-center shadow-md h-14 border-b-[1px] border-r-[1px] border-solid border-gray-200"
			>
				<h1> Dashboard </h1>
				<div
					class="block border-2 border-solid border-gray-100 rounded-full bg-gray-50 h-11 w-11"
				>
				</div>
			</header>
			<section class="px-4">
				<!-- Start: Defaull layout slot -->
				<RouteTransition referesh="{path}">
					<slot />
				</RouteTransition>
			</section>
			<!-- End: Defaull layout slot -->
			<!-- Start: Footer -->
			<!-- End: Footer -->
		</article>
	</main>
</div>
