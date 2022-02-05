<script lang="ts">
	// Start: Local Imports

	// Models

	// Components
	import { NavigationProgressBar } from '$ui/components/navigation-progress-bar';
	import NavigationBar from '$ui/components/navigation-bars/NavigationBar.svelte';
	// End: Local Imports

	// Start: Exported Properties
	export let useThemeModeButton!: boolean | undefined;

	// End: Exported Properties

	// Local properties
</script>

<!-- Start: Navigation Progress bar -->
<NavigationProgressBar />
<!-- End: Navigation Progress bar -->

<!-- Start: Navigation bar -->
<NavigationBar useThemeModeButton="{useThemeModeButton}" on:toggleTheme />
<!-- End: Navigation bar -->
