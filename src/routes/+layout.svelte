<script lang="ts">
	// Start: Local Imports

	// Start: External Imports
	import '../styles/tailwind.css';

	// End: External Imports

	// Core services

	// Components
	import Header from '$ui/components/headers/Header.svelte';
	import Footer from '$ui/components/footers/Footer.svelte';
	// End: Local Imports

	// Start: Local component properties

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
	<main class="flex flex-col w-full bg-white dark:bg-black min-w-full min-h-full max-h-full">
		<article
			class="relative md:ml-64 flex flex-col justify-center items-start w-[calc(100vw - 15rem - 1rem)] p-0 h-auto m-0 px-4 overflow-y-auto"
		>
			<!-- Start: Defaull layout slot -->
			<slot />
			<!-- End: Defaull layout slot -->
			<!-- Start: Footer -->
			<Footer />
			<!-- End: Footer -->
		</article>
	</main>
</div>
