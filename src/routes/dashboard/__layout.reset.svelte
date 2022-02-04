<script lang="ts">
	// Start: Local Imports
	import '../../styles/tailwind.css';

	// Start: External Imports

	// End: External Imports

	// Core services

	// Components
	import DashboardFooter from '$ui/components/footers/DashboardFooter.svelte';

	import { page } from '$app/stores';
	// End: Local Imports

	// Start: Local component properties

	// End: Local component properties

	// Start: Local component methods

	// End: Local component methods
</script>

<div class="bg-white dark:bg-black min-w-full max-w-full min-h-full max-h-full">
	<main class="block w-full bg-white dark:bg-black min-w-full min-h-full max-h-full">
		<aside
			class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-col md:flex-nowrap md:overflow-hidden shadow-md flex flex-row flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg-white border-r-[1px] border-solid border-gray-200"
		>
			<div class="px-4 min-w-full my-4">
				<a sveltekit:prefetch href="/">
					<h1 class="font-bold text-xl text-green-500">Sveltekit Starter</h1>
				</a>
			</div>
			<div class="w-full my-2">
				<hr />
			</div>
			<nav class="px-4 w-full">
				<ul>
					<li
						class="font-semibold cursor-pointer py-2 {$page.path === '/dashboard'
							? 'text-red-500'
							: ''}"
					>
						<a sveltekit:prefetch href="/dashboard"> Dashboard </a>
					</li>
					<li
						class="font-semibold cursor-pointer py-2 {$page.path.includes(
							'/dashboard/accounts',
						)
							? 'text-red-500'
							: ''}"
					>
						<a sveltekit:prefetch href="/dashboard/accounts"> Accounts </a>
					</li>
					<li
						class="font-semibold cursor-pointer py-2 {$page.path.includes(
							'/dashboard/sales',
						)
							? 'text-red-500'
							: ''}"
					>
						<a sveltekit:prefetch href="/dashboard/sales"> Sales </a>
					</li>
					<li
						class="font-semibold cursor-pointer py-2 {$page.path.includes(
							'/dashboard/expenses',
						)
							? 'text-red-500'
							: ''}"
					>
						<a sveltekit:prefetch href="/dashboard/expenses"> Expenses </a>
					</li>
					<li
						class="font-semibold cursor-pointer py-2 {$page.path.includes(
							'/dashboard/reports',
						)
							? 'text-red-500'
							: ''}"
					>
						<a sveltekit:prefetch href="/dashboard/reports"> Reports </a>
					</li>
				</ul>
			</nav>
		</aside>
		<article
			class="relative md:ml-64 flex flex-col w-full md:w-[calc(100%-15rem-1rem)] p-0 m-0 min-h-full h-full overflow-y-auto"
		>
			<header
				class="p-3 w-full flex flex-row justify-between items-center shadow-md h-14 border-b-[1px] border-r-[1px] border-solid border-gray-200"
			>
				<h1 class="font-semibold"> Dashboard </h1>
				<div
					class="block border-2 border-solid border-gray-100 rounded-full bg-gray-50 h-11 w-11"
				>
				</div>
			</header>
			<section class="block w-full min-h-[calc(100vh-56px-77px)]">
				<!-- Start: Defaull layout slot -->
				<slot />
			</section>
			<!-- End: Defaull layout slot -->
			<!-- Start: Footer -->
			<DashboardFooter />
			<!-- End: Footer -->
		</article>
	</main>
</div>
